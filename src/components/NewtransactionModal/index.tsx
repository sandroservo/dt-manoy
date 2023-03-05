import *  as Dialog from '@radix-ui/react-dialog'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Overlay, Content, CloseButton, TransactionType, TransactionButton } from './styles'
export function NewTransactionModal() {
    return (

        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>



                <form action=''>
                    <input type="text" placeholder='descrição' required />
                    <input type="number" placeholder='descrição' required />
                    <input type="text" placeholder='Categoria' required />

                    <TransactionType>
                        <TransactionButton variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            ENTRADA
                        </TransactionButton>
                        <TransactionButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24} />
                            SAIDA
                        </TransactionButton>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>


            </Content>
        </Dialog.Portal>
    )
}
