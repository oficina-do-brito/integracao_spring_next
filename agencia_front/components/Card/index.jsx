import React from "react";

export default function Card(props) {
  return (
    <div className="card basic">
      <div className="price-section">
        <div className="price-area simples">
          <div className="inner-area simples">
            <img
              className="img-fluid rounded object-fit-fill"
              src="http://localhost:3000/assets/img/noronha.png"
              alt="imagem de noronha"
            />
          </div>
        </div>
      </div>
      <h6 className="text-center mt-1">
        {props.titulo}
      </h6>
      <div className="features">
        <ul>
          <li>
            <span className="list-name">passagem aérea</span>{" "}
            <span className="icon check">
              <i className="bi bi-check text-success" />
            </span>
          </li>
          <li>
            <span className="list-name">bagagem 30k</span>{" "}
            <span className="icon check">
              {" "}
              <i className="bi bi-check text-success" />
            </span>
          </li>
          <li>
            <span className="list-name">hospedagem</span>{" "}
            <span className="icon check">
              <i className="bi bi-x text-danger" />
            </span>
          </li>
          <li>
            <span className="list-name">
              <span className="text-danger">R$ </span>${"{"}
              pacote.precoTotal{"}"}
              -${"{"}pacote.valorDesconto{"}"}%
            </span>{" "}
            <span className="icon check">
              <i className="bi bi-patch-exclamation-fill text-primary" />
            </span>
          </li>
          <li>
            <span className="list-name">
              <span className="text-success">R$</span>${"{"}
              pacote.precoTotal - (pacote.precoTotal*(pacote.valorDesconto/100))
              {"}"}
            </span>{" "}
            <span className="icon check">
              <i className="bi bi-cash-coin text-success" />
            </span>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button className="simples">Comprar</button>
      </div>
    </div>
  );
}
