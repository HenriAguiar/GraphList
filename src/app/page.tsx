// src/app/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ListaComandosLexer } from "../parser/ListaComandosLexer";
import { ListaComandosParser } from "../parser/ListaComandosParser";
import MyErrorListener from "../libs/ErrorListener";
import TutorialModal from "../components/Tutorial";
import Ldse from "../libs/Ldse.js"; // Importação com extensão .js
import SvgRenderer from "../libs/SvgRenderer.js"; // Importação com extensão .js
import ListaVisitor from "../libs/ListaVisitor";
const Page: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [valores, setValores] = useState<any[]>([]); // Estado da lista
  const [mensagem, setMensagem] = useState<string>(""); // Estado para mensagens de feedback
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const svgRendererRef = useRef<typeof SvgRenderer | null>(null); // Uso de typeof SvgRenderer
  const listaRef = useRef<Ldse | null>(null);

  useEffect(() => {
    if (svgContainerRef.current && !svgRendererRef.current) {
      SvgRenderer.init("svg-container"); // Inicializa o SvgRenderer com o ID do contêiner
      svgRendererRef.current = SvgRenderer;
      listaRef.current = new Ldse(svgRendererRef.current);
      console.log(
        "SvgRenderer e Ldse instanciados:",
        svgRendererRef.current,
        listaRef.current
      );
    }
  }, []);

  const handleExecute = () => {
    console.log("handleExecute chamado com input:", input);
    if (!listaRef.current) {
      console.error("Lista não inicializada.");
      setMensagem("Erro: Lista não inicializada.");
      return;
    }

    const chars = new ANTLRInputStream(input);
    const lexer = new ListaComandosLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    tokens.fill();

    // Primeira execução
    const parser = new ListaComandosParser(tokens);
    parser.buildParseTree = true;

    // Remove listeners de erro padrão e adiciona o listener personalizado
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());

    // Log dos tokens para depuração
    tokens.getTokens().forEach((token) => {
      console.log(
        `Token: ${lexer.vocabulary.getSymbolicName(token.type)}, Texto: '${
          token.text
        }'`
      );
    });

    // Cria uma instância do listener personalizado

    console.log("Iniciando o parsing");

    try {
      const tree = parser.commands();
      console.log("Iniciando parsing com Visitor");
      const visitor = new ListaVisitor(listaRef.current!);
      visitor.visit(tree); // Passa a árvore raiz gerada pelo parser para o Visitor
      console.log("Parsing concluído com Visitor");

      // Atualiza os valores
      setValores(listaRef.current!.getValores());
      setMensagem("Comandos executados com sucesso!");
    } catch (e) {
      console.error(e);
      setMensagem("Ocorreu um erro ao executar os comandos.");
    }
  };

  return (
    <>
    <TutorialModal/>
      <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          {/* Logo */}
          <img src="/icon.png" alt="Logo" className="w-12 h-12 rounded-full" />

          {/* Título */}
          <h1 className="text-2xl font-bold text-blue-500">GraphList</h1>
        </div>
        {/* Subtítulo */}
        <p className="text-gray-400 text-lg">
          Sua ferramenta para manipulação de listas encadeadas com visualização
          dinâmica
        </p>
      </div>
      <div className="flex flex-col gap-6 p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Digitar Comandos */}
          <div className="flex-1">
            <div className="bg-gray-900 text-gray-200 p-4 rounded-lg">
              <h5 className="text-lg font-bold mb-3 text-blue-500">
                Digitar Comandos
              </h5>
              <textarea
                value={input}
                rows={4}
                className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
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

          {/* Situação da Lista */}
          <div className="flex-1">
            <div className="bg-gray-900 text-gray-200 p-4 rounded-lg">
              <h5 className="text-lg font-bold mb-3 text-blue-500">
                Situação da Lista
              </h5>
              <ul className="flex gap-2">
                {valores.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg shadow-md relative"
                  >
                    <span className="absolute top-1 left-1 text-xs text-blue-400">
                      {index}
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SVG Container */}
        <div className="w-full bg-gray-900 text-gray-200 p-4 rounded-lg">
          <h5 className="text-lg font-bold mb-3 text-blue-500">
            Visualização da Lista
          </h5>
          <div
            id="svg-container"
            ref={svgContainerRef}
            className="w-full h-64 bg-gray-800 border border-gray-600 rounded-lg"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Page;
