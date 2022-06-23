import buddiesGetters from './getters.js';
import buddiesActions from './actions.js';
import buddiesMutations from './mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      buddiesRequests: [
        {
          id: 'c1',
          buddyName: 'Fuyutsuki',
          gitHubLink: 'www.github.com',
          projectTitle: 'Dummy project',
          projectDescription: 'This is just dummy data',
          projectTags: ['vue', 'python'],
        },
        {
          id: 'c5',
          buddyName: 'Akira',
          gitHubLink: 'www.github.com/test',
          projectTitle: 'Doing something with PHP',
          projectDescription: 'This is another dummy data',
          projectTags: ['react', 'tailwind', 'PHP']
        },
        {
          id: 'z3',
          buddyName: 'Joane',
          gitHubLink: 'www.eita.com',
          projectTitle: 'SEARCH TEAM FOR HUNT',
          projectDescription: 'This is yet  again another dummy data',
          projectTags: ['PHP', 'javascript']
        }
      ],
    };
  },
  getters: buddiesGetters,
  actions: buddiesActions,
  mutations: buddiesMutations
};
