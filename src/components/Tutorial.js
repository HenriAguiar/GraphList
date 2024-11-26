import { useState } from "react";
import { Modal } from "flowbite-react";
import { Poppins } from "next/font/google";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function TutorialModal() {
  const [show, setShow] = useState(true); // Estado que controla a visibilidade
  const [step, setStep] = useState(1);

  const stepsContent = [
    {
      message: (
        <div>
          <h4 className="text-2xl font-bold text-azul-logo mb-2">Bem-vindo ao GraphList!</h4>
          <p className="text-gray-300 mb-4">
            Este é o passo inicial do tutorial. Aqui você aprenderá a manipular listas encadeadas com
            visualização gráfica.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Explore a interface para digitar comandos.</li>
            <li>Observe a visualização dinâmica da lista.</li>
            <li>Experimente criar, editar e remover nós na lista.</li>
          </ul>
        </div>
      ),
    },
    {
      message: (
        <div>
          <h4 className="text-2xl font-bold text-azul-logo mb-2">Adicionando Nós à Lista</h4>
          <p className="text-gray-300 mb-4">
            Para adicionar nós, utilize comandos como <span className="text-green-500">inserir_inicio</span> ou{" "}
            <span className="text-green-500">inserir_fim</span>. Veja um exemplo:
          </p>
          <code className="block bg-gray-800 text-green-400 p-2 rounded-md">
            inserir_inicio("valor");
          </code>
        </div>
      ),
    },
    {
      message: (
        <div>
          <h4 className="text-2xl font-bold text-azul-logo mb-2">Removendo Nós da Lista</h4>
          <p className="text-gray-300 mb-4">
            Para remover nós, utilize comandos como <span className="text-red-500">remover_inicio</span> ou{" "}
            <span className="text-red-500">remover_fim</span>. Veja um exemplo:
          </p>
          <code className="block bg-gray-800 text-green-400 p-2 rounded-md">
            remover_fim();
          </code>
        </div>
      ),
    },
    {
      message: (
        <div>
          <h4 className="text-2xl font-bold text-azul-logo mb-2">Visualizando a Lista</h4>
          <p className="text-gray-300 mb-4">
            Toda modificação na lista é refletida na visualização dinâmica abaixo do editor. Explore como os
            nós são adicionados e removidos em tempo real!
          </p>
        </div>
      ),
    },
    {
      message: (
        <div>
          <h4 className="text-2xl font-bold text-azul-logo mb-2">Parabéns!</h4>
          <p className="text-gray-300 mb-4">
            Você completou o tutorial! Agora pode explorar o aplicativo por conta própria e criar listas
            incríveis.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        className={`bg-transparent ${poppins.className}`}
        style={{ backdropFilter: "blur(10px)" }} // Fundo desfocado
      >
        <Modal.Header className="bg-gray-900 text-gray-200 shadow-xl rounded-t-md py-3">
          Tutorial Inicial
        </Modal.Header>
        <Modal.Body className="bg-gray-900 text-gray-200 py-6 px-8">
          {stepsContent[step - 1].message}
        </Modal.Body>
        <Modal.Footer className="bg-gray-900 flex justify-between py-4 px-6 rounded-b-md">
          <button
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 ${
              step === 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
          >
            Voltar
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium text-sm bg-azul-very transition-colors duration-300 ${
              step === stepsContent.length
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={step === stepsContent.length}
            onClick={() => setStep(step + 1)}
          >
            Avançar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Botão para reabrir o tutorial */}
      {!show && (
       <button
className="absolute top-4 right-10 bg-transparent text-azul-very px-4 py-2 rounded-full hover:text-gray-400 z-10 transition duration-300"
       onClick={() => setShow(true)}
     >
       <QuestionMarkCircleIcon className="w-8 h-8" />
     </button>
     
      )}
    </div>
  );
}
