// src/libs/Node.js

class Node {
    /**
     * Cria uma nova instância de Node.
     * @param {any} valor - Valor armazenado no nó.
     * @param {Node|null} proximo - Referência para o próximo nó na lista.
     */
    constructor(valor, proximo = null) {
        this.id = Node.incrementId(); // Método estático para incrementar IDs
        this.info = valor;
        this.prox = proximo;
    }

    /**
     * Método estático para incrementar IDs.
     * @returns {number} - Novo ID.
     */
    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }
}

export default Node;
