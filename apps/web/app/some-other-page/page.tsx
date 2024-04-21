import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Some other page</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
