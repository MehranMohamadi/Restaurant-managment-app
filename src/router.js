import Home from "./components/Home";
import SignUp from "./components/SignUp";
import {createRouter, createWebHistory} from 'vue-router'
import Login from "./components/Login";
import Add from "./components/Add";
import update from "./components/update";

const routes = [
    {name: 'Home', component: Home, path: '/'},
    {name: 'Signup', component: SignUp, path: '/sign-up'},
    {name: 'Login', component: Login, path: '/login'},
    {name: 'add', component: Add, path: '/add'},
    {name: 'update', component: update, path: '/update/:id'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;