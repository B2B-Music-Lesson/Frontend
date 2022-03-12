import axios from 'axios';

const URL = "https://67oslwoa69.execute-api.us-west-2.amazonaws.com/prod";

//TODO: Test
export async function createUser(firstName, lastName, password, is_teacher, email) {
    console.log("createUser");
    const user_id = email;

    if (!user_id) {
        throw new Error("Username must not be empty");
    } else if (!password) {
        throw new Error("Password must not be empty");
    } else if (typeof is_teacher !== 'boolean') {
        throw new Error("Needs to specifiy a role (Teacher or Student)");
    } 

    try {
        var response;
        if (is_teacher) {
            const body =  {
                user_id: user_id,
                password: password,
                firstName: firstName,
                lastName: lastName,
            };

            response = await axios.post(URL + '/createTeacher', body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                crossDomain: true,
            });
        } else {
            const body =  {
                user_id: user_id,
                password: password,
                firstName: firstName,
                lastName: lastName,
                quizzes: {"default": 0},
            };

            response = await axios.post(URL + '/createUser', body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                crossDomain: true,
            });
        }
        console.log(response);
    } catch(error) {
        console.log({error});
    }
}

// FIXME: password no longer needed
export async function getUser(user, password) {
        console.log("getUser");
        console.log(user, password);
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get(URL + '/user?user_id=' + user + '&password=' + password);
                console.log({resp});
            } catch (err) {
                // Handle Error Here
                console.error({err});
            }
        };
        sendGetRequest();
}

//TODO: Test
export async function setTeacher(user_id, teacher_id) {
    if (!user_id) {
        throw new Error("Username must not be empty");
    } else if (!teacher) {
        throw new Error("Password must not be empty");
    } 

    try {
        var response;
        const body =  {
            user_id: user_id,
            teacher: teacher_id,
        };

        response = await axios.post(URL + '/setUser', body, {
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

//TODO: Test
export async function setScore(user_id, quizz_id, correctNum, totalNum) {
    if (!user_id) {
        throw new Error("Username must not be empty");
    } else if (!teacher) {
        throw new Error("Password must not be empty");
    } 

    try {
        var response;
        const body =  {
            user_id: user_id,
            quizId: quizz_id,
            correct: correctNum,
            total: totalNum
        };

        response = await axios.post(URL + '/setUser', body, {
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


//TODO: test
export async function getTeachers() {
    const sendGetRequest = async () => {
        try {
            const resp = await axios.get(URL + '/getTeachers');
            console.log({resp});
        } catch (err) {
            // Handle Error Here
            console.error({err});
        }
    };
    sendGetRequest();
}