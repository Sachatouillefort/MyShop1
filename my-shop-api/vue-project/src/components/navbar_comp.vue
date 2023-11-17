<template>
    <div>
      <!-- Barre de navigation -->
      <nav class="flex justify-center p-4 bg-gray-800">
        <button @click="afficherProduits" class="text-white mx-2 focus:outline-none">Products</button>
        <button @click="afficherCategories" class="text-white mx-2 focus:outline-none">Categories</button>
        <button @click="afficherUtilisateurs" class="text-white mx-2 focus:outline-none">Users</button>
      </nav>
  
      <!-- Contenu dynamique en fonction du bouton cliqué -->
      <div class="mt-4">
        <!-- Contenu de la page "Products" -->
        <div v-if="pageActuelle === 'products'">
          <h2>Liste des Produits</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom du Produit</th>
                <!-- Ajoutez d'autres colonnes au besoin -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="produit in produits" :key="produit.id">
                <td>{{ produit.id }}</td>
                <td>{{ produit.nom }}</td>
                <!-- Ajoutez d'autres colonnes au besoin -->
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Contenu de la page "Categories" -->
        <div v-if="pageActuelle === 'categories'">
          <h2>Contenu de la page Categories</h2>
          <!-- Ajoutez le contenu spécifique à la page "Categories" ici -->
        </div>
  
        <!-- Contenu de la page "Users" -->
        <div v-if="pageActuelle === 'users'">
          <h2>Contenu de la page Users</h2>
          <!-- Ajoutez le contenu spécifique à la page "Users" ici -->
          <router-link to="/register" class="link link-underline-hover">Register new account</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pageActuelle: 'products', // Page par défaut
        produits: [], // Pour stocker les produits récupérés de l'API
      };
    },
    methods: {
      async afficherProduits() {
        this.pageActuelle = 'products';
  
        // Faites une requête GET pour récupérer les produits depuis votre API
        try {
          const response = await axios.get('http://localhost/api/products'); // Remplacez par l'URL réelle de votre API
  
          // Mettez à jour le tableau de produits avec les données de l'API
          this.produits = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des produits:', error.message);
        }
      },
      afficherCategories() {
        this.pageActuelle = 'categories';
      },
      afficherUtilisateurs() {
        this.pageActuelle = 'users';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles CSS spécifiques au besoin */
  </style>
  