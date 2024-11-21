class ListaVisitor {
    constructor(setLista, lista) {
      this.setLista = setLista;
      this.lista = [...lista]; // Cria uma cópia da lista atual
    }
  
    visitCommands(ctx) {
      for (let i = 0; i < ctx.command().length; i++) {
        this.visit(ctx.command(i));
      }
      // Atualiza o estado da lista após todas as operações
      this.setLista(this.lista);
    }
  
    visitInserirInicio(ctx) {
      const valor = parseInt(ctx.valor().getText(), 10);
      inserir_inicio(valor, this.lista);
    }
  
    visitInserirFim(ctx) {
      const valor = parseInt(ctx.valor().getText(), 10);
      inserir_fim(valor, this.lista);
    }
  
    visitRemoverInicio(ctx) {
      remover_inicio(this.lista);
    }
  
    visitRemoverFim(ctx) {
      remover_fim(this.lista);
    }
  
    visitRemoverElemento(ctx) {
      const valor = parseInt(ctx.valor().getText(), 10);
      removerElemento(valor, this.lista);
    }
  
    visitInserirApos(ctx) {
      const valorPivo = parseInt(ctx.valorPivo().getText(), 10);
      const valor = parseInt(ctx.valor().getText(), 10);
      inserir_apos(valorPivo, valor, this.lista);
    }
  
    visitRemoverPosicao(ctx) {
      const posicao = parseInt(ctx.posicao().getText(), 10);
      remover_posicao(posicao, this.lista);
    }
  }
  