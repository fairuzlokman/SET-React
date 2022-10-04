const INITIAL_STATE = {
    users: [
        {
            id: 1,
            fullName: 'Fairuz',
            email: 'user1@mail.com',
            role: 'user'
        },
        {
            id: 2,
            fullName: 'Absyar',
            email: 'support@mail.com',
            role: 'support'
        },
        {
            id: 3,
            fullName: 'Muaz',
            email: 'developer@mail.com',
            role: 'developer'
        }
    ]
}

const userReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SET_USER_STATE':
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default userReducer