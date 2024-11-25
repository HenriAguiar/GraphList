"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";

export default function TutorialModal() {
    const [show, setShow] = useState(false);
    const [step, setStep] = useState(1);

    const stepsContent = [
        {
            message: (
                <div>
                    <h4 className="text-2xl font-bold text-blue-500 mb-2">Bem-vindo ao GraphList!</h4>
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
                    <h4 className="text-2xl font-bold text-blue-500 mb-2">Adicionando Nós à Lista</h4>
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
                    <h4 className="text-2xl font-bold text-blue-500 mb-2">Removendo Nós da Lista</h4>
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
                    <h4 className="text-2xl font-bold text-blue-500 mb-2">Visualizando a Lista</h4>
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
                    <h4 className="text-2xl font-bold text-blue-500 mb-2">Parabéns!</h4>
                    <p className="text-gray-300 mb-4">
                        Você completou o tutorial! Agora pode explorar o aplicativo por conta própria e criar listas
                        incríveis.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <Modal show={show} onClose={() => setShow(false)}>
            <Modal.Header className="bg-gray-900 text-gray-200">Tutorial Inicial</Modal.Header>
            <Modal.Body className="bg-gray-900 text-gray-200">{stepsContent[step - 1].message}</Modal.Body>
            <Modal.Footer className="bg-gray-900 flex justify-between">
                <button
                    className={`px-3 py-1 rounded-lg ${
                        step === 1 ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-gray-300 text-gray-800"
                    }`}
                    disabled={step === 1}
                    onClick={() => setStep(step - 1)}
                >
                    Voltar
                </button>
                <button
                    className={`px-3 py-1 rounded-lg ${
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
    );
}
