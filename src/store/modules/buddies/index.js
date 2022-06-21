import buddiesGetters from './getters.js';

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
          projectTags: ['vue', 'component', 'pokemon'],
        },
        {
          id: 'c5',
          buddyName: 'Akira',
          gitHubLink: 'www.github.com/test',
          projectTitle: 'Doing something with PHP',
          projectDescription: 'This is another dummy data',
          projectTags: ['react', 'hooks', 'PHP']
        }
      ],
    };
  },
  getters: buddiesGetters,
};
