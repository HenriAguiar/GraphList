let timeline = [];
let passoAtual = -1;

export function executarPasso(frame) {
    timeline.push(frame);
    frame.executarCriar();
}

export function avancarPasso() {
    if (passoAtual < timeline.length - 1) {
        passoAtual++;
        timeline[passoAtual].executarCriar();
    }
}

export function retrocederPasso() {
    if (passoAtual >= 0) {
        timeline[passoAtual].executarDesfazer();
        passoAtual--;
    }
}
