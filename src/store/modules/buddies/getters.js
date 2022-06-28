export default {
    loadBuddies (state) {
        return state.buddiesRequests;
    },
    hasBuddies (state) {
        if (state.buddiesRequests && state.buddiesRequests.length) {
            return true;
        } else {
            return false;
        }
    }
}