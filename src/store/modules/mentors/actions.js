export default {
  async registerMentor(context, payload) {
    const userId = context.rootGetters.userId;
    const mentorData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(
      `https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/mentors/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(mentorData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerMentor', {
      ...mentorData,
      id: userId,
    });
  },
  async loadMentors(context) {
    const response = await fetch(
      `https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/mentors.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      //error handling ...
    }

    const mentors = [];

    for (const key in responseData) {
      const mentor = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      mentors.push(mentor);
    }
    context.commit('setMentors', mentors);
  },
};
