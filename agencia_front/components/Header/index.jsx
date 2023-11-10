export default function Header() {
  return (
    <header className="container-fluid w-100 h320">
      {/* <header> */}
      <div className="carousel slide" data-bs-ride="carousel" id="crs">
        {/* indicadores */}
        <div className="carousel-indicators">
          <button
            className="active"
            data-bs-target="#crs"
            data-bs-slide-to={0}
          />
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
  );
}
