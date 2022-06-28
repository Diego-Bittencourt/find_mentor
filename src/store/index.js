import { createStore } from 'vuex';
import mentorsModule from './modules/mentors/index.js';
import requestsModule from './modules/requests/index.js';
import buddiesModule from './modules/buddies/index.js';

const store = createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule,
    buddies: buddiesModule
  },
  state() {
    return {
      userId: 'z3',
      userName: 'Diego'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    getUserName(state) {
      return state.userName;
    }
  },
});

export default store;
