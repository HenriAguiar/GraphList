import antlr4 from 'antlr4';

class MyErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const offendingText = offendingSymbol ? offendingSymbol.text : "<desconhecido>";

    const detailedError = `
      🚨 Erro de Sintaxe Detalhado:
      ---------------------------------
      Linha: ${line}, Coluna: ${column}
      Token problemático: "${offendingText}"
      Mensagem: ${msg}

      Dica: Verifique a sintaxe do comando próximo a "${offendingText}".
      Certifique-se de que está usando os delimitadores corretos (parênteses, vírgulas, etc.)
      e que não há caracteres extras ou inesperados.

      Exemplo de entrada correta: inserir_inicio("valor");
    `;

    console.error(detailedError);

    // Você pode alterar este comportamento para exibir em uma interface, como um modal ou alerta na página
    alert(detailedError);

    // Levanta o erro para parar o processamento
    throw new Error(detailedError);
  }
}

export default MyErrorListener;
