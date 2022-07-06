export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.tokenExpiration = payload.tokenExpiration;
    },
    setUserName (state, payload) {
        state.userName = payload.userName;
    }
};