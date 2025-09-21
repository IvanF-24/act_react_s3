export default function DocsPage({ params }) {
  const { slug } = params;
  const segmentos = slug || [];

  // 📌 Breadcrumbs
  const breadcrumbs =
    segmentos.length > 0 ? `Docs > ${segmentos.join(" > ")}` : "Docs";

  // 📌 Título principal
  const titulo =
    segmentos.length > 0
      ? `Documentación: ${segmentos[segmentos.length - 1]}`
      : "Documentación Principal";

  // 📌 Contenido básico según la ruta
  const contenido =
    segmentos.length === 0
      ? "Bienvenido a la documentación. Selecciona una sección para comenzar."
      : `Estás en la sección: ${segmentos.join(" / ")}`;

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{breadcrumbs}</p>

      <div style={{ marginTop: "1rem" }}>
        <p>{contenido}</p>
      </div>
    </div>
  );
}
