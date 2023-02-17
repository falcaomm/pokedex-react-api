import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MainStyle, TextMain, SectionMain } from "../../components/main/styled";


export default function PokedexPage() {
    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex, openPokeDetails } = context;

    return (
        <>
            <Header></Header>
            <MainStyle>
                <TextMain>Meus Pokemons</TextMain>
                <SectionMain>
                    {pokedex?.map((poke) => (
                        <Card
                            key={poke.name}
                            pokeUrl={`${BASE_URL}/${poke.name}`}
                            removeFromPokedex={removeFromPokedex}
                            openPokeDetails={openPokeDetails}
                        />
                    ))}
                </SectionMain>
            </MainStyle>
        </>
    );
}