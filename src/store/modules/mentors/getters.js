export default {
    mentors(state) {
        return state.mentors;
    },
    hasMentors(state) {
        if (state.mentors && state.mentors.length) {
            return true
        } else {
            return false
        }
    }
};