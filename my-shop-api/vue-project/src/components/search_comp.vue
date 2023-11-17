<template>

<div>
    <!-- Barre de recherche -->
    <input v-model="recherche" @input="filtrerElements" placeholder="Rechercher..." class="full-width-search">
</div>


    <router-link to="/login" id="login-button" ms-hide-element="true" href="" class="button logout login w-button">Login</router-link>

</template>

<script>

</script>

<style>

    .full-width-search {
    display: flex ;
    justify-content: center;
    width: 70%;
    }


    a#login-button.button.logout.login.w-button {
    background-color: #f1f5f3;
    background-image: none;
    border-radius: 25px;
    border-width: 0;
    bottom: auto;
    box-sizing: border-box;
    color: #253858;
    cursor: pointer;
    display: block;
    flex: 1;
    float: right;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    left: auto;
    letter-spacing: 1px;
    line-height: 19px;
    margin-left: -15px;
    margin-right: 15px;
    margin-top: 15px;
    padding: 5px 15px;
    position: absolute;
    right: 0;
    text-align: center;
    text-decoration: none;
    top: 0;
    transition: background-color 150ms;
    z-index: 30;
}
 
a#login-button.button.logout.login.w-button:active {
    outline: 0;
}
 
a#login-button.button.logout.login.w-button:hover {
    background-color: #009dff;
    font-weight: 400;
    outline: 0;
}


</style>