export default {
    registerMentor(context, payload) {
        const coachData = {
            id: 'c3',
            firstName: payload.first,
            lastName: payload.last,
            description: payload.description,
            hourlyRate: payload.rate,
            areas: payload.areas
        };
        context.commit('registerMentor', coachData);
    }
};