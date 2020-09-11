import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Head from "../components/Head";

import "./Produto.css";

function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();

        setProduto(data);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (!produto) return null;
  return (
    <section className="produto animeLeft">
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Esse é o produto: ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className="preco">R$ {produto.preco}</span>
        <p className="descricao">{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;
