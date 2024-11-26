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
import Header from "../components/Header";
import CommandInput from "../components/CommandInput";
import ListStatus from "../components/ListStatus";
import Visualization from "../components/Visualization";
import ConsoleLog from "../components/ConsoleLog";

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
  const [comandos, setComandos] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [logs, setLogs] = useState([]);

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

  useEffect(() => {
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, `[LOG]: ${args.join(" ")}`]);
      originalConsoleLog(...args);
    };

    console.error = (...args) => {
      setLogs((prevLogs) => [...prevLogs, `[ERROR]: ${args.join(" ")}`]);
      originalConsoleError(...args);
    };

    return () => {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
    };
  }, []);

  const handleExecute = async () => {
    console.log("handleExecute chamado com input:", input);

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

    setComandos((prevComandos) => [...prevComandos, input]);

    const chars = new ANTLRInputStream(input);
    const lexer = new ListaComandosLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    tokens.fill();

    const parser = new ListaComandosParser(tokens);
    parser.buildParseTree = true;

    const errorListener = new MyErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    try {
      const tree = parser.commands();

      if (errorListener.hasError) {
        setMensagem("Erro de sintaxe detectado. Comandos não executados.");
        return;
      }

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
      <Header />

      <div className="flex flex-col gap-6 p-6 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <CommandInput
              input={input}
              setInput={setInput}
              handleExecute={handleExecute}
              comandos={comandos}
            />
          </div>
          <div className="flex-1">
            <ListStatus valores={valores} />
          </div>
        </div>

        <Visualization svgContainerRef={svgContainerRef} />

        <ConsoleLog logs={logs} />
      </div>
    </div>
  );
};

export default Page;
