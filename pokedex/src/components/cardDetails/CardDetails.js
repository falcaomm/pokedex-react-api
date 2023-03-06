
import { useEffect, useState } from "react";
import React from "react";
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, Pokemon, Infos, Moves, SectionOne, Sprites, Sprite2, Stats } from './styled'
import pokeball from '../../assets/pokeball.png'
import { getTypes } from '../../utils/ReturnPokemonType'
import { getColors } from "../../utils/ReturnCardColor";



function CardDetails(props) {
    const { pokemon } = props

    const type = pokemon.types[0].type.name
    const stats = pokemon.stats

    const addZeroes = (num, lenght) => {
        var numberWithZeroes = String(num);
        var counter = numberWithZeroes.length;

        while (counter < lenght) {

            numberWithZeroes = "0" + numberWithZeroes;

            counter++;

        }

        return numberWithZeroes;
    }

    const moves = pokemon.moves.slice(0, 7)

    
    return (
        <>  
            <Container color={getColors(type)}>
                <SectionOne>
                    <Sprites>
                        <img src={pokemon.sprites.front_default} />
                    </Sprites>
                    <Sprite2>
                        <img src={pokemon.sprites.back_default} />
                    </Sprite2>
                    <Stats>
                        {stats.map((stat) => {
                            return (
                                <div key={stat.stat.name}>
                                    <p> {stat.stat.name}</p>
                                    <p> {stat.base_stat}</p>
                                </div>
                            )
                        })}
                    </Stats>
                </SectionOne>

                <Infos>
                    <PokemonNumber>{`#${addZeroes(pokemon.id, 2)}`}</PokemonNumber>
                    <PokemonName>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</PokemonName>
                    <TypesContainer>
                        {pokemon.types?.map((type) => {
                            return <PokemonType key={type.type.name} src={getTypes(type.type.name)} alt={type.type.name} />
                        })}
                    </TypesContainer>
                </Infos>
                <div>
                    <Pokemon src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addZeroes(pokemon.id, 3)}.png`} alt="" />
                </div>
                <Moves>
                    {moves.map((move) => {
                        console.log(move)
                        return (
                            <div key={move.move.name}>
                                <p> {move.move.name}</p>
                            </div>
                        )
                    })}
                </Moves>
                <Pokeball src={pokeball} alt="pokeball" />
            </Container>

        </>
    );
}

export default CardDetails;
