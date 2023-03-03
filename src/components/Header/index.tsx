import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
import logoimg from "../../assets/logo.svg"
export function Header() {
    return(
        <header>
           <HeaderContainer>
            <HeaderContent>
                <img src={logoimg} alt="" />

              <NewTransationButton> Nova Transação</NewTransationButton>  
              
            </HeaderContent>
           </HeaderContainer>
        </header>
    )
}