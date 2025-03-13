```typescript
import { MetadataRoute } from "next/server";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Document",
};

export default function DocPage({ params }: { params: { docId?: string } }) {
  const [content, setContent] = useState<string>(
    params.docId ? localStorage.getItem(params.docId) || "" : ""
  );

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    if (params.docId) {
      localStorage.setItem(params.docId, content);
    }
  };

  return (
    <div>
      <h1>{params.docId || "New Document"}</h1>
      <textarea value={content} onChange={handleContentChange} />
      {params.docId && <button onClick={handleSave}>Save</button>}
    </div>
  );
}

export const dynamic = "force-dynamic";

export const revalidate = 0;

export const generateMetadata = (
  params: { docId?: string }
): MetadataRoute => {
  return {
    title: params.docId ? `Document: ${params.docId}` : "New Document",
  };
};
```
  