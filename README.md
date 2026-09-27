# Todo React Avançado

Aplicação de lista de tarefas desenvolvida em React como atividade prática do módulo de React Avançado.

## Funcionalidades

- Adicionar tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Filtrar tarefas por:
  - Todas
  - Pendentes
  - Concluídas
- Persistência das tarefas no `localStorage`
- Interface responsiva com abordagem Mobile First

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Context API
- `useState`
- `useContext`
- `useMemo`
- Hook personalizado
- `localStorage`
- CSS

## Estrutura do projeto

```text
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   ├── TodoList.jsx
│   └── TodoFilters.jsx
│
├── context/
│   └── TodoContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Como executar o projeto

### 1. Instalar as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

### 3. Acessar a aplicação

Após executar o comando, o Vite exibirá no terminal o endereço local da aplicação.

Acesse o endereço informado pelo Vite no navegador.

## Context API

O projeto utiliza a Context API para compartilhar globalmente o estado das tarefas entre os componentes da aplicação.

O contexto está localizado em:

```text
src/context/TodoContext.jsx
```

## Hook personalizado

Foi desenvolvido o hook personalizado `useLocalStorage`, responsável por armazenar e recuperar as tarefas utilizando o `localStorage` do navegador.

O hook está localizado em:

```text
src/hooks/useLocalStorage.js
```

## Memoization

O projeto utiliza `useMemo` para memorizar a lista de tarefas filtradas e evitar cálculos desnecessários quando o estado relevante não é alterado.

## Objetivo

O projeto foi desenvolvido para praticar:

- Gerenciamento de estado com `useState`
- Compartilhamento de estado com Context API
- Uso de `useContext`
- Criação de hooks personalizados
- Memoization com `useMemo`
- Organização de componentes React
- Desenvolvimento de interfaces responsivas