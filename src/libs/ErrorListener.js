import antlr4 from 'antlr4';
import { Ubuntu_Mono } from "next/font/google";

const courier = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

class MyErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const offendingText = offendingSymbol ? offendingSymbol.text : "<desconhecido>";

    // Criação do contêiner principal
    const errorModal = document.createElement("div");
    errorModal.style.position = "fixed";
    errorModal.style.top = "50%";
    errorModal.style.left = "50%";
    errorModal.style.transform = "translate(-50%, -50%)";
    errorModal.style.backgroundColor = "#1f2937"; // Cinza escuro (bg-gray-900)
    errorModal.style.borderRadius = "8px";
    errorModal.style.padding = "40px";
    errorModal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    errorModal.style.zIndex = "1000";
    errorModal.style.color = "#d1d5db"; // Cinza claro (text-gray-300)
    errorModal.style.fontFamily = "'Poppins', sans-serif"; // Definindo a fonte para Poppins
    errorModal.style.width = "90%";
    errorModal.style.maxWidth = "600px";

    // Header
    const header = document.createElement("h4");
    header.textContent = "🚨 Erro de Sintaxe Detalhado";
    header.style.color = "#3b82f6"; // Azul (text-blue-500)
    header.style.fontSize = "1.5rem";
    header.style.marginBottom = "10px";

    // Linha e coluna
    const position = document.createElement("p");
    position.innerHTML = `<strong>Linha:</strong> ${line}, <strong>Coluna:</strong> ${column}`;
    position.style.borderLeft = "3px solid #ff5555";
    position.style.backgroundColor = "#2a1e1e"; // Fundo vermelho claro
    position.style.color = "#ff5555"; // Letras vermelhas (text-red-500)
    position.style.padding = "5px"; // Adiciona um pouco de padding

    // Token problemático
    const token = document.createElement("p");
    token.innerHTML = `<strong>Token problemático:</strong> "<span style="color: #ff5555">${offendingText}</span>"`; // Vermelho (text-red-500)
    token.style.borderLeft = "3px solid #ff5555";
    token.style.backgroundColor = "#2a1e1e"; // Fundo vermelho claro
    token.style.color = "#ff5555"; // Letras vermelhas (text-red-500)
    token.style.padding = "5px"; // Adiciona um pouco de padding

    // Mensagem
    const message = document.createElement("p");
    message.innerHTML = `<strong>Mensagem:</strong> <span style="color: #fbbf24">${msg}</span>`; // Amarelo (text-yellow-500)
    message.style.marginBottom = "10px";
    message.style.borderLeft = "3px solid #ff5555";
    message.style.backgroundColor = "#2a1e1e"; // Fundo vermelho claro
    message.style.color = "#ff5555"; // Letras vermelhas (text-red-500)
    message.style.padding = "5px"; // Adiciona um pouco de padding
    message.className = courier.className; // Aplica a fonte Courier

    // Dica
    const hint = document.createElement("p");
    hint.innerHTML = `
      <strong>Dica:</strong> Verifique a sintaxe do comando próximo a 
      "<span style="color: #34d399">${offendingText}</span>". Certifique-se de que está usando os delimitadores corretos
      e que não há caracteres extras ou inesperados.
    `;
    hint.style.marginBottom = "10px";

    // Exemplo de entrada correta
    const example = document.createElement("code");
    example.textContent = `inserir_inicio("valor");`;
    example.style.display = "block";
    example.style.backgroundColor = "#111827"; // Cinza muito escuro (bg-gray-800)
    example.style.color = "#10b981"; // Verde (text-green-500)
    example.style.padding = "10px";
    example.style.borderRadius = "5px";
    example.style.marginTop = "10px";
    example.className = courier.className; // Aplica a fonte Courier


    // Botão para fechar
    const closeButton = document.createElement("button");
    closeButton.textContent = "Fechar";
    closeButton.style.backgroundColor = "#2563eb"; // Azul (bg-blue-500)
    closeButton.style.color = "white";
    closeButton.style.padding = "10px 20px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "8px";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginTop = "15px";
    closeButton.style.width = "100%";
    closeButton.addEventListener("click", () => {
      document.body.removeChild(errorModal);
    });

    // Montar o modal
    errorModal.appendChild(header);
    errorModal.appendChild(position);
    errorModal.appendChild(token);
    errorModal.appendChild(message);
    errorModal.appendChild(hint);
    errorModal.appendChild(example);
    errorModal.appendChild(closeButton);

    // Adicionar ao DOM
    document.body.appendChild(errorModal);

    // Levantar erro no console
    console.error(`Erro de Sintaxe: Linha ${line}, Coluna ${column}, Token: ${offendingText}, Mensagem: ${msg}`);

    // Opcional: lançar erro para interromper o processamento
    throw new Error(`Erro de Sintaxe: Linha ${line}, Coluna ${column}, Token: ${offendingText}`);
  }
}

export default MyErrorListener;
