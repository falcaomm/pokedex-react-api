import { GlobalContext } from "./GlobalContext"
import { useState, useEffect } from "react";
import { getPokeList } from "../api/getPokeList";
import { BASE_URL } from "../constants/url";

export const GlobalState = (props) => {

    const [pokeList, setPokeList] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokeList(BASE_URL, setPokeList);
    }, []);

    const addInPokedex = (clickedPoke) => {
        const findPokeInPokedex = pokedex.find((poke) => poke.name === clickedPoke.name);

        if (!findPokeInPokedex) {
            const newPokedex = [...pokedex, clickedPoke];
            setPokedex(newPokedex);
        }
    };

    const removeFromPokedex = (clickedPoke) => {
        const newPokedex = pokedex.filter((poke) => poke.name !== clickedPoke.name)
        setPokedex(newPokedex);
    }

    const context = {
        pokeList: pokeList,
        pokedex: pokedex,
        addInPokedex: addInPokedex,
        removeFromPokedex: removeFromPokedex,
    };
    
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}