import *  as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";

import logoimg from "../../assets/logo.svg"
import { NewTransactionModal } from "../NewtransactionModal";



export function Header() {
    return (
        <header>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoimg} alt="" />

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewTransationButton> Nova Transação</NewTransationButton>
                        </Dialog.Trigger>
                        <NewTransactionModal />
                        
                    </Dialog.Root>
                    
                </HeaderContent>
            </HeaderContainer>
        </header>
    )
}