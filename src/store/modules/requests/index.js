import requestsActions from './actions.js';
import requestsMutations from './mutations.js';
import requestsGetters from './getters.js';



export default {
    namespaced: true,
    state() {
        return {
            requests: [
                'DummyData for testing purposes'
            ]
        }
    },
    mutations: requestsMutations,
    actions: requestsActions,
    getters: requestsGetters
};