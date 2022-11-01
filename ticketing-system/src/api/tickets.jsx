import { destroy, get, post, put } from ".";

export const createTicket = async (data, token) => {
    const res = await post(
        'https://ticketing-fairuz-lokman.herokuapp.com/api/ticket', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res;
}

export const editTicket = async ( ticket_id, data, token) => {
    const res = await put(
        `https://ticketing-fairuz-lokman.herokuapp.com/api/ticket/${ticket_id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res
}
    
export const deleteTicket = async (ticket_id, token) => {
    await destroy(
        `https://ticketing-fairuz-lokman.herokuapp.com/api/ticket/${ticket_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}

export const getTickets = async (token) => {
    const res = await get(
        'https://ticketing-fairuz-lokman.herokuapp.com/api/ticket', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res;
}