import Cardstyles from "./style.css";
import Link from "next/link";

export default function MovieCard(props) {
  const { Fullname, stars, slug } = props.data.attributes;
//   console.log(props.data);

  return (
    <>
      <div className="card">
        <p className="name">Movie Name: {Fullname}</p>
        <p>Movie Stars: {stars}</p>
        <button><Link href={`/movies/${slug}`}>Details</Link></button>

      </div>
    </>
  );
}
