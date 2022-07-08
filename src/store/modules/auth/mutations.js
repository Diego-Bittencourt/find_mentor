export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false;
    },
    setUserName (state, payload) {
        state.userName = payload.userName;
    },
    setAutoLogout(state) {
        state.didAutoLogout = true;
    }
};