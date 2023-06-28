import Link from "next/link";
import { introduction } from "../lib/data.js";
import { volumes } from "../lib/data.js";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      {/* <ul>
      
        <li >
          
        </li>
        <li>
          <Link href="/volumes/the-two-towers">{volume.title}</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">{volume.title}</Link>
        </li>
      </ul> */}
      <ul>
        {volumes.map((volume) => (
          <li key={volumes.title}>
            <Link href="/volumes/the-fellowship-of-the-ring">
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
