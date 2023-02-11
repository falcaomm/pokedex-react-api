import axios from 'axios'

export const getPokeList = (BASE_URL, setPokeList) => {

    axios
        .get(BASE_URL)
        .then((res) => {
            setPokeList(res.data.results);
        })
        .catch((err) => {
            console.log("Erro ao buscar lista de pokemons");
            console.log(err.response);
        })
}