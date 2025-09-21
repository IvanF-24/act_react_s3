import Link from "next/link";

export default function BlogPage() {
  const articulos = [
    { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
    { slug: "react-server-components", titulo: "React Server Components" },
    { slug: "app-router-guia", titulo: "Guía del App Router" },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.slug}>
            <Link href={`/blog/${articulo.slug}`}>
              {articulo.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
