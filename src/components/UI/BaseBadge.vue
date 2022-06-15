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
        }
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
  color: white;
}

.backend {
  background-color: #b88e03;
  color: white;
}

.career {
  background-color: #a6b803;
  color: white;
}
</style>