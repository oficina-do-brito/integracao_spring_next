import styles from "@/styles/Clientes.module.css";
import Link from "next/link";

export default function Manage() {
  return (
      <main>
        <div className={"container-fluid p-0 m-0 h-auto"}>
          <div className={"row p-0 m-0 h-auto"}>
            <div className={`col-sm-12 col-md-3 col-2 p-0  h-auto ${styles.sidebarNav}`} >
              <div className={`${styles.sidebar}`}>
                <ul>
                  <li className={`${styles.logo}`}>
                    <Link href={"#"}>
                      <span className={`${styles.icon}`}>
                        <i className={"bi bi-clipboard-data"} />
                      </span>
                      <span className={`${styles.text}`}>Manage</span>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link href={"#"}>
                      
                      <span className={`${styles.icon}`}>
                        <i className={"bi bi-house"} />
                      </span>
                      <span className={`${styles.text}`}>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      
                      <span className={`${styles.icon}`}>
                        <i className={"bi bi-person"} />
                      </span>
                      <span className={`${styles.text}`}>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/manage"}>
                      
                      <span className={`${styles.icon}`}>
                        <i className={"bi bi-box-seam"} />
                      </span>
                      <span className={`${styles.text}`}>Pacotes</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`#`}>
                      
                      <span className={`${styles.icon}`}>
                        <i className={`bi bi-chat-dots`} />
                      </span>
                      <span className={`${styles.text}`}>Inbox</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`#`}>
                      
                      <span className={`${styles.icon}`}>
                        <i className={`bi bi-bar-chart-fill`} />
                      </span>
                      <span className={`${styles.text}`}>Analise</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`#`}>
                      
                      <span className={`${styles.icon}`}>
                        <i className={`bi bi-airplane-engines`} />
                      </span>
                      <span className={`${styles.text}`}>Companhias</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`#`}>
                      
                      <span className={`${styles.icon}`}>
                        <i className={`bi bi-gear`} />
                      </span>
                      <span className={`${styles.text}`}>Settings</span>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <div className={`${styles.bottom}`}>
                    <li id={`${styles.nohover}`}>
                      <Link href={`#`}>
                        
                        <span className={`${styles.icon}`}>
                          <div className={`${styles.avatar}`}>
                            <img src="https://picsum.photos/200" alt="" />
                          </div>
                        </span>
                        <span className={`${styles.text}`}>Usuario x</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/home"}>
                        
                        <span className={`${styles.icon}`}>
                          <i className={`bi bi-box-arrow-right`} />
                        </span>
                        <span className={`${styles.text}`}>Logout</span>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className={`col-sm-12 col-md-9 col-10 p-0 h-auto`}>
              <div className={`d-flex flex-column p-0`}>
                <h2 className={`h2-destaque text-center`}>Clientes</h2>
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
