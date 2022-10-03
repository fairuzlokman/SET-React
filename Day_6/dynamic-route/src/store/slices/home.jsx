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
        default:
            return state;
    }
};

export default homeReducer;