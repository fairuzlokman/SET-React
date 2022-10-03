const INITIAL_STATE = {
    title: '',
    description: ''
};

const homeReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case 'SET_HOME_STATE':
            return {
                ...state,
                ...payload
            }
        case 'RESET_HOME_STATE':
            return {
                ...INITIAL_STATE
            }
        default:
            return state;
    }
};

export default homeReducer;