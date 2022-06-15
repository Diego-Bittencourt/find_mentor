import mentorsMutations from './mutations.js';
import mentorsActions from './actions.js';
import mentorsGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: 'm1',
          firstName: 'Kaori',
          lastName: 'Matsuda',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Kaori Matsuda and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 3000,
        },
        {
          id: 'm2',
          firstName: 'Leonel',
          lastName: 'Richard',
          areas: ['frontend', 'career'],
          description:
            'I am Leonel Richard and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 3500,
        },
      ],
    };
  },
  mutations: mentorsMutations,
  actions: mentorsActions,
  getters: mentorsGetters,
};
