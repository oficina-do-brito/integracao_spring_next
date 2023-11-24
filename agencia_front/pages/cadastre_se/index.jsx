import { useRouter } from "next/router";
import { useState } from "react";

const jsonModel = {
  nome: "",email: "",password: "",telefone: "",imagem: "",role: "",dataLogin: ""
};

export default function Cadastrarse() {
  const route = useRouter();
  const [newUsuario, setNewUsuario] = useState(jsonModel);

  const hadleSubmitPostNewUsr = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUsuario),
      credentials: "include",
    });
    const data = await response.json().then((data) => data).catch((error) => console.log(error));
    if (response.ok) {
      route.push({ pathname: "/manage" });
    } else {
      route.push({ pathname: "/cadastre_se" });
    }
  };
  const changeIputNome = (e) => {
    setNewUsuario({ ...newUsuario, nome: e.target.value });
  };
  const changeIputEmail = (e) => {
    setNewUsuario({
      ...newUsuario,
      email: e.target.value
    });
  };
  const changeIputPassword = (e) => {
    setNewUsuario({ ...newUsuario, password: e.target.value });
  };
  const changeIputTelefone = (e) => {
    setNewUsuario({ ...newUsuario, telefone: e.target.value });
  };
  const changeIputImagem = (e) => {
    setNewUsuario({ ...newUsuario, imagem: e.target.value });
  };
  const changeIputTipo = (e) => {
    setNewUsuario({ ...newUsuario, role: e.target.value });
  };

  return (
    <main className="d-flex flex-column">
      <h1 className="h1-centralizado fs-1 fw-lighter mt-sm-2">
        Realizar cadastro
      </h1>
      <section className="w-100 h-auto s1">
        <form className="w-75 mx-auto h-auto">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              nome
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="nome"
              aria-label="nome"
              aria-describedby="basic-addon1"
              name="nome"
              onChange={changeIputNome}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              email
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="email@gmail.com"
              aria-label="email"
              aria-describedby="basic-addon1"
              name="email"
              onChange={changeIputEmail}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              senha
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="com caracteres maiusculos, numeros ex: 2/swgdy**C"
              aria-label="password"
              aria-describedby="basic-addon1"
              name="password"
              onChange={changeIputPassword}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              confirm senha
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="com caracteres maiusculos, numeros ex: 2/swgdy**C"
              aria-label="password"
              aria-describedby="basic-addon1"
              name="confirmPassword"
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">telefone</label>
            <input
              type="text"
              className="form-control"
              placeholder={84981818181}
              data-inputmask-mask="[9-]0-999"
              name="telefone"
              onChange={changeIputTelefone}
            />
            <small className="text-muted">e.g "(dd) number"</small>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              url com imagem sua
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="www.imagem/user/id"
              aria-label="email"
              aria-describedby="basic-addon1"
              name="imagem"
              onChange={changeIputImagem}
            />
          </div>

          <div className="input-group mb-3">
            <label className="form-label" for="tipoUsuario">
              Pretende se cadastrar como: &nbsp; &nbsp;{" "}
            </label>
            <select
              className="form-label"
              id="tipoUsuario"
              name="tipo"
              onChange={changeIputTipo}
            >
              <option value="ADMINISTRADOR">Administrador</option>
              <option value="CLIENTE"> Cliente </option>
              <option value="FORNECEDOR">Fornecedor</option>
            </select>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={hadleSubmitPostNewUsr}
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
