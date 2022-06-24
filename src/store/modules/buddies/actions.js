export default {
  async registerProject(context, payload) {
    const userId = context.rootGetters.userId;
    const projectData = {
      name: payload.name,
      title: payload.title,
      description: payload.description,
      techUsed: payload.techUsed,
      link: payload.link,
    };
    // console.log(projectData);

    const response = await fetch(
      `https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/buddyrequests.json`,
      {
        method: 'POST',
        body: JSON.stringify(projectData),
      }
    );

    if (!response.ok) {
      // error handling
    }

    context.commit('registerProject', {
      ...projectData,
      id: userId,
    });
  },
  async loadBuddies(context) {
    const response = await fetch(
      `https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/buddyrequests.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        response.message || 'Failed to load data. Try again later.'
      );
      throw error;
    }

    const buddies = [];

    for (const key in responseData) {
      const buddy = {
        id: key,
        projectTitle: responseData[key].title,
        name: responseData[key].name,
        gitHubLink: responseData[key].link,
        projectDescription: responseData[key].description,
        projectTags: responseData[key].techUsed,
      };
      buddies.push(buddy);

      context.commit('loadBuddies', buddies);
    }
  },
};
