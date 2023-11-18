import Link from "next/link";

export default function Navbar() {
  const clickFormVisible = () => {};
  const clickFormNotVisible = () => {};
  return (
    <div className="nav navbar w-100 sticky-md-top navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href={"/home"}>
          <img
            src="http://localhost:3000/img/logo.png"
            alt="logo da agencia"
            width={50}
            height={50}
          />
        </Link>
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
              <Link className="nav-link active" aria-current="page" href={"/home"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/destino"}>
                Destinos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/homepromocoes"}>
                Promoções
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/contatos"}>
                Contatos
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill mx-md-5"
            onclick="clickFormVisible"
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
            <Link className=".text-primary" href={"/home"}>
              Cadastre-se
            </Link>
            <div className="container d-flex">
              <Link className="nav-link" href={"/manage"}>
                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill mx-md-5"
                >
                  Entrar
                </button>
              </Link>
              <Link className="nav-link" href={""}>
                <button
                  type="button"
                  className="btn btn-outline-danger rounded-pill mx-md-5"
                  onclick="clickFormNotVisible"
                >
                  Fechar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
