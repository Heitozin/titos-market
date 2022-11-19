import { Component } from "react";

export default class FrenteCaixa extends Component {
    render() {
        return (
            <>
                <div className="cupom-produto">
                    <div className="cupom-fiscal" id="cupom-fiscal"></div>
                    
                    <div className="imagem-produto">
                        <img src="" alt="" id="produto-img" />
                    </div>
                </div>

                <div className="info-codigo">
                    <input type="text" className="input-codigo" placeholder="Código Produto"/>

                    <h3>Total compra <span id="tota-compra"></span></h3>
                </div>
            </>
        )
    }
}
