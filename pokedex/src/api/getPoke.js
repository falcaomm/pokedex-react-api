import axios from 'axios'

export const getPoke = (pokeUrl, setPokemon) => {

    axios
        .get(pokeUrl)
        .then((res) => {
            setPokemon(res.data);
        })
        .catch((err) => {
            console.log("Erro ao buscar pokemom");
            console.log(err.response);
        })
}
