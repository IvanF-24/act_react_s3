import Link from "next/link";

export default function ProductoIndividualPage({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Producto: {id}</h1>
      <p>Este es un producto con el ID <strong>{id}</strong>. Aquí puedes ver su descripción y detalles.</p>

      <Link href="/productos" style={{ display: "block", marginTop: "1rem" }}>
        ← Volver a la lista de productos
      </Link>
    </div>
  );
}
