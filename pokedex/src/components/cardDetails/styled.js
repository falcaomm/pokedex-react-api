import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    width: 90vw;
    background-color: ${(props) => props.color};
    border-radius: 2rem;
    display: flex;
    position: relative;
    color: #ffffff;
    height: 500px;
`;

export const SectionOne = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Sprites = styled.section`
    grid-column: 1fr;
    grid-row: 1fr;
`;

export const Sprite2 = styled.section`
    grid-column: 1fr;
    grid-row: 2fr;
`;

export const Stats = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1r 1fr;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 0.5rem;
`;

export const TypesContainer = styled.div`
    display: flex;
    margin-bottom: 38px;
`;

export const Infos = styled.div`
    margin-left: 30vw;
`;

export const Moves = styled.div`
    margin-left: 30vw;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 112%;
`;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -100px;
  right: 0;
  margin-right: 2rem;
  z-index: 2;
`