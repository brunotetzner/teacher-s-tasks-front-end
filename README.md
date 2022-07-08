# Teacher-s-tasks - Bruno Tetzner :boom:

## :hammer: Tecnologias utilizadas :wrench:

- HTML
- Css
- TypeScript
- React
- Styled components
- Chakra-ui
- React-icons
- Yup
- React hook form

# Rodando o projeto

Essa aplicação usa o docker para evitar problemas com a versão entre as maquinas. Certifique-se de usar o node na versão 18.3.0 para assegurar que tudo funcionara corretamente. Também certifique-se de ter o docker e o docker compose instalados na sua maquina.

> Observação: É possivel rodar o `yarn` ou o `npm install` para testar a aplicação. No entanto, é recomendavel o uso do docker.

Após ter baixado o repositório, Basta instalar as dependências do projeto.

### Instalando as dependências com docker(Recomendado).

```
sudo docker compose up --build
```

> Observação: É possível que a forma de rodar o docker seja diferente de acordo com a versão e a forma de instalação/configuração. Segue algumas alternativas para tentar rodar o docker.

```
sudo docker-compose up --build
docker-compose up --build
docker compose up --build
```

Para mais detalhes consulte a [documentação do docker](https://docs.docker.com/)

## Instalando as dependências com yarn.

Rode o comando no terminal aberto no diretório do projeto:

```
yarn
```

Isso deverá instalar todas as dependências da aplicação. Para rodar a aplicação execute o comando:

```
yarn start
```

## Instalando as dependências com npm.

Rode o comando no terminal aberto no diretório do projeto:

```
npm install
```

Isso deverá instalar todas as dependências da aplicação. Para rodar a aplicação execute o comando:

```
npm start
```

# Extras :boom:

- [Figma da aplicação](<https://www.figma.com/file/FAIJWt6NsDU9a2rd8022Bm/teacher-s-tasks(assino-test)?node-id=0%3A1>)
