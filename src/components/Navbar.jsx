const Navbar = () => {

    const total = 25000;
    const token = false

  return (
    <nav className="navbar fondo-nav navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Francesco Virgolini!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            {
              token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link px-3" href="#">
                      <i className="fas fa-user me-1"></i> Perfil
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3" href="#">
                      <i className="fas fa-sign-out-alt me-1"></i> Cerrar Sesión
                    </a>
                  </li>
                </>
                
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link px-3" href="#">
                      <i className="fas fa-sign-in-alt me-1"></i> Iniciar Sesión
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3" href="#">
                      <i className="fas fa-user-plus me-1"></i> Registro
                    </a>
                  </li>
                </>
              )
            }
          </ul>
          <button className="btn btn-outline-info d-flex align-items-center ms-3 btn-price">
            <i className="fas fa-shopping-cart me-2"></i>
            Total: { total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;