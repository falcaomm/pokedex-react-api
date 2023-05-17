import { GlobalContext } from "./GlobalContext"
import { useState, useEffect } from "react";
import { getPokeList } from "../api/getPokeList";
import { BASE_URL } from "../constants/url";
import swal from "sweetalert2"
import "../utils/custom.css"


export const GlobalState = (props) => {

    const [pokeList, setPokeList] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [pokeDetail, setPokeDetail] = useState([])

    useEffect(() => {
        getPokeList(BASE_URL, setPokeList);
    }, []);

    const msgAdd = () => {
        swal.fire({
            title: 'Gotcha!',
            text: 'O Pokémon foi adicionado a sua Pokédex',
            width: '451px',
            customClass: {
                title: 'custom-title'
            },
            showConfirmButton: false
        });
    };



    const addInPokedex = (clickedPoke) => {
        const findPokeInPokedex = pokedex.find((poke) => poke.name === clickedPoke.name);

        if (!findPokeInPokedex) {
            const newPokedex = [...pokedex, clickedPoke];
            setPokedex(newPokedex);
        }

        msgAdd()
    }

    const msgRemove = () => {
        swal.fire({
            title: 'Oh, no!',
            text: 'O Pokémon foi removido da sua Pokedex',
            width: '451px',
            customClass: {
                title: 'custom-title'
            },
            showConfirmButton: false
        })
    };

    const removeFromPokedex = (clickedPoke) => {
        const newPokedex = pokedex.filter((poke) => poke.name !== clickedPoke.name)
        setPokedex(newPokedex);
        msgRemove()
    }

    const openPokeDetails = (clickedPoke) => {
        setPokeDetail(clickedPoke);
    }

    const context = {
        pokeList: pokeList,
        pokedex: pokedex,
        addInPokedex: addInPokedex,
        removeFromPokedex: removeFromPokedex,
        openPokeDetails: openPokeDetails,
        pokeDetail: pokeDetail,
    };
    
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}