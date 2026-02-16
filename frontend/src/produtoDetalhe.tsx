import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProdutoDetalhe: React.FC = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/produtos/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{produto.title}</h2>
      <img src={produto.image} alt={produto.title} style={{ width: "200px" }} />
      <p>{produto.description}</p>
      <p>Preço: R$ {produto.price}</p>
    </div>
  );
};

export default ProdutoDetalhe;
