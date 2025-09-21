import Link from "next/link";

export default function ProductosLayout({ children }) {
  return (
    <div>
      <h1>Sección de Productos</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <Link href="/productos/electronicos" style={{ marginRight: "1rem" }}>
          Electrónicos
        </Link>
        <Link href="/productos/ropa">Ropa</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
