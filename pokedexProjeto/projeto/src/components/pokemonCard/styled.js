import styled from "styled-components";

export const PokemonContainer = styled.div`
    border: 1px solid black;
    width: 20vw;
    height: 25vh;
    position: relative;
    margin: auto;

    :hover {
        background-color: aliceblue;
    }
    
    `

export const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: auto;
    justify-content: center;
    
`

export const PokemonImage = styled.img`
    display: flex;
    width: 40%;
    justify-content: center;
    margin: auto;
    margin-top: 5%;
`