export default function CadastrarPacote() {
  return (
    <main className="d-flex flex-column">
      <h1 className="h1-centralizado fs-1 fw-lighter mt-sm-5">
        Cadastrar Pacote
      </h1>
      <section className="w-100 h-auto s1">
        {/* TODO: Form */}
        <form
          className="w-75 mx-auto h-auto"
          action="CreatePacoteServlet"
          encType="multipart/form-data"
          method="POST"
        >
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              titulo
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Qualquer titulo referente a viagem"
              aria-label="titulo"
              aria-describedby="basic-addon1"
              name="titulo"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              status
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="status"
              aria-label="status"
              aria-describedby="basic-addon1"
              name="status"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              valor desconto
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="valor numerico, sera convertido em porcentagem"
              aria-label="valorDesconto"
              aria-describedby="basic-addon1"
              name="valorDesconto"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              preco total
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="preco total bruto do pacote"
              aria-label="precoTotal"
              aria-describedby="basic-addon1"
              name="precoTotal"
              max={10000}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              possui hospedagem
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="possui hospedagem? sim ou não"
              aria-label="possuiHospedagem"
              aria-describedby="basic-addon1"
              name="possuiHospedagem"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              meio transporte
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="meio de transporte"
              aria-label="meioTransporte"
              aria-describedby="basic-addon1"
              name="meioTransporte"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              prazo cancelamento
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="prazo para cancelamento"
              aria-label="prazoCancelamento"
              aria-describedby="basic-addon1"
              name="prazoCancelamento"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              data viagem
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="data da viagem"
              aria-label="dataViagem"
              aria-describedby="basic-addon1"
              name="dataViagem"
            />
          </div>
          <div className="form-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Imagem do Pacote
            </span>
            <input
              type="file"
              className="form-control"
              multiple="multiple"
              aria-describedby="basic-addon1"
              name="imagemPacote"
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
