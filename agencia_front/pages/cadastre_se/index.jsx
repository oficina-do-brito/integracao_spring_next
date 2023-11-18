export default function Cadastrarse() {
  return (
    <main className="d-flex flex-column">
      <h1 className="h1-centralizado fs-1 fw-lighter mt-sm-2">
        Realizar cadastro
      </h1>
      <section className="w-100 h-auto s1">
        {/* TODO: Form */}
        <form
          className="w-75 mx-auto h-auto"
          action="AdminServlet"
          method="POST"
        >
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
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              email@gmail.com
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
              name="email"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              password
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              name="password"
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
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="hidden"
              className="form-control"
              placeholder="www.imagem/user/id"
              aria-label="email"
              aria-describedby="basic-addon1"
              name="tipoUsuario"
              defaultValue={1}
            />
          </div>
          <div className="form-group mb-3" />
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Enviar
            </button>
          </div>
        </form>
        {/* TODO: Form */}
      </section>
    </main>
  );
}
