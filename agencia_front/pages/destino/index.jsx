export default function Destino() {
  return (
    <main className="d-flex flex-column">
      <h1 className="h1-centralizado fw-light mt-sm-5">Destino x</h1>
      <div className="w-100 h-auto s1">
        <div className="container-fluid row">
          {/* TODO: barra esquerda  */}
          <div className="col-sm-12 col-md-2 h-auto">
            <ul className="nav flex-column">
              <form className="row g-3">
                <div className="col-auto">
                  <label htmlFor="inputSearch" className="visually-hidden">
                    Buscar Destino
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputSearch"
                    placeholder="... pesquisar destino"
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-outline-primary rounded-pill mb-3"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </ul>
          </div>
          {/* TODO: barra central  */}
          <div className="col-sm-12 col-md-6 col-lg-7 col-xl-8 h-auto">
            <img className="img-fluid" src={"http://localhost:3000/img/noronha.jpg"} alt="" />
            <p className="mt-2">
              Fernando de Noronha é um arquipélago brasileiro do estado de
              Pernambuco. Formado por 21 ilhas, ilhotas e rochedos de origem
              vulcânica, ocupa uma área total de 26 km² — dos quais 17 km² são
              da ilha principal — e se situa no Oceano Atlântico a nordeste do
              Brasil continental, distando 545 km da capital pernambucana,
              Recife. O centro comercial da ilha é o núcleo urbano de Vila dos
              Remédios. A administração do Parque Nacional está atualmente a
              cargo do Instituto Chico Mendes de Conservação da Biodiversidade
              (ICMBio). Avistada pela primeira vez entre 1500 e 1502, tem sua
              descoberta atribuída a uma expedição comandada pelo explorador
              Fernão de Loronha, embora haja controvérsias; porém é certo que o
              primeiro a descrevê-la foi Américo Vespúcio, em expedição
              realizada entre 1503 e 1504. Primeira capitania hereditária do
              Brasil, o arquipélago sofreu constantes invasões de ingleses,
              franceses e holandeses entre os séculos XVI e XVIII. Em 24 de
              setembro de 1700, Fernando de Noronha tornou-se, por carta régia,
              dependência de Pernambuco, capitania com a qual já tinha uma
              ligação histórica. Em 1736, a ilha foi invadida pela Companhia
              Francesa das Índias Orientais, passando-se a chamar Isle Dauphine,
              porém, no ano seguinte, uma expedição enviada pelo Recife expulsou
              os franceses. Em 1942, com a Segunda Guerra Mundial, o arquipélago
              tornou-se território federal, cuja sigla era FN, passando a servir
              como base avançada de guerra; mas voltou à a dministração
              pernambucana quatro décadas e meia depois, no ano de 1988.
              Atualmente Fernando de Noronha constitui um distrito estadual de
              Pernambuco, e é gerida por um administrador-geral designado pelo
              governo do estado. Após uma campanha liderada pelo ambientalista
              José Truda Palazzo Júnior, em 14 de outubro de 1988 a maior parte
              do arquipélago foi declarada Parque Nacional, com cerca de 11 270
              ha, para a proteção das espécies endêmicas lá existentes e da área
              de concentração dos golfinhos rotadores (Stenella longirostris),
              que se reúnem diariamente na Baía dos Golfinhos — o lugar de
              observação mais regular da espécie em todo o planeta. No ano de
              2001 a UNESCO declarou Fernando de Noronha Patrimônio Natural da
              Humanidade. A fauna é tão rica que pesquisadores continuam
              descobrindo novas espécies endêmicas de peixes na região — em
              2020, uma expedição descobriu quatro novas espécies de peixes
              ainda não descritas pela ciência.
            </p>
          </div>
          {/* TODO: barra direita  */}
          <div className="col-sm-12 col-md-2 h-auto">
            <h5>Hoteis</h5>
            <div className="card m-auto" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="http://localhost:3000/img/hoteis/hotel1.jpg"
                alt="..."
              />
              <div className="card-body">
                <h6>hotel xxx</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulkof the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  veja
                </a>
              </div>
            </div>
            <div className="card  m-auto" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="http://localhost:3000/img/hoteis/hotel2.jpg"
                alt="..."
              />
              <div className="card-body">
                <h6>hotel xxx</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulkof the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  veja
                </a>
              </div>
            </div>
            <div className="card  m-auto" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="http://localhost:3000/img/hoteis/hotel3.jpg"
                alt="..."
              />
              <div className="card-body">
                <h6>hotel xxx</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulkof the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  veja
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 h-auto s2">
        <h5 className="h1-centralizado mt-sm-5">Pontos turisticos</h5>
        <div className="d-flex gap-3 justify-content-center flex-wrap mb-2">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://picsum.photos/200/100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6>Nome do Ponto</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulkof the card's content.
              </p>
              <a href="#" className="btn btn-outline-primary">
                veja
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://picsum.photos/200/100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6>Nome do Ponto</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulkof the card's content.
              </p>
              <a href="#" className="btn btn-outline-primary">
                veja
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://picsum.photos/200/100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6>Nome do Ponto</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulkof the card's content.
              </p>
              <a href="#" className="btn btn-outline-primary">
                veja
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: Figure com Depoimentos dos clientes  */}
      <div className="row w-100 h-auto p-5 bg-container-figure">
        <figure className="flex-column align-items-center col-sm-12 col-md-4">
          <blockquote className="blockquote ">
            <p>É sempre um prazer viajar com vocês.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Brazil, <cite title="Source Title">Ricardo E.</cite>
          </figcaption>
        </figure>
        <figure className="flex-column align-items-center col-sm-12 col-md-4">
          <blockquote className="blockquote">
            <p>
              Viajo sempre que posso, recomendo essa agência possui otimo
              atendimento e nunca me deixou na mão..
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Brazil, <cite title="Source Title">Mariana L.</cite>
          </figcaption>
        </figure>
        <figure className="flex-column align-items-center col-sm-12 col-md-4">
          <blockquote className="blockquote">
            <p>
              A agencia muito boa, possui preços razoavelmente bons para os
              serviços que eles oferecem.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            California, <cite title="Source Title">John Twarte</cite>
          </figcaption>
        </figure>
      </div>
    </main>
  );
}
