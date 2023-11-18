import styles from "@/styles/Clientes.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div
        className={`col-sm-12 col-md-3 col-2 p-0  h-auto my-4  ${styles.sidebarNav}`}
      >
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
                <Link href={"/"}>
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
    </>
  );
}
