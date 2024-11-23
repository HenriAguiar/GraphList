import { draw, xBase, yBase, nodeSpacing } from './SvgConfig'; // Importar as variáveis e o contêiner SVG.js
let nodes = []; // Lista de nós gráficos

export function criarNo(valor, posicao) {
    // Calcula a posição do nó com base na posição e espaçamento
    const x = xBase + posicao * nodeSpacing;

    // Desenhar o círculo do nó
    const circle = draw.circle(50).fill('#3498db').move(x, yBase);

    // Adicionar o texto ao círculo
    const text = draw.text(valor.toString()).move(x + 15, yBase + 10).font({ size: 18, fill: '#fff' });

    // Conectar ao nó anterior, se não for o primeiro
    let line = null;
    if (posicao > 0) {
        const xPrev = xBase + (posicao - 1) * nodeSpacing + 50;
        line = draw.line(xPrev, yBase + 25, x, yBase + 25).stroke({ width: 2, color: '#333' });
    }

    // Armazenar os elementos criados
    nodes.splice(posicao, 0, { circle, text, line });
}

export function removerNo(posicao) {
    const node = nodes[posicao];

    // Remover elementos do SVG
    node.circle.remove();
    node.text.remove();
    if (node.line) node.line.remove();

    // Remover o nó da lista
    nodes.splice(posicao, 1);

    // Ajustar posições dos nós restantes
    for (let i = posicao; i < nodes.length; i++) {
        const x = xBase + i * nodeSpacing;
        nodes[i].circle.animate(300).move(x, yBase);
        nodes[i].text.animate(300).move(x + 15, yBase + 10);

        // Ajustar as linhas
        if (i > 0) {
            const xPrev = xBase + (i - 1) * nodeSpacing + 50;
            nodes[i].line.animate(300).plot(xPrev, yBase + 25, x, yBase + 25);
        }
    }
}