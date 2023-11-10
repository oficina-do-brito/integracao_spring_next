import carsStyle from '@/styles/Card.module.css';

export default function Home() {
  return (
    <div>
      {/* TODO: navbar stick  */}
      <div className="nav navbar w-100 sticky-md-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="HomeServlet">
            <img src="http://localhost:3000/img/logo.png" alt="logo da agencia"
              width={50}
              height={50}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="HomeServlet"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="DestinoServlet">
                  Destinos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="HomeServlet#promocoes">
                  Promoções
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="ContatoServlet">
                  Contatos
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill mx-md-5"
              onclick="clickFormVisible()"
            >
              Login
            </button>
            <form
              className="container bg-light form-flutuante"
              action="LoginServlet"
              method="POST"
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating ">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <a className=".text-primary" href="AdminServlet">
                Cadastre-se
              </a>
              <div className="container d-flex">
                <a className="nav-link" href="LoginServlet">
                  <button
                    type="submit"
                    className="btn btn-outline-primary rounded-pill mx-md-5"
                  >
                    Entrar
                  </button>
                </a>
                <a className="nav-link">
                  <button
                    type="button"
                    className="btn btn-outline-danger rounded-pill mx-md-5"
                    onclick="clickFormNotVisible()"
                  >
                    Fechar
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* TODO: header com carousel */}
      <header className="container-fluid w-100 h320">
        {/* <header> */}
        <div className="carousel slide" data-bs-ride="carousel" id="crs">
          {/* indicadores */}
          <div className="carousel-indicators">
            <button className="active" data-bs-target="#crs" data-bs-slide-to={0} />
            <button data-bs-target="#crs" data-bs-slide-to={1} />
            <button data-bs-target="#crs" data-bs-slide-to={2} />
          </div>
          {/* carousel inner contendo os itens  */}
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={3000}>
              <img
                className="d-block w-100 imagens-carousel "
                src="http://localhost:3000/img/journey.png"
                alt="imagem planos para viagens"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fs-1 fw-bold">Retire seus planos do papel</h5>
                <p className="fs-6">
                  Planeje sua viagem contando com os melhores preços do mercado
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                className="d-block w-100 imagens-carousel"
                src="http://localhost:3000/img/sunset.jpg"
                alt="praia"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fs-1 fw-bold">Locais com eventos</h5>
                <p className="fs-6">
                  Confira os eventos com previsão de acontecimento em tempo real
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                className="d-block w-100 imagens-carousel"
                src="http://localhost:3000/img/peoples.jpg"
                alt="viagem com acompanhante"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fs-1 fw-bold">
                  Pacotes adequados para viajar por todo Brasil
                </h5>
                <p className="fs-6">
                  Combos para te proporcianar a sua viagem dos sonhos
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="carousel-control-prev"
              data-bs-target="#crs"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              data-bs-target="#crs"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>
      </header>
      {/* TODO: Main  */}
      <main className="d-flex flex-column">
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
              {/* <p:foreach items="${pacotes}" var="pacote">
                <p:if test="${pacote.valorDesconto == 20}"> */}
                  <div className={`${carsStyle.card} ${carsStyle.basic}`} >
                    <div className="price-section">
                      <div className="price-area simples">
                        <div className="inner-area simples">
                          <img
                            className="img-fluid rounded object-fit-fill"
                            src="/agenciamvc/assets/img/${pacote.imagem}"
                            alt="${pacote.imagem}"
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
                            src="/agenciamvc/assets/img/${pacote.imagem}"
                            alt="${pacote.imagem}"
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
              {/* <p:foreach items="${pacotes}" var="pacote">
                <p:if test="${pacote.valorDesconto == 20}"> */}
                  <div className="card basic">
                    <div className="price-section">
                      <div className="price-area simples">
                        <div className="inner-area simples">
                          <img
                            className="img-fluid rounded object-fit-fill"
                            src="/agenciamvc/assets/img/${pacote.imagem}"
                            alt="${pacote.imagem}"
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
              {/* <p:foreach items="${pacotes}" var="pacote">
                <p:if test="${pacote.valorDesconto == 40}"> */}
                  <div className="card basic">
                    <div className="price-section">
                      <div className="price-area simples">
                        <div className="inner-area simples">
                          <img
                            className="img-fluid rounded object-fit-fill"
                            src="/agenciamvc/assets/img/${pacote.imagem}"
                            alt="${pacote.imagem}"
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
            </div>
          </div>
        </section>
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
      {/* TODO: Footer */}
      <footer className="h-auto m-0 container-fluid row p-5">
        <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
          <li className="text-light">
            <h5>Sobre a Empresa</h5>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fw-lighter"
              href="#"
              aria-current="page"
            >
              Atendimento ao Cliente
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter" href="#">
              {" "}
              Termos de Uso
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter" href="#">
              Políticas de Privacidade
            </a>
          </li>
        </ul>
        <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
          <li className="text-light">
            <h5>Agencias e Parceiras</h5>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fw-lighter "
              href="#"
              aria-current="page"
            >
              Active link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter " href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter " href="#">
              Disabled link
            </a>
          </li>
        </ul>
        <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
          <li className="text-light text-center">
            <h5>Companhias Aéreas Parceiras</h5>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fw-lighter"
              href="#"
              aria-current="page"
            >
              Nenhuma
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter" href="#">
              Nenhuma
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter" href="#">
              Alguma
            </a>
          </li>
        </ul>
        <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
          <li className="text-light text-center">
            <h5>Entre em contato conosco</h5>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fw-lighter"
              href="ContatoServlet"
              aria-current="page"
            >
              Realizar contato
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter">84 99999999</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-lighter">@email.com</a>
          </li>
        </ul>
      </footer>
</div>
  );
}
