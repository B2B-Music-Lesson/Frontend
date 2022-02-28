import axios from 'axios';

const URL = "https://67oslwoa69.execute-api.us-west-2.amazonaws.com/prod";

export async function createUser(firstName, lastName, password, is_teacher, email) {
    console.log("createUser");
    console.log(firstName, lastName, password, is_teacher, email);
    const user_id = firstName.toLowerCase() + lastName.toLowerCase();
    if (!user_id) {
        throw new Error("Username must not be empty");
    } else if (!password) {
        throw new Error("Password must not be empty");
    } else if (typeof is_teacher !== 'boolean') {
        throw new Error("Needs to specifiy a role (Teacher or Student)");
    } else if (!email) {
        throw new Error("Email must not be empty");
    }

    const body =  {
        user_id: user_id,
        password: password,
        is_teacher: false,
        email: email
      };
    try {
        console.log('laksdjflk')
        const response = await axios.post(URL + '/createUser', body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            crossDomain: true,
        });
        console.log(response);
    } catch(error) {
        console.log({error});
    }
}
export async function getUser(user, password) {
        console.log("getUser");
        console.log(user, password);
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get(URL + '/user?user_id=' + user + '&password=' + password);
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        sendGetRequest();
}