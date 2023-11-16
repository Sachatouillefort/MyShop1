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
                console.log(this.email, this.password, this.fullName)
            const response = await axios.post('http://localhost/api/users', {
                email: this.email,
                password: this.password,
                fullName: this.fullName,
            });
            console.log(response.data);
            // Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions nécessaires après l'inscription réussie.
            } catch (error) {
            console.error(error.response.data);
            // Gérez les erreurs ici (affichage d'un message d'erreur, etc.).
            }
        },
        },
    };
</script>
    
<style>
</style>
