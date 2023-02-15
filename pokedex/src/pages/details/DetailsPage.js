import CardDetails from "../../components/cardDetails/CardDetails";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import React from "react";
import Header from "../../components/header/Header";

export default function DetailsPage() {

    const context = useContext(GlobalContext)
    const { pokeDetail, removeFromPokedex, addInPokedex, pokedex } = context;

    return (

        <>
            <p>DetailsPage</p>
            <Header
                addInPokedex={addInPokedex}
                pokeDetail={pokeDetail}
                removeFromPokedex={removeFromPokedex}
                pokedex={pokedex}
            ></Header>
            <CardDetails
                pokeDetail={pokeDetail}
            ></CardDetails>
        </>
    );
}