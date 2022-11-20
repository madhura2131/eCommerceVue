import Vue from "vue";
import VueRouter from "vue-router";
import Reviews from "../views/Reviews.vue";
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import CheckOut from "../views/CheckOut.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  },
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckOut,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
