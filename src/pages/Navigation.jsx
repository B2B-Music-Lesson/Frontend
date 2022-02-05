import {React} from "react";
import { Link, withRouter} from "react-router-dom";

function Navigation(props) {
    return (
      <div className="navigation">
          <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="/"><b>Apollo</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navList">
                <li className={`nav-item ${props.location.pathname==="/" ? "selected" : "" }`}>
                    <Link className="nav-link" id="navBarItem" to="/" onClick={() => window.scrollTo(0, 0)}>
                        <b>Temp</b>
                    </Link>
                </li>
                <li className={`nav-item ${props.location.pathname==="/" ? "selected" : "" }`}>
                    <Link className="nav-link" id="navBarItem" to="/" onClick={() => window.scrollTo(0, 0)}>
                    <b>Temp</b>
                    </Link>
                </li>

                <li className={`nav-item ${props.location.pathname==="/" ? "selected" : "" }`}>
                    <Link className="nav-link" id="navBarItem" to="/" onClick={() => window.scrollTo(0, 0)}>
                        <b>Temp</b>
                    </Link>
                </li>
                <li className={`nav-item btn-primary rounded ${props.location.pathname==="/" ? "selected" : "" }`}>
                    <Link className="nav-link text-white" id="navBarItem" to="/">
                    Temp
                    </Link>
                </li>
            </ul>
        </div>
        </nav>

      </div>
    );
  }

export default withRouter(Navigation);