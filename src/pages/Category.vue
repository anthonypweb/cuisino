<template>
  <header
    class="hero"
    :style="{
      backgroundImage: `url(${categories[0].attributes.category.data.attributes.urlImage_hero})`,
    }"
  >
    <div class="hero-content">
      <h1>
        {{ categories[0].attributes.category.data.attributes.title_hero }}
      </h1>
      <p>
        {{ categories[0].attributes.category.data.attributes.description_hero }}
      </p>
    </div>
  </header>

  <section class="popular_recipes">
    <div class="wrapper" v-if="categories != null">
      
      <h2>Recettes</h2>
      <div class="container_recipes">
        <div
          class="card_recipe"
          v-for="(category, index) in categories"
          :key="index"
        >
          <CardRecipe :category="category.attributes" />
        </div>
      </div>

    </div>
  </section>

</template>

<script>
import CardRecipe from "../components/CardRecipe.vue";
import { useDataStore } from "../store/index";
export default {
  setup() {
    const dataStore = useDataStore();
    return { dataStore };
  },
  components: {
    CardRecipe,
  },

  computed: {
    categories() {
      const slug = this.$route.params.category;
      const dessertRecipes = this.dataStore.recipes.data.filter(
        (recipe) => recipe.attributes.category.data.attributes.slug == slug
      );

      // Affiche le résultat dans la console

      return dessertRecipes;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.hero {
  margin-top: 40px;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;
  height: 200px;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  margin: 0;
  padding: 0;
}

p {
  font-size: 1.2rem;
  margin: 20px 0;
}

.cta-button {
  display: inline-block;
  background-color: #e74c3c;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #c0392b;
}
</style>
