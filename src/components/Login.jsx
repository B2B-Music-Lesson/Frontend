import React from "react";
import { Link } from "react-router-dom";

import { getUser } from "../network/ServerFacde";


const Login = ({user, password, setUserName, setPassword}) => {
    return (
        <div class="col-sm login-form">
              <label for="inputEmail" class="sr-only">
                {/* firstname + lastname (tolowercase) */}
                User ID
              </label>
              <input
                type="userName"
                id="inputUserName"
                class="form-control"
                required=""
                placeholder="Email Address"
                autofocus=""
                onChange={(e) => setUserName(e.target.value)}
              />
              <label for="inputPassword" class="sr-only">
                Password
              </label>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <div class="checkbox mb-3"></div>
              <Link to="/challenges">
              <button
                class="btn btn-lg btn-primary btn-block"
                onClick={() => getUser(user, password)}
              >
                Sign in
              </button>{" "}
              </Link>
            </div>
    )
}

export default Login;