import { React } from "react";
import { ActionBanner } from ".";

function Login() {
  return (
    <div className="login">
      <ActionBanner
      headerText="Welcome to the Login Page"
      />
      <div className="loginForm">
      <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    <h1>OR</h1>
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <label for="firstName" class="sr-only">First Name</label>
      <input type="text" id="firstName" class="form-control" placeholder="First Name" required="" autofocus=""/>
      <label for="lastName" class="sr-only">Last Name</label>
      <input type="text" id="lastName" class="form-control" placeholder="Last Name" required="" autofocus=""/>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
      <input type="radio" value="Student" name="Type" /> Student
      <input type="radio" value="Teacher" name="Type" /> Teacher
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
      </div>
   
    </div>
  );
}

export default Login;
