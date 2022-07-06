<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <base-spinner v-if="isLoading"></base-spinner>
      <form @submit.prevent="submitForm" v-else>
        <h3>{{ submitButtonCaption }}</h3>
        <!-- ADD ANIMATION FOR THE NAME FIELD -->
        <div class="form-control" v-if="mode === 'signup'">
          <label for="username">User Name</label>
          <input type="text" id="username" v-model.trim="userName" />
        </div>
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please, enter a valid user name, email and password
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    usernameValidation() {
      if (this.mode === 'signup' && this.userName === '') {
        return false;
      } else {
        return true;
      }
    },
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Sign up';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Sign up';
      } else {
        return 'Login';
      }
    },
  },
  methods: {
    handleError() {
      this.error = null;
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        !this.usernameValidation ||
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch('signup', {
            userName: this.userName,
            email: this.email,
            password: this.password,
          });
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'mentors'); //checking for the url prop called redirect.

        this.$router.replace(redirectUrl); //redirecting to a variable allows me to change the variable and, therefore,
        // gives me flexibility to different redirections.
      } catch (err) {
        this.error = err.message || 'Failed to authenticate.';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 1.5rem 0 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
