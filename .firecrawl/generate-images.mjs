import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const API_KEY = "352641ca1f1c338d886cc7d3ed5d41c0";
const BASE_URL = "https://api.kie.ai";
const OUT_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/images"
);

const IMAGES = [
  {
    filename: "hero-tendero.jpg",
    prompt:
      "Professional photography, warm cinematic light. A friendly Colombian tendero (neighborhood corner store owner) smiling behind a colorful well-stocked tienda de barrio counter. Shelves full of products. Authentic Colombian neighborhood setting. Warm golden hour light. Photorealistic, high quality, 2025.",
    aspect_ratio: "16:9",
  },
  {
    filename: "hero-comunidad.jpg",
    prompt:
      "Professional photography. Aerial view of a vibrant Colombian neighborhood in Cali, Suroccidente Colombia. Colorful houses, street markets, community life. Warm afternoon light, cinematic. Photorealistic.",
    aspect_ratio: "16:9",
  },
  {
    filename: "mision-tenderos.jpg",
    prompt:
      "Professional photography. Colombian tendero family standing proudly in front of their neighborhood store (tienda de barrio). Parents and children smiling, happy, successful small business owners. Warm natural light. Colombia suroccidente. Photorealistic.",
    aspect_ratio: "4:3",
  },
  {
    filename: "vision-crecimiento.jpg",
    prompt:
      "Professional photography. Colombian small business owner (tendero) reviewing financial documents and smiling, growth and success concept. Modern yet accessible setting. Warm light. Photorealistic.",
    aspect_ratio: "4:3",
  },
];

function request(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(BASE_URL + urlPath);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch { resolve(data); }
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", (err) => { fs.unlinkSync(dest); reject(err); });
  });
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function pollTask(taskId, label) {
  console.log(`  Polling ${label} (${taskId})...`);
  for (let i = 0; i < 60; i++) {
    await sleep(5000);
    const res = await request("GET", `/api/v1/jobs/recordInfo?taskId=${taskId}`);
    const state = res?.data?.state;
    console.log(`    [${i + 1}] state=${state ?? "?"}`);

    if (state === "success" || state === "succeed" || state === "completed") {
      try {
        const resultJson = JSON.parse(res.data.resultJson ?? "{}");
        const url = resultJson.resultUrls?.[0] || resultJson.imageUrl || resultJson.url;
        if (url) return url;
      } catch {}
      const match = JSON.stringify(res).match(/https?:\/\/[^"\\]+\.(jpg|png|jpeg|webp)/i);
      if (match) return match[0];
    }
    if (state === "failed" || state === "error" || state === "fail") {
      console.log("  Task failed:", res?.data?.failMsg);
      return null;
    }
  }
  console.log("  Timeout waiting for task");
  return null;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const img of IMAGES) {
    console.log(`\nGenerating: ${img.filename}`);
    const taskRes = await request("POST", "/api/v1/jobs/createTask", {
      model: "nano-banana-pro",
      input: {
        prompt: img.prompt,
        aspect_ratio: img.aspect_ratio,
        resolution: "2K",
        output_format: "jpg",
      },
    });

    if (taskRes.code !== 200) {
      console.log("  Failed to create task:", taskRes);
      continue;
    }

    const taskId = taskRes.data.taskId;
    const outputUrl = await pollTask(taskId, img.filename);

    if (!outputUrl) {
      console.log(`  No output URL for ${img.filename}`);
      continue;
    }

    console.log(`  Downloading from ${outputUrl.substring(0, 80)}...`);
    const dest = path.join(OUT_DIR, img.filename);
    await download(outputUrl, dest);
    console.log(`  Saved → ${dest}`);
  }

  console.log("\nDone!");
}

main().catch(console.error);
