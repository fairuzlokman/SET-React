import { get } from "."

export const getUsers = async () => {
    const res = await get(
        'https://randomuser.me/api/'
    )
    return res;
}