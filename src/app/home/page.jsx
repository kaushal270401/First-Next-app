import qs from "qs";
import Card from "../Component/Card";
import Header from "../Component/Header";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:1337/api/pages?populate=*");
  const data = await res.json();
  return data;
}

function BlockRenderer(blocks) {
  return blocks.map((block, index) => {
    switch (block.__component) {
      case "page.cta":
        return <Card data={block} key={index} />;
      case "page.banner":
        return <Header data={block} key={index} />;
    }
  });
}

export default async function home() {
  const data = await getData();
  const blocks = data.data[0].attributes.Blocks;
  console.log(data);
  return (
    <>
      {/* {BlockRenderer(blocks)} */}
      <div className="cardContainer">{BlockRenderer(blocks)}</div>
      <Link href="movies">Go to  Movies</Link>
    </>
  );
}
