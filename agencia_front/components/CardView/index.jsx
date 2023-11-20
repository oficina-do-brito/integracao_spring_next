//titulo, imagem, precoTotal, desconto

export default function CardView(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={`http://localhost:3000/img/${props.imagem}`} width={150} height={500} alt={`${props.imagem}`} />
      <div className="card-body">
        <h5 className="card-title text-center">
          {props.titulo}
        </h5>
        <p className="card-text">
          Valor desconto: {props.desconto} %
        </p>
        <p className="card-text">
          Preço bruto: {props.precoTotal}
        </p>
        <a
          href="UpdatePacoteServlet?id=${pacote.id}"
          className="btn btn-primary"
        >
          Editar
        </a>
        <a
          href="DeletePacoteServlet?id=${pacote.id}"
          className="btn btn-danger"
        >
          Excluir
        </a>
      </div>
    </div>
  );
}
