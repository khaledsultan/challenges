import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductList() {
  const router = useRouter();

  const [data, setData] = useState();

  useEffect(() => {
    async function get() {
      const response = await fetch("/api/products");
      const products = await response.json();
      setData(products);
    }

    get();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </li>
      ))}
    </ul>
  );
}
