import { createRouter, createWebHistory } from 'vue-router';
import MentorDetail from './pages/mentors/MentorDetail.vue';
import MentorRegistration from './pages/mentors/MentorRegistration.vue';
import MentorsList from './pages/mentors/MentorsList.vue';
import ContactMentor from './pages/requests/ContactMentor.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/mentors '}, //initial page, redirect to the mentors list
        { path: '/mentors', component: MentorsList},
        { path: '/mentors/:id', component: MentorDetail, children: [
            { path: 'contact', component: ContactMentor }, // mentor/c1/contact
        ]},
        { path: '/registetr', component: MentorRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound }, //router to catch any invalid url.
        

    ],
});

export default router;