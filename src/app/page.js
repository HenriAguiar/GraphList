"use client"
import { useState } from 'react';
import antlr4 from 'antlr4';
import { ListaComandosLexer } from '@/grammar/ListaComandosLexer';
import { ListaComandosParser } from '@/grammar/ListaComandosParser';
import MyErrorListener from '@/libs/ErrorListener';
// Importe o Lexer e o Parser gerados
export default function Page() {
  const [input, setInput] = useState('');
  const [lista, setLista] = useState([]); // Estado da lista
  const handleExecute = () => {
    const chars = new antlr4.InputStream(input);
    const lexer = new ListaComandosLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ListaComandosParser(tokens);

    parser.buildParseTrees = true;

    // Adicione um listener de erros personalizado
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());

    try {
      const tree = parser.commands();
      const visitor = new ListaVisitor(setLista, lista);
      visitor.visit(tree);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
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
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
