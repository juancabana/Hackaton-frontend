import React from "react";
import styles from "./Dashboard.module.css";
import imageLogo from "./../../assets/UNACLogo2.png";
import imagePerfil from "./../../assets/perfil.jpeg"
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      {/* <Header /> */}
      <div className={styles.left_bar}>
        <Link to="/">
          <div className={styles.wrapper_logo_image}>
            <img src={imageLogo} alt="" className={styles.logo_image} />
          </div>{" "}
        </Link>
        <div className={styles.wrapper_list_options}>
          <ul className={styles.list_options}>
            <li className={styles.item_options}>
              <button className={styles.button_item}>Dashboard</button>
            </li>
            <li className={styles.item_options}>
              <button className={styles.button_item}>Analíticas</button>
            </li>
            <li className={styles.item_options}>
              <button className={styles.button_item}>Eventos </button>
            </li>
            <li className={styles.item_options}>
              <button className={styles.button_item}>Entrevistas </button>
            </li>
            <li className={styles.item_options}>
              <button className={styles.button_item}>Calendario</button>
            </li>
            <li className={styles.item_options}>
              <button className={styles.button_item}>Notificaciones</button>
            </li>
            <li className={styles.item_options}>
              <button className={styles.button_item}>Configuración</button>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.container_list_users}>
        <div className={styles.wrapper_header}>
          <h1 className={styles.h1_perfil}>Lista de usuarios</h1>
          <button className="btn btn-primary">Añadir </button>
        </div>
        <table className="table m-0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.container_user_info}>
        <div className={styles.content_user_perfil}>
          <div className={styles.wrapper_img_user}>
            <img src={imagePerfil} alt="" className={styles.img_perfil} />
          </div>
          <h1 className={styles.h1_perfil}>Juan Cabana</h1>
          <h2 className={styles.h2_perfil}>Administrador</h2>
        </div>
        <hr />
        <div className={styles.wrapper_email}>
          <p className={styles.p_email}>juand.cabanat@unac.edu.co</p>
        </div>
        <hr />
        <div className={styles.wrapper_number}>
          <p className={styles.p_number}>3053194924</p>
        </div>
        <hr />
        <div className={styles.wrapper_address}>
          <p className={styles.p_address}>
            Cra. 84, Cl. 33AA #01, Medellín, Antioquia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
