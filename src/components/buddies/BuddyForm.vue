<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !projectTitle.isValid }">
      <label for="title">Project Title</label>
      <input
        type="text"
        id="title"
        v-model.trim="projectTitle.val"
        @input="clearValidity('projectTitle')"
      />
      <p v-if="!projectTitle.isValid" class="errormessage">
        Please, enter a valid Title
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !gitlink.isValid }">
      <label for="gitlink">Repository Link</label>
      <input
        type="url"
        id="gitlink"
        v-model.trim="gitlink.val"
        @input="clearValidity('gitlink')"
      />
      <p v-if="!gitlink.isValid" class="errormessage">
        Please, enter a valid url
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="title">Project Description</label>
      <textarea
        rows="5"
        id="description"
        v-model.trim="description.val"
        @input="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid" class="errormessage">
        Please, enter a valid description
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !techUsed.isValid }">
      <h3>Tecnologies used</h3>
      <div>
        <input
          type="checkbox"
          id="reacttag"
          value="react"
          v-model="techUsed.val"
          @change="clearValidity('techUsed')"
        />
        <label for="reacttag">React</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="vuetag"
          value="vue"
          v-model="techUsed.val"
          @change="clearValidity('techUsed')"
        />
        <label for="vuetag">Vue</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="pythontag"
          value="python"
          v-model="techUsed.val"
          @change="clearValidity('techUsed')"
        />
        <label for="pythontag">Python</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="tailwindtag"
          value="tailwind"
          v-model="techUsed.val"
          @change="clearValidity('techUsed')"
        />
        <label for="tailwindtag">Tailwind</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="PHPtag"
          value="PHP"
          v-model="techUsed.val"
          @change="clearValidity('techUsed')"
        />
        <label for="PHPtag">PHP</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="javascripttag"
          value="javascript"
          v-model="techUsed.val"
          @change="clearValidity('techUsed')"
        />
        <label for="javascripttag">VanillaJavascript</label>
      </div>
      <p v-if="!techUsed.isValid" class="errormessage">
        Please, select at least one technology
      </p>
    </div>
    <base-button>Create Buddy Request</base-button>
    <p v-if="!formIsValid" class="errormessage">
      Please, check if all data is correct.
    </p>
  </form>
  
</template>

<script>
export default {
  emits: ['save-project'],
  data() {
    return {
      projectTitle: {
        isValid: true,
        val: '',
      },
      gitlink: {
        isValid: true,
        val: '',
      },
      description: {
        isValid: true,
        val: '',
      },
      techUsed: {
        isValid: true,
        val: [],
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
      this.formIsValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.projectTitle.val === '') {
        this.projectTitle.isValid = false;
        this.formIsValid = false;
      }

      if (this.gitlink.val === '') {
        this.gitlink.isValid = false;
        this.formIsValid = false;
      }

      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }

      if (this.techUsed.val.length < 1) {
        this.techUsed.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return false;
      }

      const formData = {
        name: this.getUserName,
        title: this.projectTitle.val,
        link: this.gitlink.val,
        description: this.description.val,
        techUsed: this.techUsed.val,
      };
      // console.log(formData);
      this.$emit('save-project', formData);
    },
  },
  computed: {
    getUserName() {
      return this.$store.getters.getUserName;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus {
  background-color: #b6a45694;
  outline: none;
  border-color: #b84b03;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #b84b03 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label,
.invalid h3 {
  color: rgb(243, 16, 16);
}

.invalid input,
.invalid textarea {
  border: 1px solid rgb(252, 4, 4);
}

.errormessage {
  font-size: 0.7rem;
  color: rgb(243, 16, 16);
  font-style: italic;
}
</style>
