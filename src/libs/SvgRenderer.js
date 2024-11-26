// src/libs/SvgRenderer.js

import { SVG } from '@svgdotjs/svg.js';

const SvgRenderer = {
  container: null,
  nodes: [],
  arrows: {},

  init(containerId) {
    this.container = SVG().addTo(`#${containerId}`).size('100%', '100%');
    this.nodes = [];
    this.arrows = {};
  },

  criarNo({ id, valor, x, y }) {
    const radius = 25;
    const startX = x - 100;
  
    const rect = this.container.rect(2 * radius, radius * 2)
      .attr({ x: startX, y, rx: radius, ry: radius, fill: '#07c6ff' });
  
    const text = this.container.text(valor.toString())
      .font({
        size: 14,
        family: 'Arial',
        anchor: 'middle',
      })
      .fill('white')
      .center(startX + radius, y + radius); // Centraliza o texto no retângulo
  
    const rectAnim = rect.animate(500).move(x, y);
    const textAnim = text.animate(500).center(x + radius, y + radius); // Atualiza a posição do texto para manter centralização
  
    const animationPromise = new Promise(resolve => {
      rectAnim.after(() => {
        resolve();
      });
    });
  
    const node = { id, rect, text, x, y, animationPromise };
    return node;
  }
  ,

  atualizarPosicoes(listaComIds) {
    return new Promise(resolve => {
      const existingNodesMap = {};
      this.nodes.forEach(node => {
        existingNodesMap[node.id] = node;
      });
  
      const updatedNodes = [];
      const animations = [];
  
      listaComIds.forEach((item) => {
        let node = existingNodesMap[item.id];
  
        if (!node) {
          // Cria o nó se ele não existir
          node = this.criarNo(item);
          animations.push(node.animationPromise);
        } else {
          // Atualiza a posição do nó existente
          const rectAnim = node.rect.animate(500).move(item.x, item.y);
          const textAnim = node.text.animate(500).center(item.x + 25, item.y + 25);
  
          animations.push(new Promise(res => rectAnim.after(res)));
          animations.push(new Promise(res => textAnim.after(res)));
  
          // Atualiza as coordenadas do nó
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
  }
  ,

  removerNo(id) {
    return new Promise(resolve => {
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

        // Remover setas associadas ao nó removido
        const arrowKeysToRemove = [];
        for (const key in this.arrows) {
          const arrowObj = this.arrows[key];
          if (arrowObj.fromNode.id === id || arrowObj.toNode.id === id) {
            this._removeArrow(arrowObj);
            arrowKeysToRemove.push(key);
          }
        }
        arrowKeysToRemove.forEach(key => delete this.arrows[key]);

        Promise.all(animations).then(() => {
          this._rebuildArrows();
          resolve();
        });
      } else {
        resolve();
      }
    });
  },

  getNodeById(id) {
    return this.nodes.find(node => node.id === id);
  },

  _createArrow(fromNode, toNode) {
    const fromX = fromNode.x + 50;
    const fromY = fromNode.y + 25;
    const toX = toNode.x;
    const toY = toNode.y + 25;

    const arrow = this.container.line(fromX, fromY, toX, toY)
      .stroke({ width: 2, color: '#FFF' });

    const arrowHead = this.container.polygon(`${toX - 5},${toY - 5} ${toX},${toY} ${toX - 5},${toY + 5}`).fill('#FFF');

    return { fromNode, toNode, arrow, arrowHead };
  },

  _updateArrow(arrowObj, fromNode, toNode) {
    const fromX = fromNode.x + 50;
    const fromY = fromNode.y + 25;
    const toX = toNode.x;
    const toY = toNode.y + 25;

    arrowObj.arrow.animate(500).plot(fromX, fromY, toX, toY);
    const headPoints = `${toX - 5},${toY - 5} ${toX},${toY} ${toX - 5},${toY + 5}`;
    arrowObj.arrowHead.animate(500).plot(headPoints);
  },

  _removeArrow(arrowObj) {
    arrowObj.arrow.remove();
    arrowObj.arrowHead.remove();
  },

  _rebuildArrows() {
    const newArrowKeys = {};

    // Criar ou atualizar setas
    for (let i = 0; i < this.nodes.length - 1; i++) {
      const fromNode = this.nodes[i];
      const toNode = this.nodes[i + 1];
      const key = `${fromNode.id}-${toNode.id}`;
      newArrowKeys[key] = true;

      if (this.arrows[key]) {
        // Atualizar posição da seta existente
        this._updateArrow(this.arrows[key], fromNode, toNode);
      } else {
        // Criar nova seta
        this.arrows[key] = this._createArrow(fromNode, toNode);
      }
    }

    // Remover setas que não são mais necessárias
    for (const key in this.arrows) {
      if (!newArrowKeys[key]) {
        this._removeArrow(this.arrows[key]);
        delete this.arrows[key];
      }
    }
  },

  limpar() {
    this.container.clear();
    this.nodes = [];
    this.arrows = {};
  },
};

export default SvgRenderer;
