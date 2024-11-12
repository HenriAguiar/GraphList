import ListaEncadeada from "@/components/ListaEncadeada";
import Image from "next/image";
import { Poppins } from "next/font/google"


export default function Home() {
  return (
    <div style={{ padding: 20, }}>
      <h1>Lista Encadeada Visual</h1>
      <ListaEncadeada ></ListaEncadeada>
    </div>
  );
}
