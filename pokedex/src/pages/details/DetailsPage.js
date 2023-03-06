import CardDetails from "../../components/cardDetails/CardDetails";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import React from "react";
import Header from "../../components/header/Header";
import { MainStyle, TextMain, SectionMain } from "../../components/main/styled";

export default function DetailsPage() {

    const context = useContext(GlobalContext)
    const { pokeDetail, removeFromPokedex, addInPokedex, pokedex } = context;

    return (

        <>
            <Header
                addInPokedex={addInPokedex}
                pokeDetail={pokeDetail}
                removeFromPokedex={removeFromPokedex}
                pokedex={pokedex}
            ></Header>
            <MainStyle>
                <TextMain>Detalhes</TextMain>
                <SectionMain>
                    <CardDetails
                        pokemon={pokeDetail}
                    ></CardDetails>
                </SectionMain>
            </MainStyle>
        </>
    );
}