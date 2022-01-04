import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container, DetailsContainer, ImagePokemonBack, ImagePokemonFront, ImgContainer, InfosContainer, MovesContainer, TypeContainer } from "./styled";

const PokemonDetailsPage = () => {
    const [selectedPokemon, setSelectedPokemon] = useState({})
    const { pokemonInfos } = useContext(GlobalStateContext)
    const history = useHistory()
    const {name} = useParams()

    console.log(selectedPokemon)

    useEffect(() => {
        const pokemon = pokemonInfos.find((pokemon) => {
            return pokemon.name === name
        })
        setSelectedPokemon(pokemon)
    }, [])

    return ( <div>
            <Header title={"Detalhes"} button={() => history.goBack()} buttonPokedex/>
        <DetailsContainer>
            {selectedPokemon && selectedPokemon.sprites &&
                <ImgContainer>
                    <ImagePokemonFront src={selectedPokemon.sprites.other.dream_world.front_default} />
                    <ImagePokemonBack src={selectedPokemon.sprites.back_default} />
                </ImgContainer>
            }
            <InfosContainer>
                {selectedPokemon && selectedPokemon.stats &&
                    selectedPokemon.stats.map((item) => {
                        return <p key={item.stat.name}>
                            <strong>{item.stat.name}:</strong> {item.base_stat}
                        </p>
                    })
                }
            </InfosContainer>

            <Container>
                <TypeContainer>
                    {selectedPokemon && selectedPokemon.types &&
                        selectedPokemon.types.map((item) => {
                            return <p key={item.type.name}>
                                <strong>{item.type.name} </strong>
                            </p>
                        })
                    }
                </TypeContainer>
                <MovesContainer>
                {selectedPokemon && selectedPokemon.moves &&
                    selectedPokemon.moves.map((item, index) => {
                        return (
                            index < 10 && <p key={item.move.name}> {item.move.name} </p>
                    )
                    })}
                </MovesContainer>
            </Container>
        </DetailsContainer>
        </div>
    );

}

export default PokemonDetailsPage;