import React from "react";
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, Pokemon, Infos, Moves, SectionOne, Sprites, Sprite2, Stats, ImgSprite, SectionTwo, Title, Move, StatName, StatRow, StatValue, ProgressBar, ProgressBarContainer, StatValueTotal } from './styled'
import pokeball from '../../assets/pokeball.png'
import { getTypes } from '../../utils/ReturnPokemonType'
import { getColors } from "../../utils/ReturnCardColor";
import { addZeros } from "../../utils/addZeros";

function CardDetails(props) {
    const { pokemon } = props

    const type = pokemon.types[0].type.name
    const stats = pokemon.stats

    const moves = pokemon.moves.slice(0, 7)

    function formatStatName(statName) {
    switch (statName) {
        case 'hp':
            return 'HP';
        case 'attack':
        case 'defense':
        case 'speed':
            return statName.charAt(0).toUpperCase() + statName.slice(1);
        case 'special-attack':
            return 'Sp.Atk';
        case 'special-defense':
            return 'Sp.Def';
        default:
            return statName;
    }
}

    
    return (
        <>  
            <Container color={getColors(type)}>
                <SectionOne>
                    <Sprites>
                        <ImgSprite src={pokemon.sprites.front_default} />
                    </Sprites>
                    <Sprite2>
                        <ImgSprite src={pokemon.sprites.back_default} />
                    </Sprite2>
                    <Stats>
                        <Title>Base Stats:</Title>
                        {stats.map((stat) => {
                            const formattedStatName = formatStatName(stat.stat.name);
                            return (
                                <StatRow key={stat.stat.name}>
                                    <StatName>{formattedStatName}</StatName>
                                    <StatValue>{stat.base_stat}</StatValue>
                                    <ProgressBarContainer>
                                        <ProgressBar value={stat.base_stat} />
                                    </ProgressBarContainer>
                                </StatRow>
                            );
                        })}
                        <StatRow>
                            <StatName>Total</StatName>
                            <StatValueTotal>{stats.reduce((total, stat) => total + stat.base_stat, 0)}</StatValueTotal>
                            <div />
                        </StatRow>
                    </Stats>
                </SectionOne>
                <SectionTwo>
                    <Infos>
                        <PokemonNumber>{`#${addZeros(pokemon.id, 2)}`}</PokemonNumber>
                        <PokemonName>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</PokemonName>
                        <TypesContainer>
                            {pokemon.types?.map((type) => {
                                return <PokemonType key={type.type.name} src={getTypes(type.type.name)} alt={type.type.name} />
                            })}
                        </TypesContainer>
                    </Infos>
                    <Moves>
                        <Title>Moves:</Title>
                        {moves.map((move) => {
                            const moveName = move.move.name;
                            const formattedMoveName = moveName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                            return (
                                <Move key={moveName}>
                                    <p>{formattedMoveName}</p>
                                </Move>
                            );
                        })}
                    </Moves>

                </SectionTwo>
                <div>
                    <Pokemon src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addZeros(pokemon.id, 3)}.png`} alt="" />
                </div>
                <Pokeball src={pokeball} alt="pokeball" />
            </Container>

        </>
    );
}

export default CardDetails;

