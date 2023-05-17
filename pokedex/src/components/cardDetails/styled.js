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
    min-width: 900px;
    max-width: 1000px;
    `;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
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
export const SectionOne = styled.section`
    max-height: 100%;
    min-width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

export const Sprites = styled.section`
    background-color: #ffffff;
    border-radius: 0.7rem;
    display: grid;
    align-items: center;
    justify-items: center;
    margin-right: 1rem ;
    margin-bottom: 1rem ;
`;

export const Sprite2 = styled(Sprites)`
    grid-row: 2;
    margin-bottom: 0rem ;
    margin-top: 1rem ;
`;

export const ImgSprite = styled.img`
    height: 100%;
`

export const Stats = styled.section`
    border-radius: 0.7rem;
    background-color: #ffffff;
    color: black;
    grid-row: 1 / 3;
    padding: 1rem;
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 3fr;
  align-items: center;
  border-bottom: 1px solid #ECECEC;
  font-size: 0.7rem;
  padding: 1.2rem;
  `;

export const StatName = styled.p`
  color: grey;
  font-weight: 500;
  text-align: right;
`;

export const StatValue = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const StatValueTotal = styled(StatValue)`
  font-weight: 800;
`

export const ProgressBarContainer = styled.div`
  height: 10px;
  width: 100%;
  background-color: #ECECEC;
  border-radius: 0.5rem;
`;

export const ProgressBar = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  width: ${props => props.value}%;
  background-color: ${props => props.value < 50 ? 'orange' : 'yellow'};
`;

export const SectionTwo = styled.section`
    margin-left: 2rem;
    display: grid;
    grid-template-rows: 1fr 2fr;
    max-height: 100%;
`

export const Infos = styled.div`
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 2.5rem;
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

export const Moves = styled.div`
    background-color: #ffffff;
    color: black;
    border-radius: 0.7rem;
    height: 100%;
    grid-row: 2 / 3;
    max-width: 70%;
    padding: 1rem;
`;

export const Title = styled.h1`
    font-weight: 800;
    font-size: 1.2rem;
`

export const Move = styled.div`
    background-color: #ECECEC;
    margin: 0.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    padding: 0.5rem;
`