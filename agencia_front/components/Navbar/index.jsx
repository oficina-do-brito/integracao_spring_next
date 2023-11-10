export default function Navbar() {
  return (
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
  );
}
