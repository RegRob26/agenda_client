import * as API from "./../constData.js"

export const signIn = async (data) => {

    try {
        return await fetch(API.BASEURL + "/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
    } catch (e) {
        return e
    }
}

export const signUp = async (userData) => {

    try {
        return await fetch(API.BASEURL + "/auth/signup", {
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