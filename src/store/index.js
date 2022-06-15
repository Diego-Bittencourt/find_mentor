import { createStore } from 'vuex';
import mentorsModule from './modules/mentors/index.js';

const store = createStore({
    modules: {
        mentors: mentorsModule
    }
});

export default store;