import React from "react";
import { Link } from "react-router-dom";

import {login} from "../network/ServerFacde";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Login = ({user, password, setUserName, setPassword, is_teacher, handleOnChange}) => {
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
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultValue={false} />}
                  checked={is_teacher}
                  onChange={handleOnChange}
                  label="Log In as Teacher?" />
              </FormGroup>
              <Link to="/challenges">               
            <button
                class="btn btn-lg btn-primary btn-block"
                onClick={() => login(user, password, is_teacher) }
              >
                Sign in
              </button>{" "}
              </Link>
            </div>
    )
}

export default Login;