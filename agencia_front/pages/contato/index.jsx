import Styles from "@/styles/Contatos.module.css";

export default function Contatos() {
  return (
    <>
      <div
        className={`container-fluid d-flex flex-column justify-content-center ${Styles.cBodyContact}`}
      >
        <div
          className={`container-fluid p-0 ${Styles.banner} w-100 d-flex flex-column align-items-start justify-content-center`}
        >
          <h2 className="text-center fs-1 fw-semibold text-light p-5">
            Entre em contato conosco
          </h2>
        </div>
        <div className={`${Styles.explicativos} justify-self-start p-5`}>
          <h3 className="fs-3 text-primary text-opacity-75">
            Motivos para voçê entrar em contato
          </h3>
          <p className="fw-light">
            Pedir melhorar a qualidade nossos serviços prestados
          </p>
          <p className="fw-light">Solicilitar mais serviços</p>
          <p className="fw-light">Retirar duvidas</p>
          <p className="fw-light">Reclamações</p>
        </div>
        {/* TODO: container form  */}
        <div
          className={`container h-auto border rounded position-absolute mb-5 ${Styles.formContato} mb-3`}
        >
          <form className="row g-3 p-5" action="" method="POST">
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
              />
            </div>
            <div className="col-md-12">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Duvidas ou sugestões
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Digite aqui a sua duvida ou sugestão de melhoria..."
                name="sugestao"
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Complemento
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                Cidade
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Estado
              </label>
              <select id="inputState" className="form-select">
                <option selected="">Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Numero
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-outline-primary rounded-pill"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="container w-100 h-100" />
      </div>
    </>
  );
}
