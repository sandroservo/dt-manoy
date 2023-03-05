import *  as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content } from './styles'
export function NewTransactionModal() {
    return (
        
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <Dialog.Title>Nova transação</Dialog.Title>

                    <form action=''>
                        <input type="text" placeholder='descrição' required />
                        <input type="number" placeholder='descrição' required />
                        <input type="text" placeholder='Categoria' required />

                        <button type='submit'>
                            Cadastrar
                        </button>
                    </form>

                    <Dialog.Close />
                </Content>
            </Dialog.Portal>
    )
}
