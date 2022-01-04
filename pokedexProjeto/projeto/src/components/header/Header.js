import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { goToPokedex } from "../../routes/Cordinator";
import { HeaderContainer, HeaderText } from "./styled";

const Header = ({title, button, buttonPokedex}) => {

    const history = useHistory()

    const buttonText = () => {
        switch (title) {
            case "Lista de Pokemons":
                return "Ir para a pokedex"
            case "Pokedex":
                return "ir para a home"
            default:
                return "Voltar"
        }
    }

  return (
    <HeaderContainer>

        <Button variant="outlined" onClick={button}>{buttonText()}</Button>

        <HeaderText>
        <h1>{title}</h1>
        </HeaderText>

        {buttonPokedex &&
        <Button variant="outlined" onClick={()=> goToPokedex(history)}>Ir para a pokedex</Button>
        }
    
    </HeaderContainer>
  );
}

export default Header;