<template>
  <li>
    <h3>{{ fulName }}</h3>
    <h4>${{ rate }}</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
        >{{ area }}</base-badge
      >
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="mentorContactLink"
        >Contact</base-button
      >
      <base-button link :to="mentorDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fulName() {
      return this.firstName + ' ' + this.lastName;
    },
    mentorContactLink() {
      return this.$route.path + '/' + this.id + '/contact'; // /mentors/c1/contact
    },
    mentorDetailsLink() {
      return this.$route.path + '/' + this.id; // /mentors/c1
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
}
</style>
