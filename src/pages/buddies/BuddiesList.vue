<template>
  <base-card>
    <section>
      <h3 v-if="hasBuddies">There are no Code Buddies requests. Try creating one.</h3>
      <ul>
        <buddy-item 
        v-for="buddy in loadBuddiesRequests"
        :key="buddy.id"
        :id="buddy.id"
        :buddyname="buddy.buddyName"
        :title="buddy.projectTitle"
        :gitlink="buddy.gitHubLink"
        :tags="buddy.projectTags"
        :description="buddy.projectDescription"></buddy-item>
      </ul>
    </section>
  </base-card>
</template>

<script>
import BuddyItem from '../../components/buddies/BuddyItem.vue';

export default {
  components: {
    BuddyItem
  },
  computed: {
    loadBuddiesRequests() {
      return this.$store.getters['buddies/loadBuddies'];
    },
    hasBuddies() {
      return this.$store.getters['buddies/hasBuddies'];
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
