import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>¡Bienvenido a mi sitio web con Next.js!</p>

      <div style={{ marginTop: "1rem" }}>
        <p>Explora las secciones:</p>
        <ul>
          <li><Link href="/productos">Ir a Productos</Link></li>
          <li><Link href="/blog">Ir al Blog</Link></li>
          <li><Link href="/contacto">Ir a Contacto</Link></li>
        </ul>
      </div>
    </div>
  );
}
