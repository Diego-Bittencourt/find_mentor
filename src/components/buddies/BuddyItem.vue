<template>
  <li>
    <a :href="gitlink" target="_blank"><h2>{{ title }}</h2></a>
    <h4>
        {{ buddyname }}
    </h4>
    <base-badge v-for="tag in tags"
    :key="tag"
    :type="tag"
    :title="tag">
    </base-badge>

    
  </li>
</template>

<script>
export default {
  props: ['id', 'buddyname', 'gitlink', 'title', 'description', 'tags'],
  
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #c25207;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #9c3506;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>