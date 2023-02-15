import Header from "../../components/header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/card/Card";
import React from "react";


export default function HomePage() {

    const context = useContext(GlobalContext)
    const { pokeList, addInPokedex, pokedex, openPokeDetails } = context;


    const filteredPokelist = () =>
        pokeList.filter((pokeInPokelist) => {

            const equalPokes = pokedex.find((pokeInPokedex) => pokeInPokelist.name === pokeInPokedex.name)

            const differentPokes = !equalPokes

            return (differentPokes)            
        })
    
    return (
        <>
            <Header></Header>
            <p>HomePage</p>
            <section>
                {filteredPokelist().map((poke) => (
                    <Card
                        key={poke.url}
                        pokeUrl={poke.url}
                        addInPokedex={addInPokedex}
                        openPokeDetails={openPokeDetails}
                    />
                ))}
            </section>
        </>
    );
}