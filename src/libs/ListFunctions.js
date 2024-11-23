import { criarNo, removerNo } from './NodeFunctions';

export function inserirInicio(nodes, valor) {
    // Criar o nó no início
    const novoNo = criarNo(valor, 0);

    // Adicionar o nó na posição inicial do array
    nodes.unshift(novoNo);

    // Reorganizar os nós existentes
    for (let i = 1; i < nodes.length; i++) {
        const x = xBase + i * nodeSpacing;
        nodes[i].circle.animate(300).move(x, yBase);
        nodes[i].text.animate(300).move(x + 15, yBase + 10);

        // Ajustar linhas
        if (i === 1) {
            const xPrev = xBase + 50;
            nodes[i].line.animate(300).plot(xPrev, yBase + 25, x, yBase + 25);
        }
    }
}
export function inserirFim(nodes, valor) {
    // Calcula a posição do novo nó
    const posicao = nodes.length;

    // Criar e adicionar o novo nó ao final
    const novoNo = criarNo(valor, posicao);
    nodes.push(novoNo);
}
export function removerInicio(nodes) {
    if (nodes.length > 0) {
        removerNo(nodes, 0);
    }
}
export function removerFim(nodes) {
    if (nodes.length > 0) {
        const posicao = nodes.length - 1;
        removerNo(nodes, posicao);
    }
}