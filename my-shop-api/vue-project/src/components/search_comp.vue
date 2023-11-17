<template>
    <section>
        <header>
            <div id = "haut-de-page">
                <div class="logo">
                    <img src="../img/logo.png"  alt="logo site">
                </div>
                    <h2>MyShop</h2>
                    <div id="search">
                        <input type="text" v-model ="search" placeholder="search-bar" style="width: 90%;">
                    </div>
 
                    <router-link to="/login" id="login-button" ms-hide-element="true" href="" class="button logout login w-button">Log In</router-link>
            </div>
        </header>
        <body>
            
        </body>
    </section>
</template>
 
<script>
</script>
 
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0 auto;
}
#haut-de-page{
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
.logo img{
  max-width:20%;
  max-width: 60px;
  height: auto;
  position:relative;
}
 
#search {
  flex-grow: 1;
  text-align: left;
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
    margin-left: -48px;
    margin-right: 48px;
    margin-top: 48px;
    padding: 5px 25px;
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
    background-color: #0099ff;
    font-weight: 400;
    outline: 0;
}
</style>
