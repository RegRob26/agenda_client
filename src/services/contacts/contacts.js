import * as API from "./../constData.js"

export const addContact = async (data) => {
    const token = getCookie('token')
    const user_id = getCookie('user_id')
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

export const updateContact = async (data) => {
    const token = getCookie('token')
    const user_id = getCookie('user_id')
    try {
        return await fetch(API.BASEURL + "/contacts/"+data.contact_id, {
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


export const deleteContact = async (id) => {
    const token = getCookie('token')
    const user_id = getCookie('user_id')
    try {
        return await fetch(API.BASEURL + "/contacts/"+id, {
            method: "DELETE",
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