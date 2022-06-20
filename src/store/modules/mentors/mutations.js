export default {
    registerMentor(state, payload) {
        state.mentors.push(payload);
    },
    setMentors(state, payload) {
        state.mentors = payload;
    },
    setFetchTimeStamp(state) {
        state.lastFetch = new Date().getTime();
    }
};