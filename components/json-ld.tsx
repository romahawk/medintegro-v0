/**
 * Renders one JSON-LD block. Server component - the schema is present in the
 * initial HTML rather than being injected after hydration.
 */
export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
