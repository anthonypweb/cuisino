import * as VueRouter from "vue-router";

// Pages
import HomePage from "../pages/Home.vue";
import RecipesPage from "../pages/Recipes.vue";
import SingleRecipePage from "../pages/SingleRecipe.vue";
import CategoryPage from "../pages/category.vue";

// Création du router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesPage,
    },
    {
      path: "/recipe/:slug",
      name: "recipe",
      component: SingleRecipePage,
    },
    {
      path: "/category/:category",
      name: "category",
      component: CategoryPage,
    },
  ],
});

// Exportation du router
export default router;
