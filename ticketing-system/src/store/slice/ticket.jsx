const INITIAL_STATE = {
    tickets: []
}

const ticketReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_TICKET_STATE':
            return {
                ...state,
                ...payload
            }        
        default:
            return {...state}
    }
}

export default ticketReducer