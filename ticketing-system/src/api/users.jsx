import { get, post, put } from "."

export const getUsers = async (token) => {
    const res = await get(
        'http://127.0.0.1:8000/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res;
}

export const signUpUser = async (data) => {
    const res = await post(
        'http://127.0.0.1:8000/api/user-register', data
    )
    return res;
}
export const loginUser = async (data) => {
    const res = await post(
        'http://127.0.0.1:8000/api/user-login', data
    )
    return res;
}

export const editUser = async ( user_id, data, token) => {
    const res = await put(
        `http://127.0.0.1:8000/api/user/${user_id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res
}
