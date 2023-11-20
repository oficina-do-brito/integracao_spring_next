import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Navbar() {
  const [state, setState] = useState({});






  const handleChangeEmail = (evento) => {
    setState({ email: evento.target.value, password: "" });
  };
  const handleChangePassoword = (evento) => {
    setState({ email: state.email, password: evento.target.value });
  };
  const handleSubmitLogin = async (e) => {
    console.log(state);
    const url = "http://localhost:8080/auth/login";
    e.preventDefault();
    await axios
      .post(url, { email: state.email, password: state.password })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const handleClickFormVisible = () => {
    var div = document.querySelector(".form-flutuante");
    div.classList.add("visible");
  };
  const handleClickFormNotVisible = () => {
    var div = document.querySelector(".form-flutuante");
    div.classList.remove("visible");
  };




  return (
    <nav className="nav navbar w-100 sticky-md-top navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href={"/"}>
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
              <Link className="nav-link active" aria-current="page" href={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/destino"}>
                Destinos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Promoções
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={"/contato"}>
                Contatos
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill mx-md-5"
            onClick={handleClickFormVisible}
          >
            Login
          </button>

          <form className="container bg-light form-flutuante">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                onChange={handleChangeEmail}
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
                onChange={handleChangePassoword}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <Link className=".text-primary" href={"/"}>
              Cadastre-se
            </Link>
            <div className="container d-flex">
              <Link className="nav-link" href={"/manage"}>
                <button
                  btype="submit"
                  className="btn btn-outline-primary rounded-pill mx-md-5"
                  onClick={handleSubmitLogin}
                >
                  Entrar
                </button>
              </Link>
              <Link className="nav-link" href={""}>
                <button
                  type="button"
                  className="btn btn-outline-danger rounded-pill mx-md-5"
                  onClick={handleClickFormNotVisible}
                >
                  Fechar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
