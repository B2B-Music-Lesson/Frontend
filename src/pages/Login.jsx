import { React, useState } from "react";
import { ActionBanner } from ".";
import { createUser, getUser } from "../network/ServerFacde";

function Login() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_teacher] = useState(false);
  const [user, setUserName] = useState("");

  return (
    <div className="login">
      <ActionBanner headerText="Welcome to the Login Page" />
      <div className="loginForm">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <label for="inputEmail" class="sr-only">
          {/* firstname + lastname (tolowercase) */}
          User ID
          </label>
        <input
          type="userName"
          id="inputUserName"
          class="form-control"
          required=""
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
        <button class="btn btn-lg btn-primary btn-block" onClick={() =>
          getUser(user, password)
        }>
          Sign in
        </button>

        <h1>OR</h1>
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
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
        <div class="checkbox mb-3"></div>
        <button
          class="btn btn-lg btn-primary btn-block"
          onClick={() =>
            createUser(firstName, lastName, password, is_teacher, email)
          }
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
