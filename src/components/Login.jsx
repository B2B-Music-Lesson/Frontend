import React, {useCallback, useEffect, useState} from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

import {login , isValidEmail} from "../network/ServerFacde";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = ({user, password, setUserName, setPassword, is_teacher, handleOnChange, setCurrUser, currUser}) => {

  const history = useHistory

  const fetchResponse = async () => {
    let response =  await login(user, password, is_teacher)
    if (response.status == 200) {
    
    setCurrUser(response.data.firstName + " " + response.data.lastName)
     
    } else {
      alert("This user does not exist")
    }    
  }

  




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
              <Link to="/challenges"
                
              >
              <button
                  class="btn btn-lg btn-primary btn-block"
                  onClick={()=> {
                    let response = login(user, password, is_teacher)
                  }}
                >
                  Sign In
              </button>{" "}
              </Link>
            
            </div>
    )
}

export default withRouter(Login);