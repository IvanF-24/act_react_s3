import Link from "next/link";

export default function ArticuloIndividualPage({ params }) {
  const { slug } = params;

  return (
    <div>
      <h1>Artículo: {slug}</h1>
      <p>
        Este es el contenido del artículo con el slug <strong>{slug}</strong>.
        Aquí puedes agregar información, ejemplos y detalles del tema.
      </p>

      <Link href="/blog" style={{ display: "block", marginTop: "1rem" }}>
        ← Volver a la lista de artículos
      </Link>
    </div>
  );
}
