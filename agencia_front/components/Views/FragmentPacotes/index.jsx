import CardView from "@/components/CardView";

export default function FragmentPacotes() {
  return (
    <>
      <div className="d-flex flex-column p-0">
        <h2 className="h2-destaque text-center">Pacotes cadastrados</h2>
        <select
          className="form-select align-self-center w-50 mb-5"
          aria-label="Default select example"
        >
          <option selected="1">Selecione opção de visualização</option>
          <option value={1}>Top viagens</option>
          <option value={2}>Top Internacional</option>
          <option value={3}>Top nacional</option>
        </select>
        <div
          className="container-fluid h-100 my-2 p-0 d-flex align-content-start justify-content-center gap-2 flex-wrap"
          id="clientes"
        >
          <div className="card greencard" style={{ width: "17rem" }}>
            <a href="CreatePacoteServlet" className="card-title text-center p-2 text-success">
              <span className="m-auto p-2 text-primary">
                <i className="bi bi-plus-lg h5" />
              </span>
              <span className="h5 text-primary">Cadastrar</span>
              <span className="m-auto p-2 text-primary">
                <i className="bi bi-plus-lg h5" />
              </span>
            </a>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap my-2">
          <CardView titulo="Fernado de Noronha" imagem="noronha.jpg" precoTotal={1345} desconto={20}/>
        </div>
      </div>
    </>
  );
}
