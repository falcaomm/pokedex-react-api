import { GlobalContext } from "./GlobalContext"
import { useState, useEffect } from "react";
import { getPokeList } from "../api/getPokeList";
import { BASE_URL } from "../constants/url";

export const GlobalState = (props) => {

    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        getPokeList(BASE_URL, setPokeList);
    }, []);

    console.log(pokeList);

    const context = {}
    
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}