import { Component } from "react";

export default class GestaoProduto extends Component {
    render() {
        return (
            <>
                <table className="gestaoTabela">
                    <tbody>
                        <tr>
                            <th>Código do produto</th>
                            <th>Nome do produto</th>
                            <th>Estoque</th>
                            <th>Vendidos</th>
                            <th>Preço</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>Feijão</td>
                            <td>43</td>
                            <td>9</td>
                            <td>R$13,95</td>
                            <td className="btnGerenciar">
                                <button className="material-symbols-outlined addItem">add</button>
                                <button className="material-symbols-outlined delete">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Suco</td>
                            <td>50</td>
                            <td>9</td>
                            <td>R$0,99</td>
                            <td className="btnGerenciar">
                                <button className="material-symbols-outlined addItem">add</button>
                                <button className="material-symbols-outlined delete">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>103</td>
                            <td>Alguma outra coisa</td>
                            <td>70</td>
                            <td>9</td>
                            <td>R$22,06</td>
                            <td className="btnGerenciar">
                                <button className="material-symbols-outlined addItem">add</button>
                                <button className="material-symbols-outlined delete">delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}