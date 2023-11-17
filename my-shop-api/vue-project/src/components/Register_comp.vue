<template>
    <section>
        <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div class="flex flex-col items-center">
                <h1 class="text-3xl font-semibold">Register</h1>
                <p class="text-sm">Create your account</p>
            </div>
            <div class="form-group">
                <div class="form-field">
                    <label class="form-label">Email address</label>
                    <input placeholder="Type here" type="email" class="input max-w-full" />
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
                    <label class="form-label">Full Name</label>
                    <div class="form-control">
                        <input placeholder="Type here" type="text" class="input max-w-full" />
                    </div>
                </div>
                <div class="form-field">
                    <div class="form-control justify-between">
                        <div class="flex gap-2">
                            <input type="checkbox" class="checkbox" />
                            <a href="#">Remember me</a>
                        </div>
                    </div>
                </div>
                <div class="form-field pt-5">
                    <div class="form-control justify-between">
                        <button @click="registerUser" class="btn btn-primary w-full">Register</button>
                    </div>
                </div>
    
                <div class="form-field">
                    <div class="form-control justify-center">
                        <router-link to="/login" class="link link-underline-hover link-primary text-sm">You already have an account ? Login.</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </template>
    
<script>
    import axios from 'axios';

    export default {
  data() {
    return {
      email: '',
      password: '',
      fullName: '',
    };
  },
  methods: {
    async registerUser() {
      try {

        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDM2MjcsImV4cCI6MTcwMDI0NzIyNywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.cqGzvRXlbQ-zldht55251KNQOVtVgbaq7tZPmx9LFpobCxVtY6k70Bm0gy5fIiOYpW9Fc-SvwLXlySTlBsHphlIYoFm5iq8p7Z5XntcO8gdCD15Nw0XBxT3mQxez7Slax6tdztJjYoDXFzsQYzLhHCKzM43ldIHiMleG0VdjneU2A1tTEb63KZUndDtmuWnmA9-_sa-C8zyPcGjhU-RvBEz9nKaUBBRuZktpjkwkaUmUAGTbfMaZJ_UsJTGIAF-qfvGrEgx0xTP2fo5ZW-Uk7tFfRx8bja47M3oM0UVKU9KlN5b_7iIwN1cLKjvHwHPrU_vY1YARUX51XLDqRtZ0iw';

        console.log(this.email, this.password, this.fullName);

        const url = 'http://localhost/api/users'; // Remplacez par l'URL réelle de votre API

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            fullName: this.fullName,
          }),
        });

        if (!response.ok) {
          throw new Error(`Erreur lors de l'inscription: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        router.push({ path: '/admin' })
        // Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions nécessaires après l'inscription réussie.
      } catch (error) {
        console.error(error.message);
        // Gérez les erreurs ici (affichage d'un message d'erreur, etc.).
      }
    },
  },
};

</script>
    
<style>
</style>
