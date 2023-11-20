import React from "react";
//titulo, imagem, tipoTransporte, hospedagem,precoTotal, desconto

export default function Card(props) {
  return (
    <div className="card basic">
      <div className="price-section">
        <div className="price-area simples">
          <div className="inner-area simples">
            <img className="img-fluid rounded object-fit-fill" src={`http://localhost:3000/img/${props.imagem}`} alt={`imagem representativa de ${props.imagem}`} />
          </div>
        </div>
      </div>
      <h6 className="text-center mt-1">
        {props.titulo}
      </h6>
      <div className="features">
        <ul>
          <li>
            <span className="list-name">passagem {props.tipoTransporte}</span>
            <span className="icon check">
              <i className="bi bi-check text-success" />
            </span>
          </li>
          <li>
            <span className="list-name">bagagem 30k</span>
            <span className="icon check">
              
              <i className="bi bi-check text-success" />
            </span>
          </li>
          <li>
            <span className="list-name">{props.hospedagem? "hospedagem" : "não inclui hospegadem"}</span>
            <span className="icon check">
              <i className="bi bi-x text-danger" />
            </span>
          </li>
          <li>
            <span className="list-name">
              <span className="text-danger">R$ </span>{props.precoTotal} - {props.desconto}% </span>
            <span className="icon check">
              <i className="bi bi-patch-exclamation-fill text-primary" />
            </span>
          </li>
          <li>
            <span className="list-name">
              <span className="text-success">R$</span>
              {props.precoTotal - (props.precoTotal*(props.desconto/100))}
            </span>
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
