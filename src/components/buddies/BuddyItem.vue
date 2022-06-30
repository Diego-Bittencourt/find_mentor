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
    <transition name="details" mode="out-in">
    <p v-if="detailsIsVisible">{{ description }}</p>
    </transition>

    
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

.details-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}


.details-leave-active,
.details-enter-active {
  transition: all 0.4s ease-out;
}

.details-enter-to,
.details-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.details-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

.details-enter-from {
  opacity: 0;
  transform: translateX(-40px)
}

.details-enter-active {
  transform: all 0.6s ease-in;
}

.details-enter-to {
  opacity: 1;
  transform: translateX(0px);
}



</style>