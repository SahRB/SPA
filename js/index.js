import { Router } from './router.js';

const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  404: "/pages/404.html",
};

const router = new Router();

Object.entries(routes).forEach(([route, page]) => {
  router.add(route, page);
});

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
