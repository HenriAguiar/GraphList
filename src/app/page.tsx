// src/app/page.tsx

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ListaComandosLexer } from '../parser/ListaComandosLexer';
import { ListaComandosParser } from '../parser/ListaComandosParser';
import MyErrorListener from '../libs/ErrorListener';
import ListaListener from '../libs/ListaListener';
import Ldse from '../libs/Ldse.js'; // Importação com extensão .js
import SvgRenderer from '../libs/SvgRenderer.js'; // Importação com extensão .js
import ListaVisitor from '../libs/ListaVisitor';
const Page: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [valores, setValores] = useState<any[]>([]); // Estado da lista
    const [mensagem, setMensagem] = useState<string>(''); // Estado para mensagens de feedback
    const svgContainerRef = useRef<HTMLDivElement>(null);
    const svgRendererRef = useRef<typeof SvgRenderer | null>(null); // Uso de typeof SvgRenderer
    const listaRef = useRef<Ldse | null>(null);

    useEffect(() => {
        if (svgContainerRef.current && !svgRendererRef.current) {
            SvgRenderer.init('svg-container'); // Inicializa o SvgRenderer com o ID do contêiner
            svgRendererRef.current = SvgRenderer;
            listaRef.current = new Ldse(svgRendererRef.current);
            console.log('SvgRenderer e Ldse instanciados:', svgRendererRef.current, listaRef.current);
        }
    }, []);

    const handleExecute = () => {
        console.log("handleExecute chamado com input:", input);
        if (!listaRef.current) {
            console.error('Lista não inicializada.');
            setMensagem('Erro: Lista não inicializada.');
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
            console.log(`Token: ${lexer.vocabulary.getSymbolicName(token.type)}, Texto: '${token.text}'`);
        });
    
        // Cria uma instância do listener personalizado
    
        console.log("Iniciando o parsing");
    
        try {
            const tree = parser.commands();
            console.log('Iniciando parsing com Visitor');
            const visitor = new ListaVisitor(listaRef.current!);
            visitor.visit(tree); // Passa a árvore raiz gerada pelo parser para o Visitor
            console.log('Parsing concluído com Visitor');
          
            // Atualiza os valores
            setValores(listaRef.current!.getValores());
            setMensagem('Comandos executados com sucesso!');
          } catch (e) {
            console.error(e);
            setMensagem('Ocorreu um erro ao executar os comandos.');
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
            {mensagem && <p>{mensagem}</p>}
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
                style={{ border: '1px solid #ccc', marginTop: '20px', width: '800px', height: '200px' }}
            ></div>
        </div>
    );
};

export default Page;
