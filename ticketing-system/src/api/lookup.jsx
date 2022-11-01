import { get } from "."

export const getLookup = async () => {
    const res = await get(
        'https://ticketing-fairuz-lokman.herokuapp.com/api/lookup'
    )
    return res
}