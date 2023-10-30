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
};
</script>
<template>
  <div>
    <header class="hero">
      <div class="hero-content">
        <h1>Bienvenue sur Cuisino</h1>
        <p>Découvrez une expérience culinaire exceptionnelle</p>
        <router-link :to="{ name: 'recipes' }">
          <a href="#menu" class="cta-button">Voir toutes les recettes</a>
        </router-link>
      </div>
    </header>

    <section class="popular_categories">
      <div class="wrapper">
        <h2>Catégories populaires</h2>

        <div class="container_categories">
          <div
            class="content_category"
            v-for="(category, index) in dataStore.categories.data"
            :key="index">
            
            <router-link
              :to="{
                name: 'category',
                params: { category: category.attributes.slug },
              }">

              <img :src="category.attributes.imageUrl" :alt="category.name" />
              <h3>{{ category.attributes.title }}</h3>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="popular_categories">
      <div class="wrapper">
        <h2>Recettes populaires</h2>
        <div class="container_recipes">
          <div
            class="card_recipe"
            v-for="(category, index) in dataStore.recipes.data.slice(0, 6)"
            :key="index"
          >
            <CardRecipe :category="category.attributes" />
          </div>
        </div>

        <router-link :to="{ name: 'recipes' }">
          <a href="#menu" class="cta-button">Voir toutes les recettes</a>
        </router-link>
      </div>
    </section>
    <section class="newsletter">
      <div class="newsletter-content wrapper">
        <h2>Abonnez-vous à notre infolettre</h2>
        <p>
          Restez informé de nos dernières recettes, offres spéciales et plus
          encore.
        </p>
        <form class="newsletter-form">
          <input type="email" placeholder="Votre adresse e-mail" required />
          <button type="submit">S'abonner</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style>

.hero {
  background-color: aqua;
  height: 400px;
}
.container_categories {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}


.popular_categories {
  text-align: center;
  margin-bottom: 100px;
}
.popular_recipes {
  text-align: center;
  margin-bottom: 100px;
}

.center {
  margin-top: 30px;
  margin-bottom: 50px;
}
.content_category {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; /* Animation de transformation */
}
.content_category:hover {
  transform: scale(1.05); /* Agrandir la carte au survol */
}
.content_category img {
  border-radius: 90px;
  width: 120px;
  height: 120px;
  object-fit: cover;
}
.container_categories h3 {
  text-transform: capitalize;
}

.container_recipes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
@media (max-width: 800px) {
  .container_recipes {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 475px) {
  .container_recipes {
    grid-template-columns: 1fr;
  }
}
.card_recipe {
  text-align: left;
}
.card_recipe img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.card_recipe img {
  width: 100%;
}
.hero {
  background-image: url("https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"); /* Remplacez 'background-image.jpg' par le chemin de votre image de fond */
  background-color: rgba(163, 143, 143, 0.8);
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  background-blend-mode: multiply; /* Applique l'effet d'assombrissement */
  height: 400px;
  display: flex;
}
/* Superposition semi-transparente */

.hero-content {
  max-width: 800px;
  margin: auto auto;
}
.hero-content h1 {
  color: white;
}

.cta-button {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  background-color: #e74c3c;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.newsletter {
  margin-top: 30px;
  background-color: #f7f7f7;
  padding: 50px 0;
  text-align: center;
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
}


.newsletter-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="email"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 250px;
}

</style>
