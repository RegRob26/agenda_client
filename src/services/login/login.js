import * as API from "./../constData.js"

export const signIn = async (user, password) => {
    const userJson = {
        email: user,
        password: password
    }

    try {
        return await fetch(API.BASEURL + "/auth/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userJson)
        }).then((res) => res.json())
    } catch (e) {
    }
}

export const signUp = async (userData) => {

    try {
        return await fetch(API.BASEURL + "/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then((res) => res.json())
    }
    catch (e) {
        return e
    }

}