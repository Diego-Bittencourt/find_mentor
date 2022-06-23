export default {
    registerProject(state, payload) {
        state.buddiesRequests.push(payload);
    },
    loadBuddies(state, payload) {
        state.buddiesRequests = payload;
    }
}