import React from "react";

// http://localhost:1337/api/cards?filters[slug][$eq]=death-note

async function getData({slug}) {
  const res = await fetch(
    `http://localhost:1337/api/cards?filters[slug][$eq]=${slug}`,{
        cache:'no-store'
    }
  );
  const data = await res.json();
  return data;
}

const page = async ({ params }) => {
  const { slug } = params;
  console.log(slug);

  const data = await getData({slug});
//   console.log(data.data[0].attributes)
  const {Fullname ,stars, Discription}=data.data[0].attributes
  return (
    <div>
      <h1>MovieName: {Fullname}</h1>
        <p>Stars: {stars}</p>
        <p>{Discription}</p>
    </div>
  );
};

export default page;
