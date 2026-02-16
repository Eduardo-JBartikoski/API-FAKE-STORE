import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Produtos from "./produtos";
import ProdutoDetalhe from "./produtoDetalhe";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#fc1717" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Início</Link>
        <Link to="/produtos">Produtos</Link>
      </nav>

      <Routes>
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
      </Routes>
    </Router>
  );
}

export default App;
