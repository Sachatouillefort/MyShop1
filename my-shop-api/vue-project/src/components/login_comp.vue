
<template>
<div class="mx-auto flex w-full max-w-sm flex-col gap-6">
    <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl font-semibold">Sign In</h1>
            <p class="text-sm">Sign in to access your account</p>
        </div>
        <div class="form-group">
            <div class="form-field">
                <label class="form-label">Email address</label>
                <input placeholder="Type here" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="input max-w-full" />
                <label class="form-label">
                    <span class="form-label-alt">Please enter a valid email.</span>
                </label>
            </div>
            <div class="form-field">
                <label class="form-label">Password</label>
                <div class="form-control">
                    <input placeholder="Type here" type="password" class="input max-w-full" />
                </div>
            </div>
            <div class="form-field">
                <div class="form-control justify-between">
                    <div class="flex gap-2">
                        <input type="checkbox" class="checkbox" />
                        <a href="#">Remember me</a>
                    </div>
                    <label class="form-label">
                        <a class="link link-underline-hover link-primary text-sm">Forgot your password?</a>
                    </label>
                </div>
            </div>
            <div class="form-field pt-5">
                <div class="form-control justify-between">
                    <button @click="signIn" type="button" class="btn btn-primary w-full">Sign in</button>
                </div>
            </div>

            <div class="form-field">
                <div class="form-control justify-center">
                    <router-link to="/register" class="link link-underline-hover link-primary text-sm">Don't have an account yet? Register.</router-link>                
                </div>
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
      email: '',
      password: '',
      errorMessage: null,
    };
  },

  methods: {
    signIn() {
      axios.post('http://localhost/authentication_token', {
        email: this.email,
        password: this.password,
      })

      .then(response => {
        // Stockez le token côté frontend (par exemple dans le stockage local)
        const token = response.data.token;
        localStorage.setItem('userToken', token);

        // Vous pouvez rediriger l'utilisateur vers la page appropriée (admin ou client)
        this.redirectUser(response.data.role);
      })
      
      .catch(error => {
        if (error.response) {
          // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
          if (error.response.status === 401) {
            this.errorMessage = 'Invalid email or password. Please try again.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
        } else if (error.request) {
          // La requête n'a pas pu être effectuée (pas de réponse du serveur)
          this.errorMessage = 'Unable to connect to the server. Please check your internet connection.';
        } else {
          // Une autre erreur est survenue pendant la configuration de la requête
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
      });
    },

    redirectUser(role) {
      // Redirigez l'utilisateur en fonction de son rôle
      if (role === 'ROLE_ADMIN') {
        this.$router.push('/admin');
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>
