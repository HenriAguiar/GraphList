# GraphList

GraphList é uma aplicação visual interativa para ensinar e demonstrar conceitos de listas encadeadas, utilizando ANTLR para parsing dos comandos e SVG.js para a renderização gráfica dos elementos. Com ela, é possível inserir, remover e manipular elementos da lista de forma visual, observando em tempo real como a estrutura se transforma.

## Funcionalidades

- **Inserir Elementos**: Comandos para adicionar elementos no início ou fim da lista, ou após um valor existente.
- **Remover Elementos**: Opções para remover o primeiro, o último, um elemento por valor ou por posição.
- **Renderização Gráfica**: Visualização dos elementos da lista e suas conexões em tempo real, com animações suaves.
- **Erro de Sintaxe**: Tratamento e mensagens claras para erros de sintaxe nos comandos.

## Tecnologias Utilizadas

- **ANTLR**: Para criar o lexer e o parser da linguagem de comandos personalizada utilizada na aplicação.
- **SVG.js**: Para renderizar graficamente os elementos da lista e suas conexões de maneira visual e interativa.
- **Next.js**: Framework utilizado para a criação da aplicação, proporcionando server-side rendering e outras funcionalidades avançadas.
- **React**: Interface do usuário responsiva, proporcionando uma experiência fluida.

## Instalação

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/seu_usuario/graphlist.git
   cd graphlist
   ```

2. **Instale as Dependências**:

   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Abra no Navegador**: Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Como Usar

- **Comandos de Inserção**:

  - `inserir_inicio(valor);` — Insere um nó no início da lista.
  - `inserir_fim(valor);` — Insere um nó no final da lista.
  - `inserir_apos(valor_pivo, valor);` — Insere um nó após um valor existente.

- **Comandos de Remoção**:

  - `remover_inicio();` — Remove o primeiro nó da lista.
  - `remover_fim();` — Remove o último nó da lista.
  - `remover_elemento(valor);` — Remove um nó pelo valor.
  - `remover_posicao(posicao);` — Remove um nó pela posição.

- **Tratamento de Erros**: Caso um comando seja digitado incorretamente, uma mensagem de erro será exibida no console.

## Estrutura do Projeto

- **/src/libs**: Contém as bibliotecas principais para lidar com a lista (`Ldse.js`), renderização (`SvgRenderer.js`) e parsing (`ListaVisitor.ts`, `MyErrorListener.js`).
- **/src/components**: Componentes React para a interface do usuário, incluindo o editor de comandos e a área de visualização.
- **/public**: Recursos estáticos, como imagens e ícones.
- **/pages**: Páginas da aplicação Next.js, responsáveis por renderizar a interface do usuário.


