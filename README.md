# Projeto Pokedex - React e API's 

<div align="center">
<b><p><a href="#">Clique aqui</a> para abrir no navegador<p/></b>
<img src="#" alt="GIF de demonstração do projeto">
</div>

> O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes, tendo como fonte de dados para a sua criação a [Poke Api](https://pokeapi.co/ "Poke Api"), foi desenvolvido com React a partir de gerenciamento de estado global (context) e lógica de rotas, com design pré definido no [Figma](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 "design").

## 💻 Tecnologias e Recursos Utilizados : 
* React;
* React Router;
* React Context;
* React Hooks;
* Axios;
* Integração com API;
* JavaScript, CSS e HTML;
* Styled-components;

## 📝 Lista de Requisitos:
- **Gerais:**
	- [x] O site deve ter 3 páginas: Home, Pokedex e Detalhes;
	- [x] Projeto deve seguir o [design](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 "design") proposto;
	- [x] O fluxo de trocas de páginas devem ser semelhante ao [fluxograma](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2%3A2&viewport=358%2C197%2C0.27&scaling=scale-down&starting-point-node-id=2%3A2 "fluxograma");
- **Página Home:**
	- [x] Mostrar uma lista de Pokemons, contendo ao menos 20 Pokemons;
	- [x] Cada Pokemon será representado por um Card;
	- [x] Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;
	- [x] Header dessa página terá um botão para acessar a página da Pokedex
- **Página Pokédex**
	- [x] Renderizar a lista de pokémons adicionados na pokedex;
	- [x] Em cada card de Pokemon deve ter um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.
	- [x] Header deve ter um botão para voltar para a Home
	- [x] Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex
- **Página de Detalhes**
	- [x] Mostrar os detalhes do Pokemon selecionado, com informações descritas
	- [x] Header deve ter um botão para adicionar ou remover da Pokedex e outro para voltar a página home.

## 🧪 Testando Localmente:

```bash
# Com o Node.js instalado clone o repositório do projeto
git clone [URL do repositório]

# Navegue até a pasta do projeto e instale as dependências e 
cd [nome da pasta do projeto]
npm install

# Para iniciar a aplicação, execute o script start
# A aplicação estará disponível na porta padrão 3000.
npm run start
```bash

