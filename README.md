<div align="center">
   <h1>📖 Fastudy</h1>
</div>

##
<h3 align="center"> Uma plataforma de estudos </h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/tinellin/fastudy?color=007bff">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tinellin/fastudy?color=007bff">
  	
  <img alt="Made by Enzo Tinelli" src="https://img.shields.io/badge/made%20by-Enzo Tinelli-%2304D361?color=007bff">
	
  
  <a href="https://github.com/tinellin/fastudy/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tinellin/fastudy?color=007bff">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=007bff">
</p>

<img src="https://cdn.discordapp.com/attachments/1054613216359108718/1158108331370631309/image.png?ex=651b0bee&is=6519ba6e&hm=3050cc41b314c0fea8b5ff70a79b9d93ed4ddb1ae12f8326f7619bade08d2afe&" alt="fastudy tela principal"/>

<h2> 📄 Sobre o projeto </h2>

<p> Uma plataforma de estudos com foco no conteúdo de vestibulares, na qual professores cadastram vídeos, artigos e lições para os usuários consumirem e se prepararem para o vestibular.

</p>

<h2> 🧪 Tecnologias </h2>

Esse projeto foi desenvolvido com as seguintes tecnologias:

<h4> 🖥️ Front-end </h4>

- [React](https://reactjs.org)
- [Redux](https://redux.js.org/)
- [Styled-components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/ptbr/)

<h4> 🗄️ Back-end </h4>

- [Nestjs](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Type ORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

<h2> 💡 Conteúdos abordados</h2>

- React, Global State com Redux
- Actions e Reducers
- Estilização Only JS usando Styled Components
- Componentes animados e com transições utilizando o Framer Motion
- Generalização de componentes para criação de vídeos, artigos e lições
- Consumir a API Rest Nest.js utilizando o Axios
- Autenticação com token JWT
- Armazenamento das imagens e dos vídeos usando o próprio banco de dados

<h2> 💻 Algumas telas </h2>
<b> [Professor] Tela para cadastro de vídeos </b>
<img src="https://cdn.discordapp.com/attachments/1054613216359108718/1158126143212376075/Screenshot_from_2023-10-01_16-39-31.png?ex=651b1c85&is=6519cb05&hm=570186357c17f23376a6ce92c051dede257dc4a202faa23b6a576411ee7ff059&"/>

<b> [Professor] Tela para cadastro de artigo </b>
<img src="https://cdn.discordapp.com/attachments/1054613216359108718/1158126143493386291/Screenshot_from_2023-10-01_16-38-59.png?ex=651b1c85&is=6519cb05&hm=2bbd6942aed43f57b017cc27aaebce684dfe0809ec794ddc8edbccd1073396c0&"/>

<b> [Professor] Tela para cadastro de lições </b>
<img src="https://media.discordapp.net/attachments/1054613216359108718/1158126143757619330/Screenshot_from_2023-10-01_16-35-45.png?ex=651b1c85&is=6519cb05&hm=b4a8f53b04d201f8ec7a69be706a3d6e5ea2bc1478de1871b92b413b7ca7866f&=&width=1318&height=658"/>

<h2> 🚀 Como executar </h2>

<h4> 💽 PostgreSQL e Docker </h4>

- Instale o Docker em sua máquina
- Instale a imagem do PostgreSQL para Docker, usando ``` docker pull postgres ```
- No arquivo ``` ormconfig.json ```, se desejar, altere o ```port```, ```name```, ```password```, ```database``` do banco de dados
- Crie um container para essa imagem, utilizando: ``` docker run --name {NOME} -e POSTGRES_PASSWORD={SENHA} -p {PORT}:{PORT} -d {NOME BASE DE DADOS} ```
  onde estiver em ```{}``` mude para o que foi configurado em ``` ormconfig.json ```
- Inicialize o container

<h4> 💻 Clonar e executar App </h4>

```bash
git clone https://github.com/tinellin/fastudy.git
cd fastudy
```

```bash
# Inicialização do front-end

cd front-end

# Instale todas as depêndencias do front-end
yarn

# Inicialize a aplicação com
yarn start
```

```bash
# Inicialização do front-end

cd back-end

# Instale todas as depêndencias do back-end
yarn

# Inicialize a aplicação com
yarn start:dev ou yarn start:prod
```

<h3> 🧾 Licença </h3>
Este projeto esta sob a MIT license para mais detalhes.

##

Feito com ❤️ por Enzo Tinelli</br>
