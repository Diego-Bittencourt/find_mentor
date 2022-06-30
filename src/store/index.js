import { createStore } from 'vuex';
import mentorsModule from './modules/mentors/index.js';
import requestsModule from './modules/requests/index.js';
import buddiesModule from './modules/buddies/index.js';
import AuthModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule,
    buddies: buddiesModule,
    auth: AuthModule,
  },
});

export default store;
