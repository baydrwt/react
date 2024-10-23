import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <ul>
        <h1>News Page</h1>
        <li>
          <Link href="/news/next-is-awesome">Next is awesome</Link>
        </li>
      </ul>
    </>
  );
}
