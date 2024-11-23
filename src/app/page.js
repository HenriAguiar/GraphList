'use client';

import { useEffect, useState } from 'react';
import { inserirInicio, inserirFim, removerInicio, removerFim } from '@/libs/ListFunctions';
import { executarPasso, avancarPasso, retrocederPasso } from '@/libs/TimelineFunctions';
import { Frame } from '@/libs/Frame';
import { initializeSvg } from '@/libs/SvgConfig';

// Página de Teste
export default function Page() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
      initializeSvg(); // Inicializa o SVG ao montar o componente
  }, []);

  // Inserir nó no início
  const handleAddStart = () => {
      const valor = prompt('Digite o valor do nó a ser inserido no início:');
      if (!valor) return;

      const frame = new Frame(
          () => inserirInicio(nodes, valor),
          () => removerInicio(nodes),
          `Inserir ${valor} no início`
      );

      executarPasso(frame);
      setNodes([...nodes]); // Atualiza o estado
  };

  // Inserir nó no fim
  const handleAddEnd = () => {
      const valor = prompt('Digite o valor do nó a ser inserido no fim:');
      if (!valor) return;

      const frame = new Frame(
          () => inserirFim(nodes, valor),
          () => removerFim(nodes),
          `Inserir ${valor} no fim`
      );

      executarPasso(frame);
      setNodes([...nodes]); // Atualiza o estado
  };

  // Remover nó no início
  const handleRemoveStart = () => {
      if (nodes.length === 0) {
          alert('A lista está vazia!');
          return;
      }

      const frame = new Frame(
          () => removerInicio(nodes),
          () => inserirInicio(nodes, nodes[0]?.text?.node?.textContent || ''),
          `Remover nó do início`
      );

      executarPasso(frame);
      setNodes([...nodes]); // Atualiza o estado
  };

  // Remover nó no fim
  const handleRemoveEnd = () => {
      if (nodes.length === 0) {
          alert('A lista está vazia!');
          return;
      }

      const lastValue = nodes[nodes.length - 1]?.text?.node?.textContent || '';
      const frame = new Frame(
          () => removerFim(nodes),
          () => inserirFim(nodes, lastValue),
          `Remover nó do fim`
      );

      executarPasso(frame);
      setNodes([...nodes]); // Atualiza o estado
  };

  // Avançar na timeline
  const handleStepForward = () => {
      avancarPasso();
  };

  // Retroceder na timeline
  const handleStepBackward = () => {
      retrocederPasso();
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-2xl font-bold mb-4">Teste da Lista Gráfica</h1>

          <div id="canvas" className="border border-gray-300 w-full h-64 mb-4"></div>

          <div className="flex space-x-4">
              <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleAddStart}
              >
                  Inserir Início
              </button>
              <button
                  className="px-4 py-2 bg-green-500 text-white rounded"
                  onClick={handleAddEnd}
              >
                  Inserir Fim
              </button>
              <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={handleRemoveStart}
              >
                  Remover Início
              </button>
              <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={handleRemoveEnd}
              >
                  Remover Fim
              </button>
              <button
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={handleStepBackward}
              >
                  Voltar Passo
              </button>
              <button
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={handleStepForward}
              >
                  Avançar Passo
              </button>
          </div>
      </div>
  );
}