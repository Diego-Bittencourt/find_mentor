export default {
    setUser(state, payload) {
        state.userName = payload.username;
        state.token = payload.token;
        state.userId = payload.userId;
        state.tokenExpiration = payload.tokenExpiration;
    }
};