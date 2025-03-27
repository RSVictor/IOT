import { createRouter, createWebHistory } from 'vue-router'
import Persons from '../views/Character.vue'
import Management from '../views/Management.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            component: Persons,
            path: '/',
            name: 'persons'
        },
        {
            component: Management,
            path: '/management',
            name: 'management'
        },
        {
            component: NotFound,
            path: '/pathMatch(.*)*'            
        }
    ],
})

export default router