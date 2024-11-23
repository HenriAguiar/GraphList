export class Frame {
    constructor(criar, desfazer, descricao) {
        this.criar = criar; // Função para aplicar a alteração
        this.desfazer = desfazer; // Função para reverter a alteração
        this.descricao = descricao; // Texto descritivo do que esse frame faz
    }

    executarCriar() {
        this.criar(); // Executa os comandos de criação
    }

    executarDesfazer() {
        this.desfazer(); // Executa os comandos de reversão
    }
}