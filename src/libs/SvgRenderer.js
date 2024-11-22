import { Svg } from '@svgdotjs/svg.js';

class SvgRenderer {
    constructor(containerId) {
        this.canvas = new Svg().addTo(containerId).size('100%', '400px');
        this.nodes = [];
    }

    criarNo(id, valor, index) {
        const posX = index * 100 + 50;
        const rect = this.canvas.rect(50, 50).radius(10).fill('#4CAF50').move(posX, 100);
        const text = this.canvas.text(valor.toString()).move(posX + 15, 115).fill('#FFF');
        this.nodes.push({ id, rect, text });
    }

    removerNo(id) {
        const node = this.nodes.find((n) => n.id === id);
        if (node) {
            node.rect.animate(300).opacity(0).after(() => node.rect.remove());
            node.text.animate(300).opacity(0).after(() => node.text.remove());
            this.nodes = this.nodes.filter((n) => n.id !== id);
        }
    }

    limpar() {
        this.canvas.clear();
        this.nodes = [];
    }
}

export default SvgRenderer;
