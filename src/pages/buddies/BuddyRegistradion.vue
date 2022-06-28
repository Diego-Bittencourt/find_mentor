<template>
  <section>
    <base-card>
      <h2>Create a Code Buddy request</h2>
      <buddy-form @save-project="registerProject"></buddy-form>
    </base-card>
  </section>
</template>

<script>
import BuddyForm from '../../components/buddies/BuddyForm.vue';

export default {
    emits:['register-buddy'],
  components: {
    BuddyForm,
  },
  methods: {
    registerProject(formData) {
      this.$store.dispatch('buddies/registerProject', formData);
      this.$emit('register-buddy')
    //   this.toggleBuddyForm();
    },
  },
};
</script>
