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
    errorModal.style.backgroundColor = "#2d3748"; // Cinza escuro (bg-gray-800)
    errorModal.style.borderRadius = "12px";
    errorModal.style.padding = "30px";
    errorModal.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    errorModal.style.zIndex = "1000";
    errorModal.style.color = "#f7fafc"; // Branco (text-white)
    errorModal.style.fontFamily = "'Poppins', sans-serif"; 
    errorModal.style.fontSize = "1rem";
    errorModal.style.width = "90%";
    errorModal.style.maxWidth = "600px";
    errorModal.style.transition = "opacity 0.3s ease-in-out"; // Transição suave

    // Header
    const header = document.createElement("h4");
    header.textContent = "🚨 Erro de Sintaxe Detalhado";
    header.style.color = "#ff4785"; // Cor de destaque
    header.style.fontSize = "1.7rem";
    header.style.fontWeight = "600";
    header.style.marginBottom = "15px";

    // Linha e coluna
    const position = document.createElement("p");
    position.innerHTML = `<strong>Linha:</strong> ${line}, <strong>Coluna:</strong> ${column}`;
    position.style.borderLeft = "5px solid #f87171";
    position.style.backgroundColor = "#3e2723"; // Fundo suave
    position.style.color = "#f87171"; // Vermelho suave
    position.style.padding = "8px 12px";
    position.style.borderRadius = "4px";
    position.style.marginBottom = "15px";
    position.className = courier.className; // Aplica a fonte Courier

    // Token problemático
    const token = document.createElement("p");
    token.innerHTML = `<strong>Token problemático:</strong> "<span style="color: #f87171">${offendingText}</span>"`;
    token.style.borderLeft = "5px solid #f87171";
    token.style.backgroundColor = "#3e2723"; // Fundo suave
    token.style.color = "#f87171"; // Vermelho suave
    token.style.padding = "8px 12px";
    token.style.borderRadius = "4px";
    token.style.marginBottom = "15px";
    token.className = courier.className; // Aplica a fonte Courier

    // Mensagem
    const message = document.createElement("p");
    message.innerHTML = `<strong>Mensagem:</strong> <span style="color: #fbbf24">${msg}</span>`;
    message.style.marginBottom = "15px";
    message.style.borderLeft = "5px solid #f87171";
    message.style.backgroundColor = "#3e2723";
    message.style.color = "#f87171";
    message.style.padding = "8px 12px";
    message.style.borderRadius = "4px";
    message.className = courier.className; // Aplica a fonte Courier

    // Dica
    const hint = document.createElement("p");
    hint.innerHTML = `
      <strong>Dica:</strong> Verifique a sintaxe do comando próximo a 
      "<span style="color: #34d399">${offendingText}</span>". Certifique-se de que está usando os delimitadores corretos
      e que não há caracteres extras ou inesperados.
    `;
    hint.style.marginBottom = "15px";
    hint.style.fontStyle = "italic";
    hint.style.color = "#68d391"; // Verde claro (text-green-400)

    // Exemplo de entrada correta
    const example = document.createElement("code");
    example.textContent = `inserir_inicio("valor");`;
    example.style.display = "block";
    example.style.backgroundColor = "#1c1b29"; // Cinza bem escuro
    example.style.color = "#07c6ff"; // Verde
    example.style.padding = "12px 15px";
    example.style.borderRadius = "6px";
    example.style.marginTop = "10px";
    example.style.fontFamily = "'Ubuntu Mono', monospace"; // Fonte de código

    // Botão para fechar
    const closeButton = document.createElement("button");
    closeButton.textContent = "Fechar";
    closeButton.style.backgroundColor = "#4c51bf"; // Azul (bg-blue-600)
    closeButton.style.color = "white";
    closeButton.style.padding = "12px 20px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "8px";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginTop = "15px";
    closeButton.style.width = "100%";
    closeButton.style.transition = "background-color 0.3s ease"; // Transição suave
    closeButton.addEventListener("click", () => {
      document.body.removeChild(errorModal);
    });
    closeButton.addEventListener("mouseover", () => {
      closeButton.style.backgroundColor = "#2b6cb0"; // Azul mais claro ao passar o mouse
    });
    closeButton.addEventListener("mouseout", () => {
      closeButton.style.backgroundColor = "#4c51bf"; // Voltar ao azul original
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

    
  }
}

export default MyErrorListener;
