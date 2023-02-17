import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #FFFFFF;
    width: 100%;
    height: 16vh;
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    position: absolute;
    left: 40%;
    height: 12vh;
`

export const ButtonPokedex = styled.button`
    position: absolute;
    left: 83%;
    height: 7vh;
    width: 14vw;
    background-color: #33A4F5;
    color: #ffffff;
    border: none;
    /* border: 1px solid #000000; */
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    padding: 4px 10px 4px 10px;
    box-shadow: 0px 4px 4px 0px #00000040;
`
export const ButtonAddPokedex = styled(ButtonPokedex)`
    height: 6vh;
    width: 13vw;
    font-size: 0.8rem;
    font-weight: 400;
    box-shadow: none;
`

export const ButtonRemovePokedex = styled(ButtonAddPokedex)`
    background-color: #FF6262;
`

export const ButtonHome = styled.button`
    position: absolute;
    left: 3%;
    color: #000000;
    background-color: white;
    border: none;
    font-size: 1rem;
    font-weight:700;
    text-decoration: underline;

    span{
        display: flex;
        align-items: center;
    }
`