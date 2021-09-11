import Home from "./components/Home";
import SignUp from "./components/SignUp";
import {createRouter, createWebHistory} from 'vue-router'
import Login from "./components/Login";

const routes = [
    {name: 'Home', component: Home, path: '/'},
    {name: 'Signup', component: SignUp, path: '/sign-up'},
    {name: 'Login', component: Login, path: '/login'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;