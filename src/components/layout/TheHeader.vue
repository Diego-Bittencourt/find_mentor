<template>
  <header>
    <nav>
      <div v-if="isLoggedIn" class="box-wrapper">
        <div class="box-area">
          <div class="box box-front">
            <h1>
              <router-link to="/">Hello, {{ userName }}</router-link>
            </h1>
          </div>
          <div class="box box-bottom">
            <h1><router-link to="/mentors">Find a Mentor</router-link></h1>
          </div>
          <div class="box box-back">
            <h1><router-link to="/buddies">Find a Code Buddy</router-link></h1>
          </div>
          <div class="box box-top">
            <h1 v-if="!isMentor">
              <router-link to="/register">Become a Mentor</router-link>
            </h1>
            <h1 v-else>
              <router-link to="/requests">Check Requests</router-link>
            </h1>
          </div>
        </div>
      </div>
      <h1 v-else>
        <router-link to="/" id="topmentor">Find a Mentor</router-link>
      </h1>
      <ul>
        <li><router-link to="/buddies">Code Buddies</router-link></li>
        <li><router-link to="/mentors">All Mentors</router-link></li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else><router-link to="/auth">Log in</router-link></li>
        <li v-if="isLoggedIn">
          <base-button @click="logout" mode="strong">Log out</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.getters.getUserName;
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isMentor() {
      return this.$store.getters['mentors/isMentor'];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/buddies');
    },
  },
};
</script>

<style scoped>
.box-front {
  transform: translateZ(30px);
  background-color: #b84b03;
}

.box-back {
  transform: translateZ(-30px) rotateX(180deg);
  background-color: #b84b03;
}

.box-top {
  transform: translateY(-30px) rotateX(90deg);
  background-color: #b84b03;
}

.box-bottom {
  transform: translateY(30px) rotateX(-90deg);
  background-color: #b84b03;
}

.box-area {
  position: relative;
  transform-style: preserve-3d;
  animation-name: rotate;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  width: 224px;
  height: 64px;
  transform: rotateY(90deg);
}

.box {
  position: absolute;
  width: 220px;
  height: 60px;
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 5px;
}

.box-wrapper {
  width: 230px;
}

@keyframes rotate {
  0% {
    transform: rotate3d(1, 0, 0, 0);
  }

  20% {
    transform: rotate3d(1, 0, 0, 0);
  }

  25% {
    transform: rotate3d(1, 0, 0, -90deg);
  }

  45% {
    transform: rotate3d(1, 0, 0, -90deg);
  }

  50% {
    transform: rotate3d(1, 0, 0, -180deg);
  }

  70% {
    transform: rotate3d(1, 0, 0, -180deg);
  }

  75% {
    transform: rotate3d(1, 0, 0, -270deg);
  }

  95% {
    transform: rotate3d(1, 0, 0, -270deg);
  }

  100% {
    transform: rotate3d(1, 0, 0, -360deg);
  }
}

header {
  width: 100%;
  height: 5.5rem;
  background-color: #b84b03;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #fcfbfa;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #fcfbfa;
  border-radius: 5px;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-end;
}

li {
  margin: 0 0.5rem;
}

@media screen and (max-width: 750px) {
  header {
    font-size: 12px;
  }

  header a {
    padding: 0.3rem 0.7rem;
  }

  li {
    margin: 0 0.3rem;
    padding: 0;
  }

  ul {
    flex-wrap: wrap;
    width: 90%;
  }

  a:active,
  a:hover,
  a.router-link-active {
    border-color: transparent;
  }

  .box-wrapper {
    display: none;
  }

  nav {
    width: 100%;
  }

  ul {
    width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 480px) {
  header ul {
    justify-content: space-between; 
  }

  button {
    height: 30%;
  }

  #topmentor {
    display: none;
  }
}
</style>
