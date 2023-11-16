import "./globals.css";
import Nav from "./_components/nav";
import Footer from "./_components/footer";
import Grid from "./_components/grid";
import { BlockType } from "./app";
import { client } from "@/sanity/lib/client";

// export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blocks = await client.fetch<BlockType[]>(
    `*[_type == "project" || _type == "word" || _type == "exhibition"]`
  );

  return (
    <html lang="en">
      <body className="flex flex-col h-[100dvh] overscroll-y-none px-9 bg-slate text-gray">
        <Nav />
        <main className="flex h-full flex-col text-[0px] overflow-y-scroll ">
          <Grid blocks={blocks}>{children}</Grid>
        </main>
        <Footer />
      </body>
    </html>
  );
}
