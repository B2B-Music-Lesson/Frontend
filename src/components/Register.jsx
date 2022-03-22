import React from "react";
import { createUser} from "../network/ServerFacde";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";


const Register = ({firstName, lastName, password, email, is_teacher, setFirstName, setLastName, setPassword, setEmail, handleOnChange}) => {
    return (
        <div class="col-sm">
             
              <label for="firstName" class="sr-only">
                First Name
              </label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                class="form-control"
                placeholder="First Name"
                required=""
                autofocus=""
              />
              <label for="lastName" class="sr-only">
                Last Name
              </label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                class="form-control"
                placeholder="Last Name"
                required=""
                autofocus=""
              />
              <label for="email" class="sr-only">
                Email address
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                class="form-control"
                placeholder="Email address"
                required=""
                autofocus=""
              />
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
                placeholder="Password"
                required=""
              />
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />}
                  checked={is_teacher}
                  onChange={handleOnChange}
                  label="Are you a teacher?" />
              </FormGroup>
              <Link to="/challenges">
              <button
                class="btn btn-lg btn-primary btn-block"
                onClick={() => {
                  createUser(firstName, lastName, password, is_teacher, email)
                }
                }
              >
                Register
              </button>{" "}
              </Link>
            </div>
    )
}

export default Register;