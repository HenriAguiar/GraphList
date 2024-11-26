// src/libs/MyErrorListener.js

import antlr4 from 'antlr4';

class MyErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const offendingText = offendingSymbol ? offendingSymbol.text : "<desconhecido>";
    const errorMessage = `Erro de sintaxe na linha ${line}, coluna ${column}: ${msg}. Token problemático: "${offendingText}"`;
    console.error(errorMessage);
  }
}

export default MyErrorListener;
