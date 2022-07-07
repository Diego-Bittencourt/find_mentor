export default {
  async login(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBekgAGk8YKsN-foMAdP7V1CgTkQrc6dH4',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }


    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
    
    context.dispatch('fetchUserName', {
      email: payload.email,
      password: payload.password,
    })

  },
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBekgAGk8YKsN-foMAdP7V1CgTkQrc6dH4',
      {
        method: 'POST',
        body: JSON.stringify({
          
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }


    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.rexpiresIn,
    }); // saves localy the user info.

    context.dispatch('postUserName', {
        userName: payload.userName,
        email: payload.email
    }); //sends to server the username and email.
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
  async fetchUserName(context, payload) {
    const token = context.rootGetters.token;

    const response = await fetch(`https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${token}`);

    const responseData = await response.json();

    if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to authenticate');
        throw error;
      }
      console.log("o responseData", responseData)
      
      let currentUser;
      
      for (const key in responseData) {
        if (responseData[key].email === payload.email) {
          currentUser = responseData[key].username
        }
      }
      console.log("currentUser: ", currentUser);
      context.commit('setUserName', {
        userName: currentUser
      })
    

  }, //gets username from the server
  async postUserName(context, payload) {
    const token = context.rootGetters.token;

    const response = await fetch(`https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${token}`, {
        method: 'POST',
        body: JSON.stringify({
            username: payload.userName,
            email: payload.email
        })
    });
    const responseData = await response.json();

    if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to authenticate');
        throw error;
      }
      
      
      context.dispatch('fetchUserName', {
        userName: payload.userName,
        email: payload.email
      })
  } //sends the username and email to the server
};
