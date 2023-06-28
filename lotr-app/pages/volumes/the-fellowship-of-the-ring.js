import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Find() {
  const eps = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");
  //   const books = eps.map(({ book }) => book);

  return (
    <div>
      <Link href="/">HomePage</Link>
      <h1>{eps.title}</h1>
      <p>{eps.description}</p>
      <ul>
        {eps.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}.{book.title}
          </li>
        ))}
      </ul>
      <Image
        src={eps.cover}
        height={230}
        width={140}
        alt="the-fellowship-of-the-ring"
      />
      <ul>
        <li>
          <Link href="./the-two-towers">Next Volumn</Link>
        </li>
      </ul>
    </div>
  );
}
