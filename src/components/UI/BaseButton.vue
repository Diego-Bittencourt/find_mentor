<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
        type: String,
        required: false,
        default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
        type: String,
        required: false,
        default: '/'
    }
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #b84b03;
  border: 1px solid #b84b03;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  text-align: center;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #b84b03;
  border-color: #b84b03;
}

.flat {
  background-color: transparent;
  color: #b84b03;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #b84b03;
  color: #b84b03;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #ffedd2;
}

.strong {
  background-color: #70322a;
  border-color: #f0f8ff;
  border-radius: 5px;
}

.strong:hover,
.strong:active {
  border-color: #701105;
  background-color: transparent;
  border-radius: 5px;
}

@media screen and (max-width: 750px) {
  .strong {
    background-color: transparent;
    border-color: transparent;
  }
}

@media screen and (max-width: 480px) {
  button,
  a {
    font-size: 0.8rem;
    padding: 0.3rem 0.3rem;
  }

  
}

</style>
