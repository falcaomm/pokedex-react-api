import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function PokedexPage() {
    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex } = context;

    return (
        <>
            <Header></Header>
            <p>PokedexPage</p>
            <section>
                {pokedex?.map((poke) => (
                    <Card
                        key={poke.name}
                        pokemonUrl={`${BASE_URL}/${poke.name}`}
                        removeFromPokedex={removeFromPokedex}
                    />
                ))}
            </section>
        </>
    );
}