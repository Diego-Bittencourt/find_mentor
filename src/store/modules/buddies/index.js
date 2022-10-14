import buddiesGetters from './getters.js';
import buddiesActions from './actions.js';
import buddiesMutations from './mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      buddiesRequests: [],
    };
  },
  getters: buddiesGetters,
  actions: buddiesActions,
  mutations: buddiesMutations
};
