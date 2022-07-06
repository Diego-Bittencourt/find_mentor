import authMutations from './mutations.js';
import authActions from './actions.js';
import authGetters from './getters.js';
// this auth module isn't namespaced because I want to access the module as I was accessing the root.
// Therefore I didn't have to change much code through the app.
export default {
    state() {
        return {
          userId: null,
          userName: 'Not working',
          token: null,
          tokenExpiration: null
        };
      },
      mutations: authMutations,
      actions: authActions,
      getters: authGetters
};