export default {
    async registerMentor(context, payload) {
        const userId = context.rootGetters.userId;
        const mentorData = {
            firstName: payload.first,
            lastName: payload.last,
            description: payload.description,
            hourlyRate: payload.rate,
            areas: payload.areas
        };

        const response = await fetch(`https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/mentors/${userId}.json`,
        {
            method: 'PUT',
            body: JSON.stringify(mentorData)
        });

        // const responseData = await response.json();

        if(!response.ok) {
            // error ...
        } 
        
        context.commit('registerMentor', {
            ...mentorData,
            id: userId
        });
    }
};