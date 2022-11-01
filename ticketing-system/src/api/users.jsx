import { get, post, put } from "."

export const getUsers = async (token) => {
    const res = await get(
        'https://ticketing-fairuz-lokman.herokuapp.com/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res;
}

export const signUpUser = async (data) => {
    const res = await post(
        'https://ticketing-fairuz-lokman.herokuapp.com/api/user-register', data
    )
    return res;
}
export const loginUser = async (data) => {
    const res = await post(
        'https://ticketing-fairuz-lokman.herokuapp.com/api/user-login', data
    )
    return res;
}

export const editUser = async ( user_id, data, token) => {
    const res = await put(
        `https://ticketing-fairuz-lokman.herokuapp.com/api/user/${user_id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res
}
