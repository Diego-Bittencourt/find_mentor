<template>
  <section>
    <base-card>
      <h2>Register as a Mentor now!</h2>
      <mentor-form @save-data="saveData"></mentor-form>
    </base-card>
  </section>
</template>

<script>
import MentorForm from '../../components/mentors/MentorForm.vue';
export default {
  components: {
    MentorForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('mentors/registerMentor', data);
      this.$router.replace('/mentors');
      //the replace doesn't let the user go back to the previous page.
    },
  },
};
</script>
