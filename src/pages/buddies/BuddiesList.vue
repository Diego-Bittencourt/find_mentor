<template>
  <div>
    <section>
      <base-card>
        <base-button @click="toggleBuddyForm"
          >Create Code Buddy Request</base-button
        >
        <buddy-registration v-if="isBuddyFormVisible" @buddy-form-off="toggleBuddyForm">
        </buddy-registration>
      </base-card>
    </section>
    <section>
      <button @click="loadBuddies">Refresh list</button>
    </section>
    <section>
      <buddy-filter @change-filter="setFilters"></buddy-filter>
    </section>
    <base-card>
      <section>
        <h3 v-if="hasBuddies">
          There are no Code Buddies requests. Try creating one.
        </h3>
        <ul>
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
      </section>
    </base-card>
  </div>
</template>

<script>
import BuddyItem from '../../components/buddies/BuddyItem.vue';
import BuddyFilter from '../../components/buddies/BuddyFilter.vue';
// import BuddyForm from '../../components/buddies/BuddyForm.vue';
import BuddyRegistration from '../../pages/buddies/BuddyRegistradion.vue';

export default {
  components: {
    BuddyItem,
    BuddyFilter,
    // BuddyForm,
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
    };
  },
  computed: {
    loadBuddiesRequests() {
      const buddies = this.$store.getters['buddies/loadBuddies'];
      
      let filteredBuddies = buddies.filter((buddy) => {
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
      console.log(filteredBuddies)
      return filteredBuddies
    },
    hasBuddies() {
      return this.$store.getters['buddies/hasBuddies'];
    },
  },
  created() {
    this.$store.dispatch('buddies/loadBuddies');
  },
  methods: {
    loadBuddies() {
      this.$store.dispatch('buddies/loadBuddies');
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
