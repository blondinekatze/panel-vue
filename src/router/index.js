import Vue from 'vue';
import Router from 'vue-router';

const About = () => import('@/pages/About');
const Catalog = () => import('@/pages/Catalog');
const Photo = () => import('@/pages/Photo');
const Video = () => import('@/pages/Video');
const Idle = () => import('@/pages/Idle');
const CatalogCardDetail = () => import('@/pages/CatalogCardDetail');

const AppNotFound = () => import('@/pages/AppNotFound');


import {IDLE_TIME} from '@/utils/constants';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/idle',
            name: 'Idle',
            component: Idle
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/photo',
            name: 'Photo',
            component: Photo
        },
        {
            path: '/video',
            name: 'Video',
            component: Video
        },
        {
            path: '/catalog/:id',
            name: 'CatalogCardDetail',
            component: CatalogCardDetail
        },
        {
            path: '*',
            name: 'AppNotFound',
            component: AppNotFound
        }
    ]
});

router.afterEach((to) => {
    if (to.name !== 'Idle') {
        router.app.$idle
            .stop()
            .reset({
                idle: IDLE_TIME
            })
            .start();
    }
});

export default router;
