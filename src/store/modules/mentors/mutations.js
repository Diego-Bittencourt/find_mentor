export default {
    registerMentor(state, payload) {
        state.mentors.push(payload);
    },
    setMentors(state, payload) {
        console.log("chamada")
        state.mentors = payload;
    },
    setFetchTimeStamp(state) {
        state.lastFetch = new Date().getTime();
    }
};