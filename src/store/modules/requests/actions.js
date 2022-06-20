export default {
  async addRequest(context, payload) {
    const newRequest = {
      
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.mentorId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
        throw error;
      
    }

    newRequest.id = responseData.name;
    newRequest.mentorId = payload.mentorId;
    //I'm using the name provided by firebase as the ID and setting to the newRequest data to use localy
    // in my app.

    context.commit('addRequest', newRequest);
  },
  async getRequests(context) {
    const mentorId = context.rootGetters.userId;
    const response = await fetch(`https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${mentorId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch requests');
        throw error;
    }

    const requests = [];

    for (const key in responseData) {
        const request = {
            id: key,
            mentorId: mentorId,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message
        };
        requests.push(request);
    }

    context.commit('getRequests', requests);
  }
};
