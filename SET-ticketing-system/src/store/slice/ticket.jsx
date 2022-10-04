const INITIAL_STATE = {
    tickets: [
        {
            id: 1,
            category: 'Adnexio',
            priority: 'Low',
            status: 'Complete',
            title: 'Food',
            description: 'Tak sedap'
        },
        {
            id: 2,
            category: 'Meniaga',
            priority: 'High',
            status: 'In-progress',
            title: 'Wifi',
            description: 'Slow connection'
        },
        {
            id: 3,
            category: 'Decoris',
            priority: 'Medium',
            status: 'Back-log',
            title: 'Webpage',
            description: 'Add more images'
        }
    ]
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
            return state;
    }
}

export default ticketReducer