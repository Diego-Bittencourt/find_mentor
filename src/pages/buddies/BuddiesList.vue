<template>
  <div>
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
            :buddyname="buddy.buddyName"
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

export default {
  components: {
    BuddyItem,
    BuddyFilter,
  },
  data () {
    return {
      activeFilters: {
        vue: true,
        react: true,
        component: true,
        PHP: true,
        hooks: true,
        javascript: true,
      }
    }
  },
  computed: {
    loadBuddiesRequests() {
      const buddies = this.$store.getters['buddies/loadBuddies'];
      return buddies.filter((buddy) => {
        if (this.activeFilters.vue && buddy.projectTags.includes('vue')) {
          return true;
        }
        if (this.activeFilters.react && buddy.projectTags.includes('react')) {
          return true;
        }
        if (this.activeFilters.component && buddy.projectTags.includes('component')) {
          return true;
        }
        if (this.activeFilters.PHP && buddy.projectTags.includes('PHP')) {
          return true;
        }
        if (this.activeFilters.hooks && buddy.projectTags.includes('hooks')) {
          return true;
        }
        if (this.activeFilters.javascript && buddy.projectTags.includes('javascript')) {
          return true;
        }
        return false;
      })
      
    },
    hasBuddies() {
      return this.$store.getters['buddies/hasBuddies'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      console.log(updatedFilters)
      this.activeFilters = updatedFilters;
    }
  }
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
