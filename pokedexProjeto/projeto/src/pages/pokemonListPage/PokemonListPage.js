import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokedex } from "../../routes/Cordinator";
import { HomeContainer, Pokemons } from "./styled";

const PokemonListPage = () => {

    const {pokemonInfos} = useContext(GlobalStateContext)
    const history = useHistory()

  return (
    <HomeContainer>
        <Header title={"Lista de Pokemons"} button={()=> goToPokedex(history)}/>
        <Pokemons>

        {pokemonInfos.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
        })}
    
        </Pokemons>
    </HomeContainer>
  );
}

export default PokemonListPage;