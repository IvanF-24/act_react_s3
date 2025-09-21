import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mi App",
  description: "Ejemplo con layout raíz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f3f3f3" }}>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <main style={{ padding: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
