import axios from "axios";

const URL = "https://ptgocc9wd0.execute-api.us-west-2.amazonaws.com/prod";

//TODO: Test
export async function createUser(
  firstName,
  lastName,
  password,
  is_teacher,
  email
) {
  console.log("createUser");
  const user_id = email;
  console.log(is_teacher);

  if (!user_id) {
    throw new Error("Username must not be empty");
  } else if (!password) {
    throw new Error("Password must not be empty");
  }

  try {
    var response;
    if (is_teacher) {
      const body = {
        teacher_id: user_id,
        password: password,
        firstName: firstName,
        lastName: lastName,
        is_teacher: is_teacher,
      };

      response = await axios.post(URL + "/createTeacher", body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        crossDomain: true,
      });
    } else {
      const body = {
        user_id: user_id,
        password: password,
        firstName: firstName,
        lastName: lastName,
        is_teacher: is_teacher,
        quizzes: { default: 0 },
      };

      response = await axios.post(URL + "/createUser", body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        crossDomain: true,
      });
    }
    console.log(response);
  } catch (error) {
    console.log({ error });
  }
}

export async function login(user_id, password, is_teacher) {
  console.log("login");
  console.log("teacher value", is_teacher);
  try {
    var response;
    if (is_teacher) {
      const body = {
        teacher_id: user_id,
        password: password,
      };
      response = await axios.post(URL + "/loginTeacher", body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        crossDomain: true,
      });
      console.log(response);
    } else {
      const body = {
        user_id: user_id,
        password: password,
      };
      response = await axios.post(URL + "/login", body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        crossDomain: true,
      });
      console.log(response);
      return response;
    }
    //TODO: check return login
  } catch (error) {
    console.log({ error });
  }
}

export async function getUser(user_id, is_teacher) {
  console.log("getUser");
  console.log(user_id);
  console.log(is_teacher);
  if (is_teacher) {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(URL + "/getTeacher?teacher_id=" + user_id);
        console.log({ resp });
      } catch (err) {
        console.error({ err });
      }
    };
    sendGetRequest();
  } else {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(URL + "/user?user_id=" + user_id);
        console.log({ resp });
        localStorage.setItem("first_name", resp.data.firstName);
      } catch (err) {
        console.error({ err });
      }
    };
    sendGetRequest();
  }
}

//TODO: Test
export async function setTeacher(user_id, teacher_id) {
  if (!user_id) {
    throw new Error("Username must not be empty");
  } else if (!teacher_id) {
    throw new Error("Password must not be empty");
  }

  try {
    var response;
    const body = {
      user_id: user_id,
      teacher: teacher_id,
    };

    response = await axios.post(URL + "/setUser", body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      crossDomain: true,
    });
    console.log(response);
  } catch (error) {
    console.log({ error });
  }
}

//TODO: Test
export async function setScore(user_id, quizz_id, correctNum, totalNum) {
  if (!user_id) {
    throw new Error("Username must not be empty");
  }

  try {
    var response;
    const body = {
      user_id: user_id,
      quizId: quizz_id,
      correct: correctNum, // total - wrong
      total: totalNum,
    };

    response = await axios.post(URL + "/setUser", body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      crossDomain: true,
    });
    console.log(response);
  } catch (error) {
    console.log({ error });
  }
}
export function isValidEmail(email) {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email)) {
    return false;
  }
  return true;
}

//TODO: test
export async function getTeachers() {
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(URL + "/getTeachers");
      console.log({ resp });
    } catch (err) {
      // Handle Error Here
      console.error({ err });
    }
  };
  sendGetRequest();
}
