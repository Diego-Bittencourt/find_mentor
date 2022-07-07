<template>
<div>
  <base-dialog :show="!!error" title="An error ocurred" @close="handleError">
    <!--The !! converts the value to a true boolean with same value, true of false.  -->
    <p>
      {{ error }}
    </p>
  </base-dialog>
  <section>
    <mentor-filter @change-filter="setFilter"></mentor-filter>
  </section>

  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadMentors(true)">Refresh</base-button>
        <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to register as a Mentor</base-button>
        <!-- The button above sends a url prop that is being checked to make a specific redirection -->
        <base-button link v-if="isLoggedIn && !isMentor && !isLoading" to="/register"
          >Register as a Mentor</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <!-- Add a carousel of mentor and maybe randomize it to a better UX -->
      <ul v-else-if="hasMentors">
        <mentor-item
          v-for="mentor in filteredMentors"
          :key="mentor.id"
          :id="mentor.id"
          :first-name="mentor.firstName"
          :last-name="mentor.lastName"
          :rate="mentor.hourlyRate"
          :areas="mentor.areas"
        ></mentor-item>
      </ul>
      <h3 v-else>No Mentors Found.</h3>
    </base-card>
  </section>
  </div>
</template>

<script>
import MentorItem from '../../components/mentors/MentorItem.vue';
import MentorFilter from '../../components/mentors/MentorFilter.vue';

export default {
  components: {
    MentorItem,
    MentorFilter,
  },
  computed: {
    isMentor() {
      return this.$store.getters['mentors/isMentor'];
    },
    filteredMentors() {
      const mentors = this.$store.getters['mentors/mentors'];
      return mentors.filter((mentor) => {
        if (this.activeFilters.frontend && mentor.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && mentor.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && mentor.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasMentors() {
      return !this.isLoading && this.$store.getters['mentors/hasMentors'];
    },
    isLoggedIn () {
      return this.$store.getters.isAuthenticated;
    }
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  created() {
    this.loadMentors();
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadMentors(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('mentors/loadMentors', {forceRefresh: refresh});
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    handleError () {
      this.error = null
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
