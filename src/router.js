import { createRouter, createWebHistory } from 'vue-router';
import MentorDetail from './pages/mentors/MentorDetail.vue';
import MentorRegistration from './pages/mentors/MentorRegistration.vue';
import MentorsList from './pages/mentors/MentorsList.vue';
import BuddiesList from './pages/buddies/BuddiesList.vue';
import ContactMentor from './pages/requests/ContactMentor.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/mentors' }, //initial page, redirect to the mentors list
    { path: '/buddies', component: BuddiesList },
    { path: '/mentors', component: MentorsList },
    {
      path: '/mentors/:id',
      component: MentorDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactMentor }, // mentor/c1/contact
      ],
    },
    { path: '/register', component: MentorRegistration, meta: { requiresAuth: true } }, //using naviation guard to prevent the user
    { path: '/requests', component: RequestReceived, meta: { requiresAuth: true } },    // from accessing certain components the user
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },             // shouldn't be able to.
    { path: '/:notFound(.*)', component: NotFound }, //router to catch any invalid url.
  ],
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/buddies');
  } else {
    next();
  }
})


export default router;
