import { Header } from "../../components/Header";
import { Summay } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHeighLight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summay />
            <TransactionContainer>

            <SearchForm/>

                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHeighLight variant="income">
                                R$ 12.000,00
                                </PriceHeighLight>
                            </td>
                            <td>Venda</td>
                            <td>02/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburger</td>
                            <td>
                            <PriceHeighLight variant="outcome">
                                - R$ 59,00
                            </PriceHeighLight>
                            </td>
                            <td>Venda</td>
                            <td>02/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )

}