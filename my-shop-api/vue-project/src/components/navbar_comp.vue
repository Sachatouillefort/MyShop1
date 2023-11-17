<template>
    <div>
    <div>
      <!-- Barre de navigation -->
      <nav class="flex justify-center p-4 bg-gray-800">
        <button @click="afficherProduits" class="text-white mx-2 focus:outline-none">Products</button>
        <button @click="afficherCategories" class="text-white mx-2 focus:outline-none" style="margin-left: 20px; margin-right: 20px;">Categories</button>
        <button @click="afficherUtilisateurs" class="text-white mx-2 focus:outline-none">Users</button>
      </nav>
  
      <!-- Contenu dynamique en fonction du bouton cliqué -->
      <div class="mt-4">
        <!-- Contenu de la page "Products" -->
        <div v-if="pageActuelle === 'products'">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom du Produit</th>
                <th>Catégories</th>
                <th>Actions</th>
                <!-- Ajoutez d'autres colonnes au besoin -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="produit in produits" :key="produit.id">
                <td>{{ produit.id }}</td>
                <td>{{ produit.name }}</td>
                <td>{{ produit.categories.join(', ') }}</td> 
                <!-- Assurez-vous que categories est un tableau -->
                <td>
                  <!-- Boutons d'actions -->
                  <button @click="editerProduit(produit)">Editer/</button>
                  <button @click="supprimerProduit(produit.id)">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="showEditModalProduit">
            <div class="modal-overlay">
            <div class="modal">
                <h2>Édition de produit</h2>
                <form @submit.prevent="validerEditionProduit">
                <!-- Ajoutez les champs nécessaires pour l'édition -->
                <label>Nouveau nom :</label>
                <input v-model="nouveauNomProduit" required />
                <!-- Ajoutez d'autres champs au besoin -->
                <button type="submit">Valider</button>
                <button @click="annulerEditionProduit">Annuler</button>
                </form>
            </div>
            </div>
        </div>
        <!-- Contenu de la page "Categories" -->
        <div v-if="pageActuelle === 'categories'">
          <!-- Ajoutez le contenu spécifique à la page "Categories" ici -->
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom de categories</th>
                <th>Actions</th>
                <!-- Ajoutez d'autres colonnes au besoin -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="categories in categories" :key="categories.id">
                <td>{{ categories.id }}</td>
                <td>{{ categories.name }}</td>
                <td>
                  <!-- Boutons d'actions -->
                  <button @click="editerCategorie(categories)">Editer/</button>
                  <button @click="supprimerCategorie(categories.id)">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Contenu de la page "Users" -->
        <div v-if="pageActuelle === 'users'">
          <!-- Ajoutez le contenu spécifique à la page "Users" ici -->
          <button> <router-link to="/register" @click="signIn" type="button" class="btn btn-primary w-full">new account</router-link> </button>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Mail</th>
                <!-- Ajoutez d'autres colonnes au besoin -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="users in users" :key="users.id">
                <td>{{ users.fullName }}</td>
                <td>{{ users.email }}</td>
                <td>
                  <!-- Boutons d'actions -->
                  <button @click="editerUser(users)">Editer/</button>
                  <button @click="supprimerProduit(users.id)">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="showEditModalUtilisateur">
      <div class="modal-overlay">
        <div class="modal">
          <h2>Édition de l'utilisateur</h2>
          <form @submit.prevent="validerEditionUtilisateur">
            <label>Nouveau nom :</label>
            <input v-model="nouveauNomUtilisateur" required />
            <!-- Ajoutez d'autres champs au besoin -->
            <button type="submit">Valider</button>
            <button @click="annulerEditionUtilisateur">Annuler</button>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div v-if="showEditModalCategorie">
    <div class="modal-overlay">
      <div class="modal">
        <h2>Édition de catégorie</h2>
        <form @submit.prevent="validerEditionCategorie">
          <!-- Ajoutez les champs nécessaires pour l'édition -->
          <label>Nouveau nom :</label>
          <input v-model="nouveauNomCategorie" required />
          <!-- Ajoutez d'autres champs au besoin -->
          <button type="submit">Valider</button>
          <button @click="annulerEditionCategorie">Annuler</button>
        </form>
      </div>
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
        categories: [],
        users: [],
        showEditModalCategorie: false,
        categorieEnEdition: null,
        nouveauNomCategorie: '',
        showEditModalProduit: false,  // Ajout de la propriété pour afficher le modal d'édition du produit
        produitEnEdition: null,       // Ajout de la propriété pour stocker le produit en cours d'édition
        nouveauNomProduit: '',
        showEditModalUtilisateur: false,  // Propriété pour afficher le modal d'édition de l'utilisateur
        utilisateurEnEdition: null,       // Propriété pour stocker l'utilisateur en cours d'édition
        nouveauNomUtilisateur: '',       
    };
  },
    methods: {
      async afficherProduits() {
        this.pageActuelle = 'products';

        // Faites une requête GET pour récupérer les produits depuis votre API
        try {
          const response = await axios.get('http://localhost/api/products'); // Remplacez par l'URL réelle de votre API
  
          // Mettez à jour le tableau de produits avec les données de l'API
          this.produits = response.data['hydra:member'];
        } catch (error) {
          console.error('Erreur lors de la récupération des produits:', error.message);
        }
      },




    async afficherCategories() {
       this.pageActuelle = 'categories';

        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw';

        const url = 'http://localhost/api/categories'; // Remplacez par l'URL réelle de votre API

        try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des catégories: ${response.status}`);
        }

        const data = await response.json();
        this.categories = data['hydra:member'];
        } catch (error) {
        console.error(error.message);
        }
    },




      async afficherUtilisateurs() {
        this.pageActuelle = 'users';
        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw';

        const url = 'http://localhost/api/users'; // Remplacez par l'URL réelle de votre API

        try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des catégories: ${response.status}`);
        }

        const data = await response.json();
        this.users = data['hydra:member'];
        } catch (error) {
        console.error(error.message);
        }
        },


      async supprimerProduit(produitId) {
        // Mettez en œuvre la logique de suppression ici
        // Vous pouvez demander une confirmation à l'utilisateur avant de supprimer
        if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
          try {
            // Faites une requête DELETE pour supprimer le produit de votre API
            await axios.delete(`http://localhost/api/products/${produitId}`); // Remplacez par l'URL réelle de votre API
  
            // Mettez à jour la liste des produits après la suppression
            this.produits = this.produits.filter(produit => produit.id !== produitId);
          } catch (error) {
            console.error('Erreur lors de la suppression du produit:', error.message);
          }
        }
      },
    


    editerCategorie(categorie) {
      this.categorieEnEdition = categorie;
      this.nouveauNomCategorie = categorie.name;
      this.showEditModalCategorie = true;
    },

    annulerEditionCategorie() {
      this.showEditModalCategorie = false;
      this.categorieEnEdition = null;
      this.nouveauNomCategorie = '';
    },

    async validerEditionCategorie() {
      try {
        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw';

        const response = await fetch(`http://localhost/api/categories/${this.categorieEnEdition.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            name: this.nouveauNomCategorie,
          }),
        });


        if (!response.ok) {
          throw new Error(`Erreur lors de la mise à jour de la catégorie: ${response.status}`);
        }

        // Mettez à jour la liste des catégories après l'édition
        this.categories = this.categories.map((categorie) =>
          categorie.id === this.categorieEnEdition.id
            ? { ...categorie, name: this.nouveauNomCategorie }
            : categorie
        );

        this.annulerEditionCategorie();
      } catch (error) {
        console.error('Erreur lors de la mise à jour de la catégorie:', error.message);
      }
    },

    async supprimerCategorie(categorieId) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
        try {
          const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw';

          const response = await fetch(`http://localhost/api/categories/${categorieId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${authToken}`, 
            },
          });

          if (!response.ok) {
            throw new Error(`Erreur lors de la suppression de la catégorie: ${response.status}`);
          }

          // Mettez à jour la liste des catégories après la suppression
          this.categories = this.categories.filter((categorie) => categorie.id !== categorieId);
        } catch (error) {
          console.error('Erreur lors de la suppression de la catégorie:', error.message);
        }
      }
    },


    editerProduit(produit) {
      this.produitEnEdition = produit;
      this.nouveauNomProduit = produit.name;
      this.showEditModalProduit = true;
    },

    annulerEditionProduit() {
      this.showEditModalProduit = false;
      this.produitEnEdition = null;
      this.nouveauNomProduit = '';
    },

    async validerEditionProduit() {
      try {
        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw';

        const response = await fetch(`http://localhost/api/products/${this.produitEnEdition.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            name: this.nouveauNomProduit,
            
            // Ajoutez d'autres champs au besoin
          }),
        });


        if (!response.ok) {
          throw new Error(`Erreur lors de la mise à jour du produit: ${response.status}`);
        }

        // Mettez à jour la liste des produits après l'édition
        this.produits = this.produits.map((produit) =>
          produit.id === this.produitEnEdition.id
            ? { ...produit, name: this.nouveauNomProduit }
            : produit
        );

        this.annulerEditionProduit();
      } catch (error) {
        console.error('Erreur lors de la mise à jour du produit:', error.message);
      }
    },

    async supprimerProduit(produitId) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        try {
          const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw';

          const response = await fetch(`http://localhost/api/products/${produitId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${authToken}`, // Assurez-vous de définir correctement votre jeton d'authentification
            },
          });

          if (!response.ok) {
            throw new Error(`Erreur lors de la suppression du produit: ${response.status}`);
          }

          // Mettez à jour la liste des produits après la suppression
          this.produits = this.produits.filter((produit) => produit.id !== produitId);
        } catch (error) {
          console.error('Erreur lors de la suppression du produit:', error.message);
        }
      }
    },
        async afficherUtilisateurs() {
      this.pageActuelle = 'users';

      const authToken = 'YOUR_AUTH_TOKEN'; // Remplacez par votre token d'authentification
      const url = 'http://localhost/api/users'; // Remplacez par l'URL réelle de votre API

      try {
        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw';

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors de la récupération des utilisateurs: ${response.status}`);
        }

        const data = await response.json();
        this.users = data['hydra:member'];
      } catch (error) {
        console.error(error.message);
      }
    },

    editerUtilisateur(utilisateur) {
      this.utilisateurEnEdition = utilisateur;
      this.nouveauNomUtilisateur = utilisateur.fullName;
      this.showEditModalUtilisateur = true;
    },

    annulerEditionUtilisateur() {
      this.showEditModalUtilisateur = false;
      this.utilisateurEnEdition = null;
      this.nouveauNomUtilisateur = '';
    },

    async validerEditionUtilisateur() {
      try {
        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw'; // Remplacez par votre token d'authentification
        const response = await fetch(`http://localhost/api/users/${this.utilisateurEnEdition.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            fullName: this.nouveauNomUtilisateur,
            // Ajoutez d'autres champs au besoin
          }),
        });

        if (!response.ok) {
          throw new Error(`Erreur lors de la mise à jour de l'utilisateur: ${response.status}`);
        }

        // Mettez à jour la liste des utilisateurs après l'édition
        this.users = this.users.map((users) =>
        users.id === this.utilisateurEnEdition.id
            ? { ...users, fullName: this.nouveauNomUtilisateur }
            : users
        );

        this.annulerEditionUtilisateur();
      } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
      }
    },

    async supprimerUtilisateur(utilisateurId) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
        try {
          const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTI2NjIsImV4cCI6MTcwMDI1NjI2Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.q1s7IbJIK3JgPBjmyXYl81WiWLLF-XD6IHH7kkPpjR7gNqhgVzNyNlLOyflufc4qlUVb6Ra0TIwHy1PQ_d7B6Vkbe25LxeRwCKPOYAOMYosC-2JSl5NIA47laXyoWOj5-ePdzQORfvC4Q62b1cHXuxAK8ar-93JgD3vK0Y3hZ4M8oUAkchntcp6WKdGNboD6HTHW58TNiaI2NhQZVUqC1px7xOmI_XQhbqeK7zcDZWttikwgUoV1Y4omwg4cefKyZuHrIpTdIYPqaPsWxI5ftnxu8YPgQq-wRqfALpNCjZowMbsNuNkhPLTVC2W46thHz9s4E-ujQT0ElBK3sUk5aw'; // Remplacez par votre token d'authentification
          const response = await fetch(`http://localhost/api/users/${utilisateurId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${authToken}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Erreur lors de la suppression de l'utilisateur: ${response.status}`);
          }

          // Mettez à jour la liste des utilisateurs après la suppression
          this.users = this.users.filter((users) => users.id !== utilisateurId);
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'utilisateur:', error.message);
        }
      }
    },
  },
};
</script>
  

  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  </style>