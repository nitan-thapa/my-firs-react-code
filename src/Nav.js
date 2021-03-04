import { NavLink, useHistory } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const Nav = () => {
  const history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="btnshape"
            type="button"
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
          </button>
          <NavLink className="navbar-brand" to="/">
            Nitan
          </NavLink>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
              <li className="nav-item">
                <NavLink
                  activeClassName="activepart"
                  className="nav-link "
                  aria-current="page"
                  exact
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activepart"
                  className="nav-link "
                  aria-current="page"
                  exact
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activepart"
                  className="nav-link "
                  aria-current="page"
                  exact
                  to="/about"
                >
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activepart"
                  className="nav-link "
                  aria-current="page"
                  exact
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="btnshape"
            type="button"
            onClick={() => {
              history.goForward();
            }}
          >
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
          </button>
        </div>
      </nav>
    </>
  );
};

export { Nav };
