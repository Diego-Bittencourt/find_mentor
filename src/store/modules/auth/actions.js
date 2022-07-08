export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBekgAGk8YKsN-foMAdP7V1CgTkQrc6dH4';

    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBekgAGk8YKsN-foMAdP7V1CgTkQrc6dH4';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });

    if (mode === 'signup') {
      context.dispatch('postUserName', {
        userName: payload.userName,
        email: payload.email,
      }); //sends to server the username and email.
    } else if (mode === 'login') {
      context.dispatch('fetchUserName', {
        email: payload.email,
        password: payload.password,
      }); // fetch the username from firebase.
    }
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    if (token && userId && userName) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null
      });

      context.commit('setuserName', {
        userName: userName
      })
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
  async fetchUserName(context, payload) {
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${token}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    let currentUser;

    for (const key in responseData) {
      if (responseData[key].email === payload.email) {
        currentUser = responseData[key].username;
      }
    }

    localStorage.setItem('userName', currentUser)

    context.commit('setUserName', {
      userName: currentUser,
    });
  }, //gets username from the server
  async postUserName(context, payload) {
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://mentors-fcf7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${token}`,
      {
        method: 'POST',
        body: JSON.stringify({
          username: payload.userName,
          email: payload.email,
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    context.dispatch('fetchUserName', {
      userName: payload.userName,
      email: payload.email,
    });
  }, //sends the username and email to the server
};
