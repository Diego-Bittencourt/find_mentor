export default {
    registerMentor(state, payload) {
        state.mentors.push(payload);
    },
    setMentors(state, payload) {
        console.log(payload);
        state.mentors = payload;
    }
};