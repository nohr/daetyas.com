import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { BlockType, InfoType } from "../app";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../_components/url";

export const metadata: Metadata = {
  title: "dae tyas | info",
  description: "personal website of dae tyas",
};

export default async function InfoPage() {
  const info = await client.fetch<InfoType>(`*[_type == "info"][0]`);

  return <div className="flex flex-col text-base">
    <div className="relative h-60 w-60">
          <Image
            src={ urlFor(info.image).url()}
            alt={"me"}
            sizes="100vw, (min-width: 1024px) 33vw, 50vw"
            fill
            suppressHydrationWarning
            className={`absolute object-cover z-10`}
      />
    </div>
          <PortableText value={info.text} />
  </div>;
}
