// src/libs/Node.js

class Node {
    constructor(valor, proximo = null) {
      this.id = Node.incrementId();
      this.info = valor;
      this.prox = proximo;
    }
  
    static incrementId() {
      if (!this.latestId) this.latestId = 1;
      else this.latestId++;
      return this.latestId;
    }
  }
  
  export default Node;
  