<script>
export default {
  props: {
    category: Object,
  },
};
</script>

<template>
  <router-link :to="{ name: 'recipe', params: { slug: category.slug } }">
    <div class="card_recipe">
      <img :src="category.imageUrl" :alt="category.name" />
      <h3>{{ category.title }}</h3>
    </div>
  </router-link>
</template>

<style>
.card_recipe {
  transition: transform 0.3s ease-in-out; /* Animation de transformation */
}

.card_recipe:hover {
  transform: scale(1.05); /* Agrandir la carte au survol */
}
</style>
