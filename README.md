# API Nodejs - Laboratório e Exames

Está aplicação está utilizando Nodejs com AdonisJs, a arquitetura dela é Model Controller. Com ela podemos manipular o banco de dados
com o Lucid que por baixo dos panos roda o Knex.JS para fazer as operações de banco e criar tabelas.

A documentação eu optei por utilizar diretamente no insomnia, pois fica menos poluído o código. E também na própria aplicação utilizo o TypeScript que ajuda no AutoComplete.

Utilizei o Docker para subir o banco de dados Postgresql.

- Api NodeJS - [WebSite](https://adonisjs.com/)

---

## Requisitos

- Docker
- Node
- Yarn
- Insomnia

## Setup Project Local Dev

- Instalar dependências `yarn`
- Copiar e renomear `.env.example` to `.env`
- Run Terminal in root folder `docker compose up -d` - Este comando SGBD Postgresql
- Run Project `yarn dev`

## Documentation - API - Insomnia

- Import no Insomnia [insomnia.json](https://github.com/Galo-Monitor/nodejs-adonisjs-api/blob/dev/docs/Insomnia.json)
- Selecionar uma das variáveis de ambiente;
  - `dev_local` - se estiver rodando localmente
  - `dev_heroku` - para rodar a aplicação do Heroku - Pode demorar uns minutos para acordar o servidor.
- Dentro do Insomnia tem a aba Docs como pode ser visto na imagem abaixo. Nele contém o que cada rota executa na API.

  <img src="docs/insomniaDocImage.png?raw=true" alt="Image Docs Insomnia" style="width: 500px"/>

- Para ver as rotas direto na aplicação tem que rodar o comando `node ace list:routes`
- Se rodar o comando `node ace list:routes --json > routes.json` a aplicação gera um json na raiz do projeto com todas as rotas também.
