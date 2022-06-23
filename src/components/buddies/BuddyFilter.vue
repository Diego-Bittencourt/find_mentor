<template>
  <base-card>
    <h2>Find your coding buddy</h2>
    <div class="filter-option">
      <input type="checkbox" id="vue" checked @change="setFilter" />
      <label for="vue">Vue</label>
    </div>
    <div class="filter-option">
      <input type="checkbox" id="react" checked @change="setFilter" />
      <label for="react">React</label>
    </div>
    <div class="filter-option">
      <input type="checkbox" id="python" checked @change="setFilter" />
      <label for="python">Python</label>
    </div>
    <div class="filter-option">
      <input type="checkbox" id="tailwind" checked @change="setFilter" />
      <label for="tailwind">Tailwind</label>
    </div>
    <div class="filter-option">
      <input type="checkbox" id="javascript" checked @change="setFilter" />
      <label for="javascript">Vanilla Javascript</label>
    </div>
    <div class="filter-option">
      <input type="checkbox" id="PHP" checked @change="setFilter" />
      <label for="PHP">PHP</label>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        vue: true,
        react: true,
        python: true,
        PHP: true,
        tailwind: true,
        javascript: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
      },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
