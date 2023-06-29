import { useRouter } from "next/router";
import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const eps = volumes.find((v) => v.slug === slug);

  return <div></div>;
}
