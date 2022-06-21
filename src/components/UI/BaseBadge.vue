<template>
    <span class="badge" :class="type">
        {{ title }}
    </span>
</template>

<script>
export default {
    props: ['type', 'title'],
    computed: {
        text() {
            return this.title.toUpperCase();
        },
        
    }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #b84b03;
  color: #ddd;
}

.backend {
  background-color: #b88e03;
  color: #ddd;
}

.career {
  background-color: #a6b803;
  color: #ddd;
}

.react {
  background-color: #0324b8 ;
  color: #ddd;
}

.vue {
  background-color: #07cf61;
  color: #ddd;
}

.javascript {
  background-color: #ffe70a;
  color: #ddd;
}

.PHP {
  background-color: #5c5d5e;
  color: #ddd;
}

.component {
  background-color: #ae00da;
  color: #ddd;
}

.hooks {
  background-color: rgb(177, 175, 175);
  color: #252525;
}
</style>