import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/cordinator";
import { HeaderStyle, Logo, ButtonPokedex, ButtonHome } from "./styled";
import { logoPokedex } from '../../assets/images'
import { Icon } from '@iconify/react';


export default function Header(props) {

    const { pokeDetail, removeFromPokedex, addInPokedex, pokedex } = props


    const location = useLocation();
    const navigate = useNavigate();

    const filteredPokedex = pokedex?.filter((poke) => poke.name.includes(pokeDetail.name))

    {
        switch (location.pathname) {
            case "/":
                return (
                    <HeaderStyle>
                        <Logo src={logoPokedex}/>
                        <ButtonPokedex onClick={() => goToPokedex(navigate)}>
                            Pokedex
                        </ButtonPokedex>
                    </HeaderStyle>
                );
            case "/pokedex":
                return (
                    <HeaderStyle>
                        <ButtonHome onClick={() => goToHome(navigate)}>
                            <span><Icon icon="eva:arrow-ios-back-outline" /> Todos Pokemons</span>
                        </ButtonHome>
                        <Logo src={logoPokedex} />
                    </HeaderStyle>
                );
            case `/detalhes/${pokeDetail?.name}`:
                return (
                    <HeaderStyle>
                        <ButtonHome onClick={() => goToHome(navigate)}>
                            <span><Icon icon="eva:arrow-ios-back-outline" /> Todos Pokemons</span>
                        </ButtonHome>
                        <Logo src={logoPokedex} />
                        {filteredPokedex?.length !== 0 ?
                            <ButtonPokedex onClick={() => removeFromPokedex(pokeDetail)}>
                                Remover pokemon
                            </ButtonPokedex>
                            : <ButtonPokedex onClick={() => addInPokedex(pokeDetail)}>
                                Adicionar pokemon
                            </ButtonPokedex>
                        }
                    </HeaderStyle>
                );
            default:
                return (
                    <HeaderStyle>
                        <button onClick={() => goToHome(navigate)}>
                            Voltar para página inicial
                        </button>
                        <span>Página inexistente</span>
                    </HeaderStyle>
                );
        }
    };
}