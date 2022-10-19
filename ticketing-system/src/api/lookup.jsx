import { get } from "."

export const getLookup = async () => {
    const res = await get(
        'http://127.0.0.1:8000/api/lookup'
    )
    return res
}