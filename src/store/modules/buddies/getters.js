export default {
    loadBuddies (state) {
        return state.buddiesRequests;
    },
    hasBuddies (state) {
        if (state.buddies && state.buddies.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}