export default {
    registerProject(state, payload) {
        state.buddiesRequests.push(payload);
    },
    loadBuddies(state, payload) {
        console.log("mutation foi")
        state.buddiesRequests = payload;
    }
}