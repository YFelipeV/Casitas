import { Link } from "react-router-dom";
import casas from "../assets/casas.jpg";

function HomePage() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
        <div class="container-fluid">
          <Link class="navbar-brand text-primary fw-bold" href="#">
            CASITAS 🏘️
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <Link to={"/logina"} class=" btn btn-primary mx-2 ">
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <div className="container-fluid d-flex justify-content-between">
          <div className="row">
            <div className=" col-12 mx-5 my-5  ">
              <h1>Necesitas una casa </h1>
              <p>Inicia sesion o registrate para poder arrendar una casa</p>
              <Link to={"/login"} className="btn btn-danger">
                {" "}
                inicia sesion
              </Link>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
