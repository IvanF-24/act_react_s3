import Link from "next/link";

export default function ProductosPage() {
  const productos = [
    { id: "1", nombre: "Laptop" },
    { id: "2", nombre: "Smartphone" },
    { id: "3", nombre: "Tablet" },
  ];

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link href={`/productos/${producto.id}`}>
              {producto.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
