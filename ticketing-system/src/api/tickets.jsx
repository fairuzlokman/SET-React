import { destroy, get, post, put } from ".";

export const createTicket = async (data, token) => {
    const res = await post(
        'http://127.0.0.1:8000/api/ticket', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res;
}

export const editTicket = async ( ticket_id, data, token) => {
    const res = await put(
        `http://127.0.0.1:8000/api/ticket/${ticket_id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res
}
    
export const deleteTicket = async (ticket_id, token) => {
    await destroy(
        `http://127.0.0.1:8000/api/ticket/${ticket_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}

export const getTickets = async (token) => {
    const res = await get(
        'http://127.0.0.1:8000/api/ticket', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res;
}