<template>
    <span class="badge" :class="type">
        {{ text }}
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
  margin-top: 0.5rem;
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
  background-color: #069c4a;
  color: rgb(240, 239, 239);
}

.javascript {
  background-color: #ffe70a;
  color: rgb(36, 35, 35);
}

.PHP {
  background-color: #5c5d5e;
  color: #ddd;
}

.python {
  background-color: #ae00da;
  color: #ddd;
}

.tailwind {
  background-color: rgb(177, 175, 175);
  color: #252525;
}

@media screen and (max-width: 480px) {
  span {
    font-size: 0.8rem;
  }
}
</style>