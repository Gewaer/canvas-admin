import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/dashboard";
import Auth from "@/views/users/auth";
import store from "@/store";
import BrowseAppsList from "./views/apps-browse/";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/users/login",
            name: "login",
            component: Auth,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/users/signup",
            name: "signup",
            component: Auth,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/users/forgot-password",
            name: "forgotPassword",
            component: Auth,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/users/reset-password/:resetKey",
            name: "resetPassword",
            component: Auth,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "*",
            name: "404",
            component: () => import(/* webpackChunkName: "error-404" */ "./views/errors/error-404"),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/forbidden",
            name: "403",
            component: () => import(/* webpackChunkName: "error-404" */ "./views/errors/error-403"),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/apps",
            name: "apps-browse",
            component: BrowseAppsList,
            meta: {
                requiresAuth: true
            }
        },
        // ===== Admin App Details =====
        {
            path: "/app/:id/info",
            name: "adminAppInfo",
            component: () => import(/* webpackChunkName: "admin-app-info" */ "./views/app-details/general-information"),
            meta: {
                group: "appDetails",
                requiresAuth: true
            }
        },
        {
            path: "/app/:id/roles",
            name: "adminAppRoles",
            component: () => import(/* webpackChunkName: "admin-app-roles" */ "./views/app-details/acl-roles"),
            meta: {
                group: "appDetails",
                requiresAuth: true
            }
        },
        {
            path: "/app/:id/subscriptions",
            name: "adminAppSubscriptions",
            component: () => import(/* webpackChunkName: "admin-app-subscriptions" */ "./views/app-details/subscriptions"),
            meta: {
                group: "appDetails",
                requiresAuth: true
            }
        },
        {
            path: "/app/:id/modules",
            name: "adminAppModules",
            component: () => import(/* webpackChunkName: "admin-app-modules" */ "./views/app-details/system-modules"),
            meta: {
                group: "appDetails",
                requiresAuth: true
            }
        },
        {
            path: "/app/:id/companies",
            name: "adminAppCompaniesList",
            component: () => import(/* webpackChunkName: "admin-app-modules" */ "./views/app-details/manager/list"),
            meta: {
                group: "appDetails",
                requiresAuth: true
            }
        },
        {
            path: "/app/:id/companies/edit",
            name: "adminAppCompaniesEdit",
            component: () => import(/* webpackChunkName: "admin-app-modules" */ "./views/app-details/manager/form"),
            meta: {
                group: "appDetails",
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth == true)) {
        if (store.getters["Application/isStateReady"]) {
            next();
        } else {
            store.dispatch("Application/getGlobalStateData").then(() => {
                next();
            }).catch(() => {
                next({
                    name: "login",
                    query: {
                        redirect: to.fullPath
                    }
                });
            });
        }
    } else {
        next();
    }
});

export default router;
