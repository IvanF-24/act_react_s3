import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <div>
      <h1>Sección de Blog</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <Link href="/blog/articulo-1" style={{ marginRight: "1rem" }}>
          Artículo 1
        </Link>
        <Link href="/blog/articulo-2" style={{ marginRight: "1rem" }}>
          Artículo 2
        </Link>
        <Link href="/blog/articulo-3">Artículo 3</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
