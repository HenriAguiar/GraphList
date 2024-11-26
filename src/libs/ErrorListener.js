import antlr4 from 'antlr4';

class MyErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.hasError = false; // Sinalizador para indicar se ocorreu um erro
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.hasError = true; // Define que ocorreu um erro
    const offendingText = offendingSymbol ? offendingSymbol.text : "<desconhecido>";
    const errorMessage = `Erro de sintaxe na linha ${line}, coluna ${column}: ${msg}. Token problemático: "${offendingText}"`;
    console.error(errorMessage);
  }
}

export default MyErrorListener;
