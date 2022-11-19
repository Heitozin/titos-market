import { Component } from "react";
import { Link } from "react-router-dom";
import FrenteCaixa from "./FrenteCaixa";


export default class PageError extends Component {
    render(){
        return (
            <div className="bgError">
                <p>❌ | Página não encontrada!</p>
                
                <Link to="/" className="back">Voltar para a página inicial</Link>
            </div>
        )
    }
}