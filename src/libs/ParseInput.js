import antlr4 from 'antlr4';
import { LinkedListLexer } from './parser/LinkedListLexer';
import { LinkedListParser } from './parser/LinkedListParser';
import LinkedListHandler from './LinkedListHandler';
import LinkedList from './LinkedList'; // Sua implementação da lista

export function parseInput(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new LinkedListLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LinkedListParser(tokens);

  parser.buildParseTrees = true;
  const tree = parser.prog();

  const list = new LinkedList();
  const handler = new LinkedListHandler(list);

  handler.visit(tree);

  return list.toArray(); // Método que retorna o estado atual da lista
}
