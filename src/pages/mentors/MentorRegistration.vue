<template>
    <section>
        <base-card>
        <h2>Register as a Mentor now!</h2>
        <mentor-form></mentor-form>
        </base-card>
        </section>
</template>

<script>
import MentorForm from '../../components/mentors/MentorForm.vue';
export default {
    components: {
        MentorForm
    }
}
</script>