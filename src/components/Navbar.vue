<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">
        <h1>Cuisino</h1>
      </router-link>
      <ul>
        <router-link :to="{ name: 'home' }">
          <a>Accueil</a>
        </router-link>

        <router-link :to="{ name: 'recipes' }" tag="li">
          <a>Recettes</a>
        </router-link>

        <router-link to="#"><a>Blog</a></router-link>
        <router-link to="#"><a>Contact</a></router-link>

      </ul>
    </nav>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

nav {
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
nav ul {
  display: flex;
  gap: 30px;
}
a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}
</style>
