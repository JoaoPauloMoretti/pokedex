import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

    const [pokemon, setPokemon] = useState([])
    const [pokemonInfos, setPokemonInfos] = useState([])
    const [pokedex, setPokedex] = useState([])

    console.log(pokemonInfos)

    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(() => {

        const newList = []

        pokemon.forEach((item) => {
            axios.get(item.url)
            .then((response) => {
                newList.push(response.data)
    
                if(newList.length === 20){
                    const orderedList = newList.sort((a,b) => {
                        return a.id - b.id
                    })
                    setPokemonInfos(orderedList)
                }
            })
            .catch((error) => {
                console.log(error.message)
            })
        })

    }, [pokemon])

    const getPokemons = () => {
        axios.get(`${BASE_URL}/pokemon`)
        .then((response) => {
            setPokemon(response.data.results)
        })  
        .catch((error) => {
            console.log(error.message)
        })
    }

    const data = { pokemonInfos, setPokemonInfos, pokedex, setPokedex}

  return (
    <GlobalStateContext.Provider value={data}>
        {props.children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;