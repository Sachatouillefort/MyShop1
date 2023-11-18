<template>
    <div>
      <h1>Liste des Produits</h1>
      
      <!-- Affichage de la liste des produits -->
      <ul>
        <li v-for="produit in produits" :key="produit.id">
          {{ produit.nom }} - {{ produit.description }}
          <button @click="editerProduit(produit)">Editer</button>
          <button @click="supprimerProduit(produit.id)">Supprimer</button>
        </li>
      </ul>
      
      <!-- Formulaire pour ajouter ou éditer un produit -->
      <form @submit.prevent="soumettreFormulaire">
        <label for="nom">Nom du Produit:</label>
        <input type="text" v-model="formulaireProduit.nom" required>
  
        <label for="description">Description du Produit:</label>
        <textarea v-model="formulaireProduit.description" required></textarea>
  
        <button type="submit" v-if="!edition">Ajouter Produit</button>
        <button type="submit" v-if="edition">Mettre à jour Produit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        produits: [],
        formulaireProduit: {
          nom: '',
          description: ''
        },
        edition: false
      };
    },
    mounted() {
      // Charger la liste des produits au montage du composant
      this.chargerProduits();
    },
    methods: {
      chargerProduits() {
        // Appel à l'API avec Axios en utilisant la méthode GET
        axios.get('https://components/api/produits')
          .then(response => {
            // Accéder aux produits via hydra:member
            this.produits = response.data['hydra:member'];
          })
          .catch(error => {
            console.error('Erreur lors du chargement des produits:', error);
          });
      },
      soumettreFormulaire() {
        if (!this.edition) {
          // Ajouter un nouveau produit avec la méthode POST
          axios.post('https://components/api/produits', this.formulaireProduit)
            .then(response => {
              // Mise à jour de la liste des produits avec la nouvelle liste renvoyée par l'API
              this.produits = response.data['hydra:member'];
              
              // Réinitialiser le formulaire
              this.formulaireProduit = {
                nom: '',
                description: ''
              };
            })
            .catch(error => {
              console.error('Erreur lors de l\'ajout du produit:', error);
            });
        } else {
          // Mettre à jour le produit avec la méthode PUT
          axios.put(`https://components/api/produits/${this.formulaireProduit.id}`, this.formulaireProduit)
            .then(response => {
              // Mise à jour de la liste des produits avec la nouvelle liste renvoyée par l'API
              this.produits = response.data['hydra:member'];
              
              // Réinitialiser le formulaire et le mode d'édition
              this.formulaireProduit = {
                nom: '',
                description: ''
              };
              this.edition = false;
            })
            .catch(error => {
              console.error('Erreur lors de la mise à jour du produit:', error);
            });
        }
      },
      editerProduit(produit) {
        // Pré-remplir le formulaire avec les données du produit sélectionné pour l'édition
        this.formulaireProduit = { ...produit };
        this.edition = true;
      },
      supprimerProduit(id) {
        // Supprimer le produit avec la méthode DELETE
        axios.delete(`https://components/api/produits/${id}`)
          .then(response => {
            // Mise à jour de la liste des produits avec la nouvelle liste renvoyée par l'API
            this.produits = response.data['hydra:member'];
          })
          .catch(error => {
            console.error('Erreur lors de la suppression du produit:', error);
          });
      }
    }
  };
  </script>  
  
 
<style>
</style>