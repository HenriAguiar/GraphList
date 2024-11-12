"use client"
import React, { useEffect, useRef, useState } from "react";
import { SVG } from "@svgdotjs/svg.js";

const ListaEncadeada = () => {
  const svgContainer = useRef(null); // Referência ao container SVG
  const [nodes, setNodes] = useState([]); // Armazena os nós
  const canvasRef = useRef(null); // Armazena a referência do canvas SVG
  const arrowsRef = useRef([]); // Armazena as setas desenhadas
  const nodeRadius = 20;
  const nodeSpacing = 120;
  const startX = 50;
  const startY = 100;

  useEffect(() => {
    // Inicializar o canvas SVG na montagem
    if (svgContainer.current) {
      canvasRef.current = SVG().addTo(svgContainer.current).size("100%", 300);
    }
    return () => {
      // Limpar na desmontagem
      if (canvasRef.current) {
        canvasRef.current.clear();
      }
    };
  }, []);

  const addNode = () => {
    const value = prompt("Digite o valor do nó:");
    if (!value) return;

    const x = startX + nodes.length * nodeSpacing;
    const y = startY;

    // Criar o nó
    const nodeGroup = canvasRef.current.group();
    const circle = nodeGroup
      .circle(nodeRadius * 2)
      .fill("#4CAF50")
      .center(x, y);
    const text = nodeGroup
      .text(value)
      .font({ size: 14, anchor: "middle" })
      .center(x, y);

    // Adicionar ao estado
    const newNode = { x, y, group: nodeGroup, value };
    setNodes((prevNodes) => [...prevNodes, newNode]);

    // Desenhar a seta, se necessário
    if (nodes.length > 0) {
      const prevNode = nodes[nodes.length - 1];
      const arrow = drawArrow(prevNode.x, prevNode.y, x, y);
      arrowsRef.current.push(arrow); // Armazenar a referência da seta
    }
  };

  const removeNode = () => {
    if (nodes.length === 0) {
      alert("Não há nós para remover.");
      return;
    }

    const nodeValues = nodes.map((node) => node.value).join(", ");
    const valueToRemove = prompt(
      `Qual nó você deseja remover? Valores disponíveis: ${nodeValues}`
    );

    if (!valueToRemove) return;

    const nodeIndex = nodes.findIndex((node) => node.value === valueToRemove);

    if (nodeIndex === -1) {
      alert("Valor não encontrado!");
      return;
    }

    // Remover a seta anterior
    if (nodeIndex > 0) {
      const arrowToRemove = arrowsRef.current[nodeIndex - 1];
      if (arrowToRemove) {
        arrowToRemove.remove();
        arrowsRef.current[nodeIndex - 1] = null; // Marcar como removida
      }
    }

    // Ajustar conexões
    if (nodeIndex > 0 && nodeIndex < nodes.length - 1) {
      const prevNode = nodes[nodeIndex - 1];
      const nextNode = nodes[nodeIndex + 1];
      const arc = drawArc(prevNode.x, prevNode.y, nextNode.x, nextNode.y);
      arrowsRef.current[nodeIndex - 1] = arc; // Atualizar referência da seta
    }

    // Atualizar o estado do nó removido
    setNodes((prevNodes) =>
      prevNodes.map((node, index) =>
        index === nodeIndex
          ? { ...node, removed: true } // Marcar como removido
          : node
      )
    );
  };

  const drawArrow = (fromX, fromY, toX, toY) => {
    const offsetX = 10; // Espaço entre o nó e a seta
    return canvasRef.current
      .line(fromX + offsetX, fromY, toX - offsetX, toY)
      .stroke({ width: 2, color: "#000" })
      .marker("end", canvasRef.current.marker(10, 10, (add) => {
        add.path("M0,0 L0,10 L10,5 Z").fill("#000");
      }));
  };

  const drawArc = (fromX, fromY, toX, toY) => {
    const midX = (fromX + toX) / 2;
    const midY = fromY - 50; // Levantar o arco
    const path = canvasRef.current.path(
      `M ${fromX + 10} ${fromY} Q ${midX} ${midY} ${toX - 10} ${toY}`
    );
    path
      .fill("none")
      .stroke({ width: 2, color: "#000" })
      .marker("end", canvasRef.current.marker(10, 10, (add) => {
        add.path("M0,0 L0,10 L10,5 Z").fill("#000");
      }));
    return path;
  };

  return (
    <div>
      <button onClick={addNode} style={{ marginRight: 10 }}>
        Adicionar Nó
      </button>
      <button onClick={removeNode}>Remover Nó</button>
      <div
        ref={svgContainer}
        style={{
          border: "1px solid #ccc",
          marginTop: 20,
          height: 300,
        }}
      ></div>
    </div>
  );
};

export default ListaEncadeada;
