<script>
import { useDataStore } from "./store/index";
import Navbar from "./components/Navbar.vue";
export default {
  setup() {
    const dataStore = useDataStore();
    return { dataStore };
  },
  created() {
    useDataStore().fetchRecipes();
    useDataStore().fetchCategories();
  },
  components: {
    Navbar,
  },
};
</script>

<template>
  <div>
    <div>
      <Navbar />
    </div>
    <router-view></router-view>

    <footer>
      <h3>Création Anthony Poirier</h3>
    </footer>
  </div>
</template>
