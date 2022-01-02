import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Login from "./components/Login.vue";
import Update from "./components/UpdateRestraunts.vue";
import Add from "./components/AddRestraunts.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "About",
    component: About,
    path: "/about",
  },
  {
    name: "Contact",
    component: Contact,
    path: "/contact",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
