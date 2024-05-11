import Link from "next/link";

export default function RootPage() {
  return (
    <main className="m-10">
      <Link href={'/page2'} className="p-3 border-red-950 bg-red-200">{`<Link /> navigation`}</Link>
    </main>
  );
}
