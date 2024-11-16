import ListaEncadeada from "@/components/ListaEncadeada";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"], // Ajuste os pesos conforme necessário
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={poppins.className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f4f4f9",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px", // Espaçamento entre os elementos
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image src="/icon.png" alt="Logo" width={80} height={80} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#333",
              margin: 0,
            }}
          >
            GraphList
          </h1>
        </div>
        <p style={{ fontSize: "1rem", color: "#666" }}>
          Explore listas encadeadas de forma interativa e visual.
        </p>
      </header>
      <main
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <ListaEncadeada />
      </main>
    </div>
  );
}
