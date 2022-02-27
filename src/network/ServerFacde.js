const axios = require('axios');
const URL = "https://67oslwoa69.execute-api.us-west-2.amazonaws.com/prod";
const NULL_ARRAY = [undefined, null];

export async function createUser(firstName, lastName, password, is_teacher, email) {
    console.log("createUser");
    console.log(firstName, lastName, password, is_teacher, email);
    const user_id = firstName + lastName;
    if (!NULL_ARRAY.includes(user_id)) {
        throw new Error("Username must not be empty");
    } else if (!NULL_ARRAY.includes(password)) {
        throw new Error("Password must not be empty");
    } else if (!NULL_ARRAY.includes(is_teacher)) {
        throw new Error("Needs to specifiy a role (Teacher or Student)");
    } else if (!NULL_ARRAY.includes(email)) {
        throw new Error("Email must not be empty");
    }

    const body =  {
        user_id: user_id,
        password: password,
        is_teacher: false,
        email: email
      };
    try{
        const response = await axios.post(URL + '/createUser', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            crossDomain: true,
            item: body,
        });
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
export async function getUser(user, password) {
        console.log("getUser");
        console.log(user, password);
        const response = await axios.post(URL + '/user?user_id=' + user, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            crossDomain: true,
        });
        console.log(response);
}