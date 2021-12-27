import Home from "./components/Home";
import SignUp from "./components/SignUp";
import {createRouter, createWebHistory} from 'vue-router'
import Login from "./components/Login";
import Add from "./components/Add";
import update from "./components/update";
import Home2 from "./components/Home2";
import Orders from "./components/Orders";

const routes = [
    {name: 'Home', component: Home, path: '/'},
    {name: 'Home2', component: Home2, path: '/home2'},
    {name: 'Signup', component: SignUp, path: '/sign-up'},
    {name: 'Login', component: Login, path: '/login'},
    {name: 'add', component: Add, path: '/add'},
    {name: 'update', component: update, path: '/update/:id'},
    {name: 'order', component: Orders, path: '/orders'}

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;