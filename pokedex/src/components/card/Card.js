import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getPoke } from "../../api/getPoke";
import { goToDetails } from "../../routes/cordinator";
import React from "react";
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon, DetailsButton, DeleteButton } from './styled'
import pokeball from '../../assets/pokeball.png'
import { getTypes } from '../../utils/ReturnPokemonType'
import { getColors } from "../../utils/ReturnCardColor";


function Card(props) {
    const navigate = useNavigate()
    const { pokeUrl, addInPokedex, removeFromPokedex, openPokeDetails, poke } = props;

    const onClickDetails = (pokemon) => {
        openPokeDetails(pokemon)
        goToDetails(navigate, pokemon.name)
    }

    const location = useLocation();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPoke(pokeUrl, setPokemon);
    }, []);

    const types = pokemon.types
    const filterTypes = types?.filter((objeto) => objeto.slot === 1)


    const addZeroes = (num, lenght) => {
        var numberWithZeroes = String(num);
        var counter = numberWithZeroes.length;

        while (counter < lenght) {

            numberWithZeroes = "0" + numberWithZeroes;

            counter++;

        }

        return numberWithZeroes;
    }

    return (
        <>
            {filterTypes?.map((type) => {
                return(
                    <Container key={type.type.name} color={getColors(type.type.name)}>
                        <div>
                            <PokemonNumber>{`#${addZeroes(pokemon.id, 2)}`}</PokemonNumber>
                            <PokemonName>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</PokemonName>
                            <TypesContainer>
                                {types?.map((type) => {
                                    return <PokemonType key={type.type.name} src={getTypes(type.type.name)} alt={type.type.name} />
                                })}
                            </TypesContainer>
                            <DetailsButton onClick={() => onClickDetails(pokemon)}>
                                Detalhes
                            </DetailsButton>
                        </div>
                        <div>
                            <Pokemon src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addZeroes(pokemon.id, 3)}.png`} alt="" />
                            {location.pathname === "/" ? (
                                <CatchButton onClick={() => addInPokedex(pokemon)}>
                                    Capturar
                                </CatchButton>
                            ) : (
                                <DeleteButton onClick={() => removeFromPokedex(pokemon)}>
                                    Excluir
                                </DeleteButton>
                            )}
                        </div>
                        <Pokeball src={pokeball} alt="pokeball" />
                    </Container>)
                })
            }
        </>
    );
}

export default Card;