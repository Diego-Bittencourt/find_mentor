export default {
  mentors(state) {
    return state.mentors;
  },
  hasMentors(state) {
    if (state.mentors && state.mentors.length) {
      return true;
    } else {
      return false;
    }
  },
  isMentor(state, getters, rootState, rootGetters) {
    //console.log(state, rootState); // printing arguments that I don't use but I need them to acces the last arg.
    const mentors = getters.mentors;
    const userId = rootGetters.userId;
    return mentors.some(mentor => mentor.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    } 

    const currentTimeStamp = new Date().getTime();
    return(currentTimeStamp - lastFetch)/ 1000 > 60;
  }
};
