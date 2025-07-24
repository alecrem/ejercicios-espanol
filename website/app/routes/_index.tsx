import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Señor Mano te enseña castellano" },
    {
      name: "description",
      content:
        "Ejercicios de español para niños que reciben su educación principalmente en japonés o inglés. Cuadernillos organizados por conjugaciones verbales con formato DIN A5 optimizado para impresión.",
    },
  ];
};

const units = [
  {
    number: 1,
    title: "primera conjugación (-AR)",
    verbs: ["dibujar", "buscar", "hablar", "bailar"],
    description:
      "Aprende los verbos de primera conjugación con ejercicios de diálogo, conjugación, elección múltiple, transformaciones, ordenamiento de palabras y corrección de errores.",
  },
  {
    number: 2,
    title: "segunda conjugación (-ER)",
    verbs: ["comer", "leer", "aprender", "beber"],
    description:
      "Practica los verbos de segunda conjugación a través de actividades variadas que refuerzan el aprendizaje de estas formas verbales esenciales.",
  },
  {
    number: 3,
    title: "tercera conjugación (-IR)",
    verbs: ["vivir", "escribir", "abrir", "subir"],
    description:
      "Domina los verbos de tercera conjugación con ejercicios estructurados que consolidan el conocimiento de estas importantes formas verbales.",
  },
];

export async function loader() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const copyrightYear =
    currentYear === startYear
      ? `${startYear}`
      : `${startYear} - ${currentYear}`;
  return {
    copyrightYear,
  };
}

export default function Index() {
  const { copyrightYear } = useLoaderData<typeof loader>();

  return (
    <Layout copyrightYear={copyrightYear}>
      <section
        style={{
          textAlign: "center" as const,
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "12px",
          marginBottom: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            marginBottom: "1rem",
            color: "#1a1a1a",
          }}
        >
          Señor Mano te enseña castellano
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            marginBottom: "2rem",
          }}
        ></p>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "left" as const,
          }}
        >
          <p>
            Estos cuadernillos para practicar español están diseñados
            específicamente para niños que escuchan suficiente español en casa,
            pero reciben su educación en otro idioma. Esto es común si vives en
            un país en el que no se habla español.
          </p>
          <p>
            Se necesita saber leer y escribir un poco para aprender con Señor
            Mano, así que lo recomendamos a partir de unos 7 años. Pero cada
            niño es un mundo.
          </p>
          <p>Con Señor Mano, tus niños podrán:</p>
          <ul>
            <li>Practicar la lectura y escritura</li>
            <li>Aprender vocabulario y ortografía</li>
            <li>Dar estructura a sus conocimientos</li>
            <li>
              Comprender conceptos gramaticales que ya usaban de forma natural{" "}
            </li>
          </ul>
          <p>
            Las instrucciones de los cuadernillos deberían estar en el idioma
            que usan los niños en la escuela, para que se concentren en lo
            importante. Ahora mismo están disponibles en japonés y en inglés.
            Contáctanos si te gustaría que hubiera versiones en otro idioma.
          </p>
          <p>
            Señor Mano no es un método de estudio hecho por profesionales, sino
            una forma de compartir los materiales que hacemos para nuestrops
            propios niños. Esperamos que te sea de ayuda.
          </p>
        </div>
      </section>

      <section>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#1a1a1a",
          }}
        >
          Descargar cuadernillos
        </h2>

        <div
          style={{
            display: "grid",
            gap: "2rem",
          }}
        >
          {units.map((unit) => (
            <div
              key={unit.number}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e5e5",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Unidad {unit.number}: {unit.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "1rem",
                    }}
                  >
                    Verbos: {unit.verbs.join(", ")}
                  </p>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {unit.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    minWidth: "200px",
                  }}
                >
                  <a
                    href={`/pdfs/japanese/unidad-${unit.number}-ja.pdf`}
                    download
                    style={{
                      textAlign: "center" as const,
                      display: "block",
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#6AAD2F",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "0.875rem",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#5A9426";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#6AAD2F";
                    }}
                  >
                    📖 Versión en japonés (PDF)
                  </a>
                  <a
                    href={`/pdfs/english/unidad-${unit.number}-en.pdf`}
                    download
                    style={{
                      textAlign: "center" as const,
                      display: "block",
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#6AAD2F",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "0.875rem",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#5A9426";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#6AAD2F";
                    }}
                  >
                    📖 Versión en inglés (PDF)
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#FDF2E0",
            border: "1px solid #F5BF66",
            borderRadius: "8px",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          <h3
            style={{
              color: "#B8842B",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            📋 Información de impresión
          </h3>
          <p style={{ color: "#B8842B", fontSize: "0.9rem" }}>
            Los PDFs están optimizados para formato DIN A5 (148 × 210 mm). Para
            imprimir en papel A4 estándar, recomendamos seleccionar la opción "2
            páginas por hoja" en tu impresora.
          </p>
        </div>
      </section>
    </Layout>
  );
}
