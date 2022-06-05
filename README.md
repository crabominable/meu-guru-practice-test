## Aplicação teste do dashboard de usuários da MeuGuru!

Aplicação fullstack em TypeScript como linguagem, Express para o gerenciamento de rotas e middlewares do backend, Postgresql como banco relacional, Prisma como ORM, React no frontend com Axios para o gerenciamento das requisições e Redux para o estado global, funcionando em um mono-repo que pode ser executado usando o postgresql localmente, bastando apenas configurar o arquivo .env (a pasta backend possui um arquivo de exemplo), rodar o postgresql com o docker ou rodar o docker-compose para subir ambas as aplicações em containers (banco de dados, frontend e backend).

Fullstack application in TypeScript as a language, Express for managing routes and backend middleware, Postgresql as a relational database, Prisma as ORM, React on the frontend with Axios for managing requests and Redux for the global state, working in a mono-repo which can be run using postgresql locally, just configure the .env file (the backend folder has an example file), run postgresql with docker or run docker-compose to upload both applications in containers (database, frontend and backend).

## Prerequisites

- Node
- Postgresql (locally) or Docker

## Tech stack

- Typescript
- Express
- Postgresql
- Prisma
- React
- React Router
- Axios
- Redux

## Getting started

- Clone the repository:

```bash
git clone https://github.com/crabominable/meu-guru-user-dashboard
```

- Go to repository root:

```bash
cd meu-guru-user-dashboard
```

- Install the dependencies:

```bash
cd frontend
npm i
cd ..
cd backend
npm i
```

- Start the aplication:

```bash
cd frontend
npm run dev
cd ..
cd backend
npm run dev
```
