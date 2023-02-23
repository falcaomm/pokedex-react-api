import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  min-width: 400px;
  max-width: 400px;
  background-color: ${(props) => props.color};
  border-radius: 0.7rem;
  display: flex;
  position: relative;
  color: #ffffff;
  max-height: 214px;
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
    margin-bottom: 38px;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000000;
`;

export const DeleteButton = styled(CatchButton)`
  background: #FF6262;
  color: #ffffff;
`;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`
export const DetailsButton = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`