<template>
  <div>
    <section>
      <base-card>
        <base-button @click="toggleBuddyForm"
          >Create Code Buddy Request</base-button
        >
        <buddy-registration v-if="isBuddyFormVisible" @register-buddy="buddyRegistered">
        </buddy-registration>
      </base-card>
    </section>
    
    <section>
      <buddy-filter @change-filter="setFilters"></buddy-filter>
    </section>
    <base-card>
      <section>
        <section>
      <base-button @click="loadBuddies">Refresh list</base-button>
      
    </section>
        <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
        <ul v-else-if="hasBuddies">
          <buddy-item
            v-for="buddy in loadBuddiesRequests"
            :key="buddy.id"
            :id="buddy.id"
            :buddyname="buddy.name"
            :title="buddy.projectTitle"
            :gitlink="buddy.gitHubLink"
            :tags="buddy.projectTags"
            :description="buddy.projectDescription"
          ></buddy-item>
        </ul>
        
        <h3 v-else>
          There are no Code Buddies requests. Try creating one.
        </h3>
      </section>
    </base-card>
  </div>
</template>

<script>
import BuddyItem from '../../components/buddies/BuddyItem.vue';
import BuddyFilter from '../../components/buddies/BuddyFilter.vue';
import BuddyRegistration from '../../pages/buddies/BuddyRegistradion.vue';

export default {
  components: {
    BuddyItem,
    BuddyFilter,
    BuddyRegistration
  },
  data() {
    return {
      activeFilters: {
        vue: true,
        react: true,
        python: true,
        PHP: true,
        tailwind: true,
        javascript: true,
      },
      isBuddyFormVisible: false,
      isLoading: false
    };
  },
  computed: {
    theListOfBUddies() {
      return this.$store.getters['buddies/loadBuddies'];
    },
    loadBuddiesRequests() {
      const buddies = this.$store.getters['buddies/loadBuddies'];
      return buddies.filter((buddy) => {
        if (this.activeFilters.vue && buddy.projectTags.includes('vue')) {
          return true;
        }
        if (this.activeFilters.react && buddy.projectTags.includes('react')) {
          return true;
        }
        if (this.activeFilters.python && buddy.projectTags.includes('python')) {
          return true;
        }
        if (this.activeFilters.PHP && buddy.projectTags.includes('PHP')) {
          return true;
        }
        if (this.activeFilters.tailwind && buddy.projectTags.includes('tailwind')) {
          return true;
        }
        if (this.activeFilters.javascript && buddy.projectTags.includes('javascript')) {
          return true;
        }
        return false;
      });
    },
    hasBuddies() {
      return !this.isLoading && this.$store.getters['buddies/hasBuddies'];
    },
  },
  created() {
    this.loadBuddies();
  },
  methods: {
    buddyRegistered() {
      this.loadBuddies();
      this.isBuddyFormVisible = false;
    },
    async loadBuddies() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('buddies/loadBuddies');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    toggleBuddyForm() {
      this.isBuddyFormVisible = !this.isBuddyFormVisible;
    },
    registerProject(formData) {
      this.$store.dispatch('buddies/registerProject', formData);
      this.toggleBuddyForm();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
