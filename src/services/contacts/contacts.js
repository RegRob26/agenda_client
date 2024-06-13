import * as API from "./../constData.js"

export const addContact = async (data) => {
    const token = getCookie('token')
    const user_id = getCookie('user_id')
    console.log(user_id, token);
    data.user_id = user_id

    try {
        return await fetch(API.BASEURL + "/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
    } catch (e) {
        return e
    }
}

export const getContacts = async () => {
    const token = getCookie('token')
    const user_id = getCookie('user_id')
    console.log(user_id, token);

    try {
        return await fetch(API.BASEURL + "/contacts?user_id="+user_id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }).then((res) => res.json())
    } catch (e) {
        return e
    }
}

const getCookie = (name) => {
    return document.cookie.split("; ").find((row) => row.startsWith(name+'='))?.split("=")[1];
}