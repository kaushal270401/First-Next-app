import qs from "qs";
import MovieCard from "../Component/MovieCard";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:1337/api/cards?populate=*",{
    cache:"no-store"
  });
  const data = await res.json();
  return data;
}

export default async function home() {
  const data = await getData();
  const blocks = data.data;
  console.log(blocks);
  return (
    <>
      <div className="cardContainer">
        {blocks.map((block) => {
          return (
            <>
              <MovieCard data={block} />
            </>
          );
        })}
        

      </div>
      <Link href="/home">Go to home</Link>
    </>
  );
}
