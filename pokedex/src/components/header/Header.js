import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/cordinator";

export default function Header() {
    const location = useLocation();

    const navigate = useNavigate();

    {switch (location.pathname) {
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