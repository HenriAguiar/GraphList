// src/app/page.tsx

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ListaComandosLexer } from '@/parser/ListaComandosLexer';
import { ListaComandosParser } from '@/parser/ListaComandosParser';
import MyErrorListener from '@/libs/ErrorListener';
import ListaListener from '@/libs/ListaListener';
import Ldse from '@/libs/Ldse.js'; // Importação com extensão .js
import SvgRenderer from '@/libs/SvgRenderer.js'; // Importação com extensão .js

const Page: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [valores, setValores] = useState<any[]>([]); // Estado da lista
    const svgContainerRef = useRef<HTMLDivElement>(null);
    const svgRendererRef = useRef<SvgRenderer | null>(null);
    const listaRef = useRef<Ldse | null>(null);

    useEffect(() => {
        if (svgContainerRef.current && !svgRendererRef.current) {
            svgRendererRef.current = new SvgRenderer(svgContainerRef.current);
            listaRef.current = new Ldse(svgRendererRef.current);
            console.log('SvgRenderer e Ldse instanciados:', svgRendererRef.current, listaRef.current);
        }
    }, []);

    const handleExecute = () => {
        if (!listaRef.current) {
            console.error('Lista não inicializada.');
            return;
        }

        const chars = new ANTLRInputStream(input);
        const lexer = new ListaComandosLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new ListaComandosParser(tokens);

        parser.buildParseTrees = true;

        // Remove listeners de erro padrão e adiciona o listener personalizado
        parser.removeErrorListeners();
        parser.addErrorListener(new MyErrorListener());

        // Cria uma instância do listener personalizado
        const listener = new ListaListener(listaRef.current);

        // Adiciona o listener ao parser antes de iniciar a análise
        parser.addParseListener(listener);

        try {
            // Inicia a análise que acionará os métodos do listener
            parser.commands();

            // Verifica se `listaRef.current` está correto
            console.log('Instância de Ldse após parsing:', listaRef.current);

            // Atualiza o estado com os valores atuais da lista
            setValores(listaRef.current.getValores());
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h1>Manipulador de Lista Encadeada</h1>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite seus comandos aqui"
                rows={10}
                cols={50}
            />
            <br />
            <button onClick={handleExecute}>Executar</button>
            <h2>Estado da Lista:</h2>
            <ul>
                {valores.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Visualização da Lista:</h2>
            <div
                id="svg-container"
                ref={svgContainerRef}
                style={{ border: '1px solid #ccc', marginTop: '20px' }}
            ></div>
        </div>
    );
};

export default Page;
