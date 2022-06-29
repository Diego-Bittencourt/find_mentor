<template>
  <li>
    <div class="titlebanner">
    <a :href="gitlink" target="_blank"><h2>{{ title }}</h2></a>
    <base-button mode="flat" @click="toggleDetails" v-if="!detailsIsVisible">Show More</base-button>
    <base-button mode="flat" @click="toggleDetails" v-else>Show Less</base-button>
    </div>
    
    <h4>
        By {{ buddyname }}
    </h4>
    
    <base-badge v-for="tag in tags"
    :key="tag"
    :type="tag"
    :title="tag">
    </base-badge>
    <br>
    
    <p v-if="detailsIsVisible">{{ description }}</p>

    
  </li>
</template>

<script>
export default {
  props: ['id', 'buddyname', 'gitlink', 'title', 'description', 'tags'],
  data () {
    return {
      detailsIsVisible: false
    }
  },
  methods: {
    toggleDetails () {
      this.detailsIsVisible = !this.detailsIsVisible;
    }
  }
  
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

.titlebanner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>