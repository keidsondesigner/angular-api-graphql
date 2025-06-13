# Angular GraphQL - Rick and Morty App

## Sobre o Projeto

Este projeto é uma aplicação Angular que utiliza GraphQL para consumir a API do Rick and Morty. A aplicação permite visualizar informações sobre os personagens da série, incluindo detalhes como status, espécie, gênero, origem e localização atual.

## Tecnologias Utilizadas

- Angular 19
- Apollo Client
- GraphQL
- RxJS
- TypeScript

## Funcionalidades

- Listagem de personagens do universo Rick and Morty
- Visualização detalhada de cada personagem
- Informações sobre origem e localização atual
- Listagem de episódios em que o personagem aparece

## Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- NPM ou Yarn

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd angular-graphql
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
```

4. Acesse a aplicação em `http://localhost:4200`

## Estrutura do Projeto

- `src/app/services/rick-morty.service.ts`: Serviço responsável pelas consultas GraphQL à API do Rick and Morty
- `src/app/components/`: Componentes da aplicação
- `src/app/components/post-list/`: Componente para exibição da lista de personagens

## Consultas GraphQL

O projeto utiliza duas consultas principais:

1. `getCharacters()`: Busca todos os personagens
2. `getCharacter(id)`: Busca um personagem específico pelo ID

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## API Utilizada

Este projeto consome a [Rick and Morty API](https://rickandmortyapi.com/) através de GraphQL.
