export default function ElectronicosPage() {
  const productos = ["Laptop", "Smartphone", "Tablet"];
  
  return (
    <div>
      <h2>Productos &gt; Electrónicos</h2>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
