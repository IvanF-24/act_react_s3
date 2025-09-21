export default function RopaPage() {
  const productos = ["Camiseta", "Pantalón", "Chaqueta"];
  
  return (
    <div>
      <h2>Productos &gt; Ropa</h2>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
