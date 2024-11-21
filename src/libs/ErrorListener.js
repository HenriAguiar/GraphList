import antlr4 from 'antlr4';

class MyErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      alert(`Erro de sintaxe na linha ${line}, coluna ${column}: ${msg}`);
      throw new Error(`Erro de sintaxe na linha ${line}, coluna ${column}: ${msg}`);
    }
  }
export default MyErrorListener