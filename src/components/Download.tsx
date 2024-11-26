"use client";

import React from "react";
import { FiDownload } from "react-icons/fi"; // Ícone de download

interface DownloadProps {
  comandos: string[];
  valores: any[];
  svgContainerRef: React.RefObject<HTMLDivElement> | null;
  type: "comandos" | "svg";
}

const Download: React.FC<DownloadProps> = ({ comandos, valores, svgContainerRef, type }) => {
  const handleExport = async () => {
    if (type === "comandos") {
      // Fazer uma cópia dos comandos antes de processar
      const comandosToExport = [...comandos];
  
      // Salvar comandos como arquivo .txt
      const blob = new Blob([comandosToExport.join("\n")], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "comandos.txt";
      link.click();
  
      // Revogar URL para evitar vazamento de memória
      URL.revokeObjectURL(url);
  
      // Resetar a lista de comandos
      comandos.length = 0;
    } else if (type === "svg" && svgContainerRef?.current) {
      // Salvar SVG com fundo escuro
      const svgElement = svgContainerRef.current.querySelector("svg");
      if (svgElement) {
        const svgData = new XMLSerializer().serializeToString(svgElement);
  
        // Criar um parser para modificar o SVG
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgData, "image/svg+xml");
        const svgRoot = svgDoc.documentElement;
  
        // Adicionar fundo escuro no SVG
        const rect = svgDoc.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("width", svgRoot.getAttribute("width") || "100%");
        rect.setAttribute("height", svgRoot.getAttribute("height") || "100%");
        rect.setAttribute("fill", "#1e293b"); // Cor do fundo escuro
        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("rx", "10"); // Cantos arredondados para o card
        rect.setAttribute("ry", "10");
        svgRoot.insertBefore(rect, svgRoot.firstChild);
  
        // Serializar novamente o SVG
        const updatedSvgData = new XMLSerializer().serializeToString(svgRoot);
  
        // Salvar o SVG atualizado
        const blob = new Blob([updatedSvgData], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "estrutura.svg";
        link.click();
  
        // Revogar URL para evitar vazamento de memória
        URL.revokeObjectURL(url);
      }
    }
  };
  
  

  return (
    <div
      onClick={handleExport}
      className="cursor-pointer text-azul-logo hover:text-blue-600 transition-colors transform hover:scale-110 flex items-center justify-center"
      title={type === "comandos" ? "Baixar Comandos como TXT" : "Baixar Estrutura como SVG"}
      aria-label={type === "comandos" ? "Baixar Comandos" : "Baixar SVG"}
    >
      <FiDownload size={24} className="hover:shadow-lg" />
    </div>
  );
};

export default Download;
