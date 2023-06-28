import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import {createRouter, createWebHistory} from "vue-router";
import TeamPage from "@/pages/TeamPage";
import PlayerSoccer from "@/pages/PlayerSoccer";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path:'/times',
        name: 'Times',
        component: TeamPage
    },{
        path:'/jogadores',
        name: 'Jogadores',
        component: PlayerSoccer
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: AboutPage
    },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});