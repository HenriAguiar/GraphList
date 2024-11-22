class ListaVisitor {
  constructor(ldse) {
    this.ldse = ldse; // Instância da LDSE
  }

  visitCommands(ctx) {
    for (let i = 0; i < ctx.command().length; i++) {
      this.visit(ctx.command(i));
    }
    console.log("Lista final:", this.ldse.toArray()); // Loga o estado final da lista
  }

  visitInserirInicio(ctx) {
    const valor = parseInt(ctx.valor().getText(), 10);
    this.ldse.inserir_inicio(valor);
    console.log("Inserido no início:", valor);
  }

  visitInserirFim(ctx) {
    const valor = parseInt(ctx.valor().getText(), 10);
    this.ldse.inserir_fim(valor);
    console.log("Inserido no fim:", valor);
  }

  visitRemoverInicio(ctx) {
    this.ldse.remover_inicio();
    console.log("Removido do início");
  }

  visitRemoverFim(ctx) {
    this.ldse.remover_fim();
    console.log("Removido do fim");
  }

  visitRemoverElemento(ctx) {
    const valor = parseInt(ctx.valor().getText(), 10);
    this.ldse.remover_elemento(valor);
    console.log("Elemento removido:", valor);
  }

  visitInserirApos(ctx) {
    const valorPivo = parseInt(ctx.valorPivo().getText(), 10);
    const valor = parseInt(ctx.valor().getText(), 10);
    this.ldse.inserir_apos(valorPivo, valor);
    console.log(`Inserido após ${valorPivo}:`, valor);
  }

  visitRemoverPosicao(ctx) {
    const posicao = parseInt(ctx.posicao().getText(), 10);
    this.ldse.remover_posicao(posicao);
    console.log("Removido na posição:", posicao);
  }
}
