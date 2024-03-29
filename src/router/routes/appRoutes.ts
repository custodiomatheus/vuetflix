export default [
  {
    path: "/",
    name: "App",
    component: () => import("@/views/app/index.vue"),
    redirect() {
      return { name: "Home" };
    },
    meta: {
      public: false,
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/app/Home.vue"),
      },
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/app/Home.vue"),
      },
      {
        path: "/movies",
        name: "Movies",
        component: () => import("@/views/app/Movies.vue"),
      },
      {
        path: "/tvs",
        name: "Tvs",
        component: () => import("@/views/app/Tvs.vue"),
      },
      {
        path: "/search",
        name: "Search",
        component: () => import("@/views/app/Search.vue"),
      },
    ],
  },
];
