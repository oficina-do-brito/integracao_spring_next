export default function Footer() {
  return (
    <footer className="h-auto m-0 container-fluid row p-5">
      <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
        <li className="text-light">
          <h5>Sobre a Empresa</h5>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-light fw-lighter"
            href="#"
            aria-current="page"
          >
            Atendimento ao Cliente
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter" href="#">
            {" "}
            Termos de Uso
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter" href="#">
            Políticas de Privacidade
          </a>
        </li>
      </ul>
      <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
        <li className="text-light">
          <h5>Agencias e Parceiras</h5>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-light fw-lighter "
            href="#"
            aria-current="page"
          >
            Active link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter " href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter " href="#">
            Disabled link
          </a>
        </li>
      </ul>
      <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
        <li className="text-light text-center">
          <h5>Companhias Aéreas Parceiras</h5>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-light fw-lighter"
            href="#"
            aria-current="page"
          >
            Nenhuma
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter" href="#">
            Nenhuma
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter" href="#">
            Alguma
          </a>
        </li>
      </ul>
      <ul className="nav flex-column col-sm-12 col-md-3 align-items-center">
        <li className="text-light text-center">
          <h5>Entre em contato conosco</h5>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-light fw-lighter"
            href="ContatoServlet"
            aria-current="page"
          >
            Realizar contato
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter">84 99999999</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-lighter">@email.com</a>
        </li>
      </ul>
    </footer>
  );
}
