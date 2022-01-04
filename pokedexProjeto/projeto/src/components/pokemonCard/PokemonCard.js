import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonDetails } from "../../routes/Cordinator";
import { ButtonContainer, PokemonContainer, PokemonImage } from "./styled";


const PokemonCard = ({pokemon, isPokedex}) => {

    const history = useHistory()
    const { pokemonInfos, setPokemonInfos, pokedex, setPokedex} = useContext(GlobalStateContext)


    const addToPokedex = () => {
        const pokeIndex = pokemonInfos.findIndex((item) => {
            return item.name === pokemon.name
        })
        const newPokemonsList = [...pokemonInfos]
        newPokemonsList.splice(pokeIndex, 1)
        const orderedListPokemons = newPokemonsList.sort((a,b) => {
            return a.id - b.id
        })
        
        const newPokedexList = [...pokedex, pokemon]
        const orderedListPokedex = newPokedexList.sort((a,b) => {
            return a.id - b.id
        })

        setPokedex(orderedListPokedex)
        setPokemonInfos(orderedListPokemons)
    }

    const removeToPokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => {
            return item.name === pokemon.name
        })

        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)
        const orderedListPokedex = newPokedexList.sort((a,b) => {
            return a.id - b.id
        })

        const newPokemonsList = [...pokemonInfos, pokemon]
        const orderedListPokemons = newPokemonsList.sort((a,b) => {
            return a.id - b.id
        })

        setPokedex(newPokedexList)
        setPokemonInfos(newPokemonsList)
    }

  return (
    <PokemonContainer>
        <PokemonImage src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>

        <ButtonContainer>    
            <Button variant="contained" color="secondary" onClick={isPokedex ? removeToPokedex : addToPokedex }> {isPokedex ? "Remover da pokedex" : "Adicionar a pokedex"} </Button>

            <Button variant="outlined" color="primary" onClick={() => goToPokemonDetails(history, pokemon.name)}>Ver detalhes</Button>
        </ButtonContainer>
    </PokemonContainer>
  );
}

export default PokemonCard;