import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokedexPage from "../pages/pokedexPage/PokedexPage";
import PokemonDetailsPage from "../pages/pokemonDetailsPage/PokemonDetailsPage";
import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";


const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
                <PokemonListPage/>
            </Route>

            <Route exact path={"/pokemon/:name"}>
                <PokemonDetailsPage/>
            </Route>

            <Route exact path={"/pokedex"}>
                <PokedexPage/>
            </Route>

            <Route>
                <div>Error!! Pagina não encontrada </div>
            </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default Router;