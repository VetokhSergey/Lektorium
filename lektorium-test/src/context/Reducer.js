const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {user: null, token: null, isFetching: true, error: false};
        case "LOGIN_SUCCESS":
            return {user: action.payload.user, token: action.payload.accessToken, isFetching: false, error: false};
        case "LOGIN_FAILED":
            return {user: null, token: null, isFetching: false, error: true};
        case "LOGOUT":
            return {user: null, token: null, isFetching: false, error: false};
        default:
            return state;
    }
}

export default Reducer;