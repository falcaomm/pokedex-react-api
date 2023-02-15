import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getPoke } from "../../api/getPoke";
import { goToDetails } from "../../routes/cordinator";

function Card(props) {
    const navigate = useNavigate()
    const { pokeUrl, addInPokedex, removeFromPokedex, openPokeDetails } = props;

    const onClickDetails = (pokemon) => {
        openPokeDetails(pokemon)
        goToDetails(navigate, pokemon.name)
    }

    const location = useLocation();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPoke(pokeUrl, setPokemon);
    }, []);


    return (
        <div>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <div>
                {location.pathname === "/" ? (
                    <button onClick={() => addInPokedex(pokemon)}>
                        Adicionar à Pokedex
                    </button>
                ) : (
                    <button onClick={() => removeFromPokedex(pokemon)}>
                        Remover da Pokedex
                    </button>
                )}

                <button onClick={() => onClickDetails(pokemon)}>
                    Ver detalhes
                </button>
            </div>
        </div>
    );
}

export default Card;
