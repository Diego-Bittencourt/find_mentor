export default {
    receivedRequests(state, getters, rootState, rootGetters) {
        // console.log(getters, rootState)
        const currentmentorId = rootGetters.userId;
        return state.requests.filter(request => request.mentorId === currentmentorId);
    },
    hasRequests(state, getters) {
        // console.log(state);
        return getters.receivedRequests && getters.receivedRequests.length > 0;
    }
};