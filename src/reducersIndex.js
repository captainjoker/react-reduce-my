const login = (state = {succeed: false}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state,succed:true};
        default:
            return state
    }
};


export default login;