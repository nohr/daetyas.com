import Document from "@/app/_components/document";
import { BlockType } from "@/app/app";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daetyas | words",
  description: "personal website of daetyas",
};

export default async function DocumentPage({ params }: { params: { slug: string } }) {
    
const block = await client.fetch<BlockType>(
    `*[slug.current == $slug][0]`,
    { slug: params.slug }
);
    
  return  <Document block={block} />;
}
