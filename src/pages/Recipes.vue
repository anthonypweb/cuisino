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
  data() {
  return {
    searchQuery: '', // Champ de recherche vide au départ
  }
},
computed: {
    filteredRecipes() {
    const query = this.searchQuery.toLowerCase();
    if (this.dataStore.recipes.data) {
      return this.dataStore.recipes.data.filter(recipe => {
        // Vous pouvez ajuster les critères de filtrage ici
        return (
          recipe.attributes.title.toLowerCase().includes(query)
        );
      });
    } else {
      return []; // Si les données ne sont pas encore disponibles, retournez un tableau vide
    }
    }
}
};
</script>
<template>
  <div>
    <section class="popular_recipes">
      <div class="wrapper">

        <div class="header_all_recipes">
            <h2>Toutes les recettes</h2>
            <input v-model="searchQuery" class="search" placeholder="Rechercher..." type="text">
        </div>

        <div class="container_recipes">
          <div class="card_recipe" v-for="(category, index) in filteredRecipes" :key="index">
         <CardRecipe :category="category.attributes"/>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<style>
.header_all_recipes{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search{
    padding: 10px 20px;
    padding-left: 5px;
}
</style>
