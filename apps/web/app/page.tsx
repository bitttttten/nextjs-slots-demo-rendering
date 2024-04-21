import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Home page</h1>
      <p>
        <Link href="/studio">Studio LP</Link>
      </p>
      <p>
        <Link href="/some-other-page">Some other page (not studio)</Link>
      </p>
    </main>
  );
}
