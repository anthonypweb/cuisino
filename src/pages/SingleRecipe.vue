<template>
  <div class="wrapper recipe">
    <h1 class="title">{{ recipe.attributes.title }}</h1>

    <img :src="recipe.attributes.imageUrl" alt="" />

    <div class="container_recipe">
      <div>
        <h2>Ingrédients</h2>
        <ul>
          <li
            v-for="(ingredient, index) in recipe.attributes.listIngredient"
            :key="index"
          >
            <input type="checkbox" id="ingredient-{{ index }}" />
            <!-- Case à cocher -->
            <label for="ingredient-{{ index }}"
              >{{ ingredient.quantity }} {{ ingredient.units }}
              {{ ingredient.item }}</label
            >
          </li>
        </ul>
      </div>

      <div>
        <h2>Étapes</h2>
        <ol>
          <li v-for="(step, index) in recipe.attributes.steps" :key="index">
            {{ step.step }}
            <!-- Numéro de l'étape -->
          </li>
        </ol>
      </div>

    </div>
  </div>
</template>

<script>
import { useDataStore } from "../store/index";

export default {
  computed: {
    recipe() {
      return this.dataStore.recipes.data.find(
        (recipe) => recipe.attributes.slug == this.$route.params.slug
      );
    },

  },
  setup() {
    const dataStore = useDataStore();
    return { dataStore };
  },
};
</script>

<style scoped>
/* Styles pour la page d'un single de recette */
h1 {
  font-size: 2rem;

  margin: 0 0 20px;
}
.recipe {
  text-align: left;
}
.title {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.recipe img {
  width: 50%;
  max-height: 400px;
  object-fit: cover;
}

img {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}

h2 {
  font-size: 1.5rem;
  margin: 20px 0 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  font-size: 1rem;
  margin: 15px 0;
}

/* Mise en page */
img {
  display: block; /* Pour centrer l'image horizontalement */
  margin: 0 auto;
}

ul {
  margin-left: 20px; /* Ajoute un décalage à gauche pour les listes */
}
ol {
  margin-bottom: 20px;
}

/* Ajoutez d'autres styles personnalisés en fonction de la conception de votre projet */
</style>
