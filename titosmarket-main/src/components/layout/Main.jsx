import { Route, Routes } from "react-router-dom";

import FrenteCaixa from "../pages/FrenteCaixa";
import GestaoProduto from "../pages/GestaoProdutos";
import PageError from "../pages/PageError";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<FrenteCaixa />} />
                <Route path="/gestao-produtos" element={<GestaoProduto />} />
                <Route path="/*" element={<PageError />} />

            </Routes>            
        </main>
    )
}