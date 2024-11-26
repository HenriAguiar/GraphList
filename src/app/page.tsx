// src/pages/Page.js

"use client";

import React, { useState, useEffect, useRef } from "react";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ListaComandosLexer } from "../parser/ListaComandosLexer";
import { ListaComandosParser } from "../parser/ListaComandosParser";
import MyErrorListener from "../libs/ErrorListener";
import TutorialModal from "../components/Tutorial";
import Ldse from "../libs/Ldse.js";
import SvgRenderer from "../libs/SvgRenderer.js";
import ListaVisitor from "../libs/ListaVisitor";
import { Poppins, Ubuntu_Mono } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
const courier = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Page = () => {
  const [input, setInput] = useState("");
  const [valores, setValores] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const svgContainerRef = useRef(null);
  const svgRendererRef = useRef(null);
  const listaRef = useRef(null);

  useEffect(() => {
    if (svgContainerRef.current && !svgRendererRef.current) {
      SvgRenderer.init("svg-container");
      svgRendererRef.current = SvgRenderer;
      listaRef.current = new Ldse(svgRendererRef.current);
      console.log(
        "SvgRenderer e Ldse instanciados:",
        svgRendererRef.current,
        listaRef.current
      );
    }
  }, []);

  const handleExecute = async () => {
    console.log("handleExecute chamado com input:", input);

    // Reiniciar a lista e o renderizador SVG
    if (listaRef.current) {
      listaRef.current = new Ldse(svgRendererRef.current);
    }
    if (svgRendererRef.current) {
      svgRendererRef.current.limpar();
    }

    if (!listaRef.current) {
      console.error("Lista não inicializada.");
      setMensagem("Erro: Lista não inicializada.");
      return;
    }

    const chars = new ANTLRInputStream(input);
    const lexer = new ListaComandosLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    tokens.fill();

    const parser = new ListaComandosParser(tokens);
    parser.buildParseTree = true;
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());

    try {
      const tree = parser.commands();
      const visitor = new ListaVisitor(listaRef.current);
      await visitor.visit(tree);

      setValores(listaRef.current.getValores());
      setMensagem("Comandos executados com sucesso!");
    } catch (e) {
      console.error(e);
      setMensagem("Ocorreu um erro ao executar os comandos.");
    }
  };

  return (
    <div className={poppins.className}>
      <TutorialModal />

      <div className="bg-white text-gray-200 p-6 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <img src="/icon.png" alt="Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold text-azul-logo">GraphList</h1>
          </div>
        </div>
        <p className="text-gray-800 text-lg">
          Sua ferramenta para manipulação de listas encadeadas com visualização
          dinâmica
        </p>
      </div>

      <div className="flex flex-col gap-6 p-6 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-gray-900 text-gray-200 p-4 rounded-lg">
              <h5 className="text-lg font-bold mb-3 text-white">
                Digitar Comandos
              </h5>
              <textarea
                value={input}
                rows={4}
                className={`${courier.className} w-full bg-gray-800 text-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-500`}
                placeholder="Digite seus comandos aqui..."
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                onClick={handleExecute}
              >
                Confirmar
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gray-900 text-gray-200 p-4 rounded-lg">
              <h5 className="text-lg font-bold mb-3 text-white">
                Situação da Lista
              </h5>
              <ul className="flex gap-2">
                {valores.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg shadow-md relative"
                  >
                    <span className="absolute top-1 left-1 text-xs text-azul-logo">
                      {index}
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-900 text-gray-200 p-4 rounded-lg">
          <h5 className="text-lg font-bold mb-3 text-white">
            Visualização da Lista
          </h5>
          <div
            id="svg-container"
            ref={svgContainerRef}
            className="w-full h-64 bg-gray-800 border border-gray-600 rounded-lg"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
