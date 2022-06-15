<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as a Mentor</router-link>
    </div>

    <ul v-if="hasMentors">
      <li v-for="mentor in filteredMentors" :key="mentor.id">
        {{ mentor.firstName }}
      </li>
    </ul>
    <h3 v-else>No Mentors Found.</h3>
  </section>
</template>

<script>
export default {
    computed: {
        filteredMentors() {
            return this.$store.getters['mentors/mentors'];
        },
        hasMentors() {
          return this.$store.getters['mentors/hasMentors'];
        }
    }
};
</script>

<style scoped></style>
