import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonList } from "../../routes/Cordinator";

const PokedexPage = () => {

    const history = useHistory()
    const {pokedex} = useContext(GlobalStateContext)

  return (
    <div >
        <Header title={"Pokedex"} button={()=> goToPokemonList(history)} />
        
        {pokedex && pokedex.map((pokemon) => {
            return <PokemonCard key={pokemon.name} isPokedex pokemon={pokemon}/>
        })}
    </div>
  );
}

export default PokedexPage;
