import Header from "../../components/header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/card/Card";
import React from "react";
import { MainStyle, TextMain, SectionMain } from "../../components/main/styled";
import { getPoke } from "../../api/getPoke";
import { useState, useEffect } from "react";


export default function HomePage() {

    const context = useContext(GlobalContext)
    const { pokeList, addInPokedex, pokedex, openPokeDetails } = context;

    const filteredPokelist = pokeList.filter((pokeInPokelist) =>
        {
            const equalPokes = pokedex.find((pokeInPokedex) => pokeInPokelist.name === pokeInPokedex.name)

            const differentPokes = !equalPokes

            return (differentPokes)            
        })
    
    return (
        <>
            <Header></Header>
            <MainStyle>
                <TextMain>Todos Pokemons</TextMain>
                <SectionMain>
                    {filteredPokelist.map((poke) => (
                        <Card
                            key={poke.url}
                            pokeUrl={poke.url}
                            addInPokedex={addInPokedex}
                            openPokeDetails={openPokeDetails}
                        />
                    ))}
                </SectionMain>
            </MainStyle>
        </>
    );
}