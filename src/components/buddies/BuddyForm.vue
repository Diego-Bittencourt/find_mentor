<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="title">Project Title</label>
      <input type="text" id="title" v-model.trim="projectTitle.val" />
      <p v-if="projectTitle.isValid">Please, enter a valid Title</p>
    </div>
    <div class="form-control">
      <label for="gitlink">Repository Link</label>
      <input type="url" id="gitlink" v-model.trim="gitlink.val"/>
      <p v-if="gitlink.isValid">Please, enter a valid url</p>
    </div>
    <div class="form-control">
      <label for="title">Project Description</label>
      <textarea rows="5" id="description" v-model.trim="description.val"></textarea>
      <p v-if="description.isValid">Please, enter a valid description</p>
    </div>
    <div class="form-control">
      <h3>Tecnologies used</h3>
      <div>
        <input type="checkbox" id="react" value="react" v-model="techUsed.val" />
        <label for="react">React</label>
      </div>
      <div>
        <input type="checkbox" id="vue" value="vue" v-model="techUsed.val"/>
        <label for="vue">Vue</label>
      </div>
      <div>
        <input type="checkbox" id="components" value="components" v-model="techUsed.val"/>
        <label for="components">Components</label>
      </div>
      <div>
        <input type="checkbox" id="hooks" value="hooks" v-model="techUsed.val"/>
        <label for="hooks">Hooks</label>
      </div>
      <div>
        <input type="checkbox" id="PHP" value="PHP" v-model="techUsed.val"/>
        <label for="PHP">PHP</label>
      </div>
      <div>
        <input type="checkbox" id="javascript" value="javascript" v-model="techUsed.val"/>
        <label for="javascript">VanillaJavascript</label>
      </div>
      <!-- <p v-if="techUsed.isValid">Please, select at least one technology</p> -->
    </div>
    <base-button>Create Buddy Request</base-button>
  </form>
</template>

<script>
export default {
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
    submitForm() {
      
      if (!this.formIsValid) {
        return false;
      }

      const formData = {
        title: this.projectTitle.val,
        link: this.gitlink.val,
        description: this.description,
        techUsed: this.techUsed.val
      }
      console.log(formData);
      this.$emit('save-project', formData);
    }
  }
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

.invalid label {
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
