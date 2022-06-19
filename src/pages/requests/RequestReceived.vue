<template>
  <section>
    <base-card>
      <h2>Requests received</h2>
      <ul>
        <li>{{ receivedRequests }}</li>
      </ul>
      <h3>You haven't received any requests yet.</h3>
    </base-card>
  </section>
</template>

<script>
export default {
    computed: {
        receivedRequests() {
            return this.$store.getters('requests/receivedRequests');
        }
    }
}
</script>


<style scoped>
header {
  text-align: center;
}

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