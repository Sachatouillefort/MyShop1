<template>
<div class="mx-auto flex w-full max-w-sm flex-col gap-6 mt-48">
    <div class="flex flex-col items-center">
            <h1 class="text-3xl font-semibold">Sign In</h1>
            <p class="text-sm">Sign in to access your account</p>
        </div>
    <div class="form-field">    
      <label class="form-label">Email address</label>
      <input ref="email" placeholder="Type here" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="input max-w-full" />
      <label class="form-label">
        <span class="form-label-alt">Please enter a valid email.</span>
      </label>
    </div>
    <div class="form-field">
      <label class="form-label">Password</label>
      <div class="form-control">
        <input ref="password" placeholder="Type here" type="password" class="input max-w-full" />
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
</template>
  

<script>
import axios from 'axios';
import router from '@/router';

export default {
  methods: {
    async signIn() {
      try {
        const email = this.$refs.email.value;
        const password = this.$refs.password.value; 

        const response = await axios.post('http://localhost/authentication_token', {
          email: email,
          password: password,
        });

        if (response.status === 200) {
          console.log('Login successful');
          router.push({ path: '/admin' })
        } else {
          console.error('Login failed:', response.data);
        
        }
      } catch (error) {
        console.error('Error during login:', error.message);
      }
    },
  },
};
</script>
