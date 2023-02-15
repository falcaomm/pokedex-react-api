import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/cordinator";

export default function Header(props) {

    const { pokeDetail, removeFromPokedex, addInPokedex, pokedex } = props

    const location = useLocation();
    const navigate = useNavigate();

    const filteredPokedex = pokedex?.filter((poke) => poke.name.includes(pokeDetail.name))

    {
        switch (location.pathname) {
            case "/":
                return (
                    <>
                        <button onClick={() => goToPokedex(navigate)}>
                            Ver pokedex
                        </button>
                        <span>Lista de pokemons</span>
                    </>
                );
            case "/pokedex":
                return (
                    <>
                        <button onClick={() => goToHome(navigate)}>
                            Ver lista de pokemons
                        </button>
                        <span>Pokedex</span>
                    </>
                );
            case `/detalhes/${pokeDetail.name}`:
                return (
                    <>
                        <button onClick={() => goToHome(navigate)}>
                            Ver lista de pokemons
                        </button>
                        <span>pokeDetail</span>
                        {filteredPokedex?.length !== 0 ?
                            <button onClick={() => removeFromPokedex(pokeDetail)}>
                                Remover pokemon
                            </button>
                            : <button onClick={() => addInPokedex(pokeDetail)}>
                                Adicionar pokemon
                            </button>
                        }
                    </>
                );
            default:
                return (
                    <>
                        <button onClick={() => goToHome(navigate)}>
                            Voltar para página inicial
                        </button>
                        <span>Página inexistente</span>
                    </>
                );
        }
    };
}