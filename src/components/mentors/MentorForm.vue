<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" @input="clearValidity('firstName')"/>
      <p class="errormessage" v-if="!firstName.isValid">First name must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName.val" @input="clearValidity('lastName')"/>
      <p class="errormessage" v-if="!lastName.isValid">Last name must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description.val" @input="clearValidity('description')"></textarea>
      <p class="errormessage" v-if="!description.isValid">The description must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Hourly rate</label>
      <input type="number" id="rate" v-model="rate.val" @input="clearValidity('rate')"/>
      <p class="errormessage" v-if="!rate.isValid">The hourly rate must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Areas of expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')"/>
        <label for="frontend">Frontend development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')"/>
        <label for="backend">Backend development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')"/>
        <label for="career">Career Advisory</label>
      </div>
      <p class="errormessage" v-if="!areas.isValid">You must select at least one area of expertise.</p>
    </div>
    <p class="errormessage" v-if="!formIsValid">Please, fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
      this.formIsValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
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
