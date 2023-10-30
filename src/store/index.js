import { defineStore } from 'pinia';
import axios from 'axios'; // Importez Axios

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    recipes: [],
    categories: [],
    errorMessage: '',
    isLoadingRecipes: false,
  }),
  

  actions: {
    async fetchRecipes() {

      try {
        const apiUrl = 'http://localhost:1337/api/recipes?populate=*';

        // Utilisation d'Axios pour effectuer une requête GET vers l'API
        const response = await axios.get(apiUrl);

        // Vérification de la réponse HTTP (statut 200 signifie succès)
        if (response.status === 200) {
          // Les données des voyages sont dans response.data
          this.recipes = response.data;
        } else {
          this.errorMessage = 
          'Erreur lors de la récupération des recettes depuis l\'API';
        }
      } catch (error) {
        this.errorMessage = 
        'Erreur lors de la récupération des recettes depuis l\'API : ' + error.message;
      }
    },
    async fetchCategories() {

      try {
        const apiUrl = 'http://localhost:1337/api/categories'; // Exemple d'URL

        // Utilisation d'Axios pour effectuer une requête GET vers l'API
        const response = await axios.get(apiUrl);

        // Vérification de la réponse HTTP (statut 200 signifie succès)
        if (response.status === 200) {
          // Les données des voyages sont dans response.data
          this.categories = response.data;
        } else {
          this.errorMessage = 'Erreur lors de la récupération des recettes depuis l\'API';
        }
      } catch (error) {
        this.errorMessage = 'Erreur lors de la récupération des recettes depuis l\'API : ' + error.message;
      }
    },
   
}
});
