// src/libs/SvgRenderer.js

import { SVG } from '@svgdotjs/svg.js';

const SvgRenderer = {
  container: null,
  nodes: [],
  arrows: [],

  init(containerId) {
    console.log(`SvgRenderer inicializado no contêiner: ${containerId}`);
    this.container = SVG().addTo(`#${containerId}`).size('100%', '100%');
    this.nodes = [];
    this.arrows = [];
  },

  criarNo({ id, valor, x, y }) {
    console.log(`Criando nó: id=${id}, valor=${valor}, x=${x}, y=${y}`);
    const radius = 25;
    const startX = x - 100;

    const rect = this.container.rect(2 * radius, radius * 2)
      .attr({ x: startX, y, rx: radius, ry: radius, fill: '#07c6ff' });

    const text = this.container.text(valor.toString())
      .attr({
        x: startX + radius,
        y: y + radius,
        fontSize: 14,
        fontFamily: 'Arial',
        fill: 'white',
        textAnchor: 'middle',
        alignmentBaseline: 'middle'
      });

    const rectAnim = rect.animate(500).move(x, y);
    text.animate(500).move(x + radius, y + radius);

    const animationPromise = new Promise(resolve => {
      rectAnim.after(() => {
        resolve();
      });
    });

    const node = { id, rect, text, x, y, animationPromise };
    return node;
  },

  atualizarPosicoes(listaComIds) {
    return new Promise(resolve => {
      console.log("Atualizando posições com a lista:", listaComIds);

      const existingNodesMap = {};
      this.nodes.forEach(node => {
        existingNodesMap[node.id] = node;
      });

      const updatedNodes = [];
      const animations = [];

      listaComIds.forEach((item) => {
        let node = existingNodesMap[item.id];

        if (!node) {
          node = this.criarNo(item);
          animations.push(node.animationPromise);
        } else {
          const rectAnim = node.rect.animate(500).move(item.x, item.y);
          const textAnim = node.text.animate(500).move(item.x + 25, item.y + 25);

          animations.push(new Promise(res => rectAnim.after(res)));
          animations.push(new Promise(res => textAnim.after(res)));

          node.x = item.x;
          node.y = item.y;
        }

        updatedNodes.push(node);
      });

      this.nodes = updatedNodes;

      Promise.all(animations).then(() => {
        this._rebuildArrows();
        resolve();
      });
    });
  },

  removerNo(id) {
    return new Promise(resolve => {
      console.log(`Removendo nó com id=${id}`);
      const nodeIndex = this.nodes.findIndex(node => node.id === id);

      if (nodeIndex !== -1) {
        const node = this.nodes[nodeIndex];

        const rectAnim = node.rect.animate(500).opacity(0).after(() => node.rect.remove());
        const textAnim = node.text.animate(500).opacity(0).after(() => node.text.remove());

        const animations = [
          new Promise(res => rectAnim.after(res)),
          new Promise(res => textAnim.after(res))
        ];

        this.nodes.splice(nodeIndex, 1);

        this.arrows = this.arrows.filter(arrowObj => {
          if (arrowObj.fromNode.id === id || arrowObj.toNode.id === id) {
            const arrowAnim = arrowObj.arrow.animate(500).opacity(0).after(() => arrowObj.arrow.remove());
            const arrowHeadAnim = arrowObj.arrowHead.animate(500).opacity(0).after(() => arrowObj.arrowHead.remove());

            animations.push(new Promise(res => arrowAnim.after(res)));
            animations.push(new Promise(res => arrowHeadAnim.after(res)));
            return false;
          }
          return true;
        });

        Promise.all(animations).then(() => {
          this._rebuildArrows();
          resolve();
        });
      } else {
        console.warn(`Nó com id=${id} não encontrado.`);
        resolve();
      }
    });
  },

  getNodeById(id) {
    return this.nodes.find(node => node.id === id);
  },

  _createArrow(fromNode, toNode) {
    console.log(`Criando seta entre id=${fromNode.id} e id=${toNode.id}`);

    const fromX = fromNode.x + 50;
    const fromY = fromNode.y + 25;
    const toX = toNode.x;
    const toY = toNode.y + 25;

    const arrow = this.container.line(fromX, fromY, fromX, fromY)
      .stroke({ width: 2, color: '#FFF' });

    arrow.animate(500).plot(fromX, fromY, toX, toY);

    const arrowHead = this.container.polygon('0,0 0,0 0,0').fill('#FFF');
    const headPoints = `${toX - 5},${toY - 5} ${toX},${toY} ${toX - 5},${toY + 5}`;
    arrowHead.animate(500).plot(headPoints);

    this.arrows.push({ fromNode, toNode, arrow, arrowHead });
  },

  _rebuildArrows() {
    console.log("Recriando todas as setas.");

    this.arrows.forEach((arrowObj) => {
      arrowObj.arrow.remove();
      arrowObj.arrowHead.remove();
    });
    this.arrows = [];

    for (let i = 0; i < this.nodes.length - 1; i++) {
      this._createArrow(this.nodes[i], this.nodes[i + 1]);
    }
  },

  limpar() {
    console.log("Limpando SVG.");
    this.container.clear();
    this.nodes = [];
    this.arrows = [];
  },
};

export default SvgRenderer;
