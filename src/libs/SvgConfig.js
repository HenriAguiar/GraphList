import { SVG } from '@svgdotjs/svg.js';

let draw = null;

export function initializeSvg() {
    if (!draw) {
        const container = document.getElementById('canvas');
        if (container) {
            draw = SVG().addTo(container).size('100%', '500');
        }
    }
    return draw;
}

export { draw };

// Coordenadas iniciais e espaçamento dos nós
export const xBase = 50; // Posição X inicial
export const yBase = 200; // Posição Y fixa
export const nodeSpacing = 100; // Espaçamento entre os nós
