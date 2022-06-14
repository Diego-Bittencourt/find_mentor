import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/mentors '},
        { path: '/mentors', components: null},
        { path: '/mentors/:id', component: null, children: [
            { path: 'contact', component: null }, // mentor/c1/contact
        ]},
        { path: '/registetr', component: null },
        { path: '/requests', component: null},
        { path: '/:notFound(.*)', component: null},
        

    ],
});

export default router;