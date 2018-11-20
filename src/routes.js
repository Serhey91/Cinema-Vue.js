import HomePage from './HomePage.vue'
import VueRouter from 'vue-router';
import MovieDetail from './MovieDetail.vue'
const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/movie/:id',
        component: MovieDetail,
        name: 'movie'
    },
    {
        path: '*',
        redirect: { name: 'home' }
    }
];

export default new VueRouter({ routes });
