import Card from "@/components/Card";
import { useContext,useEffect } from "react";
import {ContextCard } from '@/context/useCards';
import Depoimento from "@/components/Depoimento";

export default function Home() {
  
  const contexto = useContext(ContextCard);

  const handleAddItem = ()=>{
    const card4 = {titulo: "Titulo# 4",preco: 0, descricao:"Descrição do Titulo #04"};
    contexto.setState(card4);
    console.log("chamando adicionar");
    console.log(contexto.state);
  }

  // useEffect(()=>{
  // },state);

  return (
    <main className="d-flex flex-column">
      <button onClick={handleAddItem}>add</button>
      <h1 className="h1-centralizado fs-1 fw-lighter mt-sm-5">
        Viagens nacionais e internacionais
      </h1>
      <section className="w-100 h-auto s1">
        <div className="content m-auto">
          <h2 className="fw-light">
            Viagens Nacionais{" "}
            <span className="h2-destaque fw-bold">com 20% de desconto</span>
          </h2>
          <div className="w-100 h-auto d-flex container-card">
            <Card titulo="Fernado de Noronha" />
            <div className="card premium">
              <div className="rib">
                <div className="ribbon">
                  <span>Recomendado</span>
                </div>
              </div>
              <div className="price-section">
                <div className="price-area grayy">
                  <div className="inner-area grayy">
                    <img
                      className="img-fluid rounded object-fit-fill"
                      src="http://localhost:3000/img/nacionais/arena_corinthians_sp.jpg"
                      alt="Arena corinthians, SP"
                    />
                  </div>
                </div>
              </div>
              <h6 className="text-center mt-1">A.Corinthians, SP</h6>
              <div className="features">
                <ul>
                  <li>
                    <span className="list-name">passagem aérea</span>{" "}
                    <span className="icon check">
                      {" "}
                      <i className="bi bi-check text-success" />
                    </span>
                  </li>
                  <li>
                    <span className="list-name">acompanhante</span>{" "}
                    <span className="icon check">
                      {" "}
                      <i className="bi bi-check text-success" />
                    </span>
                  </li>
                  <li>
                    <span className="list-name">Seguro viagem</span>{" "}
                    <span className="icon check">
                      <i className="bi bi-x text-danger" />
                    </span>
                  </li>
                  <li>
                    <span className="list-name">
                      <span className="text-danger">R$ </span>1.318,00 -20%
                    </span>{" "}
                    <span className="icon check">
                      <i className="bi bi-patch-exclamation-fill text-primary" />
                    </span>
                  </li>
                  <li>
                    <span className="list-name">
                      <span className="text-success">R$ </span>1055,00
                    </span>
                    <span className="icon check">
                      <i className="bi bi-cash-coin text-success" />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="btn">
                <button className="grayy">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 h-auto s2">
        <div className="content m-auto">
          <h2 className="fw-light">
            Viagens Internacional{" "}
            <span className="h2-destaque fw-bold">em até 12 vezes</span>.
          </h2>
          <div className="w-100 h-auto d-flex container-card">
            {/* <p:foreach items="${pacotes}" var="pacote">
                <p:if test="${pacote.valorDesconto == 20}"> */}
            <div className="card basic">
              <div className="price-section">
                <div className="price-area simples">
                  <div className="inner-area simples">
                    <img
                      className="img-fluid rounded object-fit-fill"
                      src="http://localhost:3000/img/noronha.jpg"
                      alt="noronha"
                    />
                  </div>
                </div>
              </div>
              <h6 className="text-center mt-1">
                ${"{"}pacote.titulo{"}"}
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
                      pacote.precoTotal -
                      (pacote.precoTotal*(pacote.valorDesconto/100)){"}"}
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
            {/* </p:if>
              </p:foreach> */}
            <div className="card premium">
              <div className="rib">
                <div className="ribbon">
                  <span>Recomendado</span>
                </div>
              </div>
              <div className="price-section">
                <div className="price-area grayy">
                  <div className="inner-area grayy">
                    <img
                      className="img-fluid rounded object-fit-fill"
                      src="http://localhost:3000/img/inter/maldives.jpg"
                      alt="iamgem das ilhas maldivas"
                    />
                  </div>
                </div>
              </div>
              <h6 className="text-center mt-1">Maldivas</h6>
              <div className="features">
                <ul>
                  <li>
                    <span className="list-name">passagem aérea</span>{" "}
                    <span className="icon check">
                      {" "}
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
                      <span className="text-danger">R$ </span>1.618,00
                    </span>
                    <span className="icon check">
                      <i className="bi bi-patch-exclamation-fill text-primary" />
                    </span>
                  </li>
                  <li>
                    <span className="list-name">
                      <span className="text-success">R$ </span>12 x 134,80
                    </span>{" "}
                    <span className="icon check">
                      <i className="bi bi-credit-card text-success" />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="btn">
                <button className="grayy">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 h-auto s1">
        <div className="content m-auto">
          <h2 className="fw-light">
            Pacotes completos{" "}
            <span className="h2-destaque fw-bold">aéreo + hotel</span>
          </h2>
          <div className="w-100 h-auto d-flex container-card">
            <div className="card basic">
              <div className="price-section">
                <div className="price-area simples">
                  <div className="inner-area simples">
                    <img
                      className="img-fluid rounded object-fit-fill"
                      src="http://localhost:3000/img/noronha.jpg"
                      alt="noronha"
                    />
                  </div>
                </div>
              </div>
              <h6 className="text-center mt-1">
                ${"{"}pacote.titulo{"}"}
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
                      pacote.precoTotal -
                      (pacote.precoTotal*(pacote.valorDesconto/100)){"}"}
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
            

            <div className="card premium">
              <div className="rib">
                <div className="ribbon">
                  <span>Recomendado</span>
                </div>
              </div>
              <div className="price-section">
                <div className="price-area grayy">
                  <div className="inner-area grayy">
                    <img
                      className="img-fluid rounded object-fit-fill"
                      src="https://picsum.photos/200/300"
                      alt="imagem das ilhas maldivas"
                    />
                  </div>
                </div>
              </div>
              <h6 className="text-center mt-1">Fernando de Noronha</h6>
              <div className="features">
                <ul>
                  <li>
                    <span className="list-name">passagem aérea</span>{" "}
                    <span className="icon check">
                      {" "}
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
                      <span className="text-danger">R$ </span>4000,00
                    </span>
                    <span className="icon check">
                      <i className="bi bi-patch-exclamation-fill text-primary" />
                    </span>
                  </li>
                  <li>
                    <span className="list-name">
                      <span className="text-success">R$ </span>3800,00
                    </span>
                    <span className="icon check">
                      <i className="bi bi-cash-coin text-success" />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="btn">
                <button className="grayy">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 h-auto s2" id="promocoes">
        <h2 className="h1-centralizado mt-sm-5 text-danger">Promoções</h2>
        <div className="content m-auto">
          <h2 className="fw-light text-danger">
            Principais pacotes em promoção,{" "}
            <span className="h2-destaque fw-bold">até 40% de desconto</span>
          </h2>
          <div className="w-100 h-auto d-flex container-card">
            

            <div className="card basic">
              <div className="price-section">
                <div className="price-area simples">
                  <div className="inner-area simples">
                    <img
                      className="img-fluid rounded object-fit-fill"
                      src="http://localhost:3000/img/noronha.jpg"
                      alt="noronha"
                    />
                  </div>
                </div>
              </div>
              <h6 className="text-center mt-1">
                ${"{"}pacote.titulo{"}"}
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
                      pacote.precoTotal -
                      (pacote.precoTotal*(pacote.valorDesconto/100)){"}"}
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
            
          </div>
        </div>
      </section>
      <Depoimento />
    </main>
  );
}
