import { React, useState } from "react";
import { ActionBanner } from ".";

import Login from "../components/Login";
import Register from "../components/Register";
import Switch from "../components/Switch"


function LoginPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_teacher, setTeacher] = useState(false);
  const [user, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleOnChange = () => {
    setTeacher(!is_teacher);
  };

  return (
    <div className="login">
      <ActionBanner headerText="Welcome to the Login Page" />
      <div className="loginForm">
        <div className="switch-title">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <Switch
        isOn={isLogin}
        onColor='#06D6A0'
        handleToggle={() => setIsLogin(!isLogin)}
      /> <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      </div>
        <div class="container m-4 login-container">
          <div class="forms">
            {!isLogin ? 
            (
              <Login user={user} setUserName={setUserName} password={password} setPassword={setPassword} is_teacher={is_teacher} handleOnChange={handleOnChange}/>)
             : 
             (
              <Register firstName={firstName} lastName={lastName} email={email} password={password} setFirstName={setFirstName} setLastName={setLastName}
              setEmail={setEmail} setPassword={setPassword} is_teacher={is_teacher} handleOnChange={handleOnChange} />
              )
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
