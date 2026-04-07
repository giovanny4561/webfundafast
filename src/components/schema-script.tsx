/**
 * SchemaScript — Server Component
 * Renders one or more Schema.org JSON-LD blocks as <script> tags.
 * Place directly inside page JSX (not inside <head>; Google reads both).
 * Multiple schemas can be passed as an array to colocate them in one tag.
 */

type JsonLdObject = Record<string, unknown>;

interface Props {
  schema: JsonLdObject | JsonLdObject[];
}

export function SchemaScript({ schema }: Props) {
  const isArray = Array.isArray(schema);

  if (isArray && schema.length === 0) return null;

  // Multiple unrelated schemas: one <script> tag per object keeps them
  // individually parseable and avoids an invalid @graph wrapper for
  // heterogeneous types.
  if (isArray) {
    return (
      <>
        {(schema as JsonLdObject[]).map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
