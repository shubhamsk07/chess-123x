```typescript
import { MetadataRoute } from "next/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocs, getDocById } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Document",
};

export default async function DocPage({params}: {params: {id: string}}) {
  const doc = await getDocById(params.id)
  if (!doc) {
    notFound()
  }

  return (
    <div>
      <h1>{doc.title}</h1>
      <p>{doc.content}</p>
    </div>
  );
}

export const revalidate = 10;

export const dynamic = "force-static";
```
  