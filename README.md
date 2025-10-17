# Codeleap — Aplicação React (Vite)

README completo para apresentação em entrevista técnica.

## Visão geral

Aplicação de feed de posts que permite: login simples, criação, edição e exclusão de posts. Utiliza React + Vite, React Query para sincronização/cache e Axios para comunicação HTTP. Desenvolvida para teste técnico.

## Recursos principais

- Login simples (nome de usuário salvo em localStorage)
- Listagem de posts (fetch + cache via React Query)
- Criação de post
- Edição de post (somente pelo autor)
- Exclusão de post (somente pelo autor)
- Modais para edição e confirmação de exclusão
- Formulários controlados com validação mínima
- Estilos em CSS simples

## Tecnologias

- React (Vite)
- @tanstack/react-query
- Axios
- Context API (Auth)
- CSS (styles/global.css)
- Node.js / npm

## Pré-requisitos

- Node.js >= 16
- npm >= 8
- Conexão com a API externa (padrão: https://dev.codeleap.co.uk/careers/ ou conforme arquivo de configuração)

## Instalação e execução

1. Clonar o repositório:
   git clone <repo-url>

2. Entrar na pasta do projeto:
   cd "Codeleap"

3. Instalar dependências:
   npm install

4. Rodar em desenvolvimento:
   npm run dev

5. Build para produção:
   npm run build

6. Pré-visualizar o resultado do projeto
   npm run preview

## Estrutura do projeto (principais arquivos)

- src/
  - main.jsx — ponto de entrada; provê QueryClientProvider e AuthProvider
  - App.jsx — layout / rotas principais
  - context/AuthContext.jsx — contexto e hooks de autenticação
  - service/api.js — configuração Axios / baseURL
  - hooks/usePosts.js — hooks React Query para posts (list/create/update/delete)
  - components/
    - FormPost/ — componente de criação de post
    - Post/ — item de post com ações
    - Modal/ — componente modal reutilizável
    - EditPostForm/ — formulário de edição
    - DeleteConfirmation/ — confirmação de exclusão
  - pages/
    - Singup/index.jsx — tela de login/registro simples
    - Home/Index.jsx — feed principal
  - utils/getTimeDifference.js — utilitário de tempo
  - styles/global.css — estilos globais

Observação: arquivo ativo atualmente: src/main.jsx

## Arquitetura e decisões de implementação

- React Query para: cache de GETs, revalidação automática após mutações (invalidate), estado de loading/error centralizado.
- Context API para manter o usuário autenticado (armazenado em localStorage) e prover informações para componentes que precisem do username.
- Axios encapsulado em src/service/api.js para centralizar baseURL e interceptors (se necessário).
- Componentização: UI dividida em componentes pequenos e reutilizáveis, facilitando testes e manutenção.
- Simplicidade na autenticação: objetivo de teste técnico — não há JWT/segurança robusta.

## Como usar (fluxo)

1. Abrir a app em / (rodando em dev)
2. Fazer login informando um nome (salvo em localStorage)
3. Criar um novo post com título e conteúdo
4. Editar/deletar posts criados pelo usuário logado
5. Mensagens de erro/sucesso via estados retornados pelos hooks

## Melhorias futuras

- Agregaçao de opção de logout na pagina home

## Licença

- MIT (ou ajustar conforme necessário)
