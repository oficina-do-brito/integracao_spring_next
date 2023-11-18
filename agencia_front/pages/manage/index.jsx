import Sidebar from "@/components/Sidebar";
import styles from "@/styles/Clientes.module.css";

export default function Manage() {
  return (
      <main>
        <div className={"container-fluid p-0 m-0 h-auto"}>
          <div className={"row p-0 m-0 h-auto"}>

            <Sidebar></Sidebar>

            <div className={`col-sm-12 col-md-9 col-10 p-0 h-auto`}>
              <div className={`d-flex flex-column p-0`}>
                <h2 className={`h2-destaque text-center`}>Pacotes</h2>
                <select
                  className={`form-select align-self-center w-50 mb-5`} aria-label="Default select example" >
                  <option selected="">Selecione opção de visualização</option>
                  <option value={1}>Top viagens</option>
                  <option value={2}>Top Internacional</option>
                  <option value={3}>Top nacional</option>
                </select>
                <div
                  className={`container-fluid h-100 my-2 p-0 d-flex align-content-start justify-content-center gap-2 flex-wrap`}
                  id={`${styles.clientes}`}
                >
                  <div
                    className={`spinner-border visivel`}
                    role="status"
                    id={`${styles.loading}`}
                  >
                    <span className={"visually-hidden"}>Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
