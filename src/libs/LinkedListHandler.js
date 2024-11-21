import { LinkedListVisitor } from './parser/LinkedListVisitor';

class LinkedListHandler extends LinkedListVisitor {
  constructor(listInstance) {
    super();
    this.list = listInstance; // Instância da sua lista
  }

  visitInserirInicio(ctx) {
    const valor = parseInt(ctx.valor().getText(), 10);
    this.list.inserir_inicio(valor);
    return null;
  }

  visitInserirFim(ctx) {
    const valor = parseInt(ctx.valor().getText(), 10);
    this.list.inserir_fim(valor);
    return null;
  }

  // Implemente os outros métodos de visita para cada comando...

  visitRemoverInicio(ctx) {
    this.list.remover_inicio();
    return null;
  }

  // Continue para os demais comandos...
}
