export default {
    registerMentor(context, payload) {
        const mentorData = {
            id: context.rootGetters.userId,
            firstName: payload.first,
            lastName: payload.last,
            description: payload.description,
            hourlyRate: payload.rate,
            areas: payload.areas
        };
        context.commit('registerMentor', mentorData);
    }
};