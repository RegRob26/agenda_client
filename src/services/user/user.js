import * as API from '@/services/constData.js';

export const getUser = async (id) => {
    const token = getCookie('token')
    const user_id = getCookie('user_id')
    try {
        return await fetch(API.BASEURL + "/users/" + user_id, {
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

export const updateUser = async (id, data) => {
    const token = getCookie('token')
    const user_id = getCookie('user_id')
    console.log('datita: ', data);
    try {
        return await fetch(API.BASEURL + "/users/" + user_id, {
            method: "PATCH",
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

const getCookie = (name) => {
    return document.cookie.split("; ").find((row) => row.startsWith(name+'='))?.split("=")[1];
}