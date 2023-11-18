<template>
    <div>
        <article class="parent">
                <div   class="image_1">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
                </div>
                <div class="image_2">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
                </div>
                <div class="image_3">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_4">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€ </h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_5">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_6">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_7">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product   w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
        </article>
    </div>
</template>
 
<script>
 
</script>
 
<style>
 
.image_1 {
    grid-area: 1 / 2 / 2 / 3;
    margin-left: 10px;
    width: 60px;
    height: 90px;
}
.image_2 {
    grid-area: 1 / 3 / 2 / 4;
    width: 60px;
    height: 90px;
}
.image_3 {
    grid-area: 1 / 4 / 2 / 5;
    width: 60px;
    height: 90px;
}
.image_4 {
    grid-area: 2 / 1 / 3 / 2;
    width: 60px;
    height: 90px;
}
.image_5 {
    grid-area: 2 / 2 / 3 / 3;
    width: 60px;
    height: 90px;
}
.image_6 {
    grid-area: 2 / 3 / 3 / 4;
    width: 60px;
    height: 90px;
}
.image_7 {
    grid-area: 2 / 4 / 3 / 5;
}
 
 
.parent {
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20%, 1fr));
    grid-template-rows: repeat(3, 1fr);
    gap: 100p;
    grid-column-gap: 10px;
}
 
.produit{
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
 
.h5{
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
 
a#product-button.button.product.w-button {
    background-color: #f1f5f3;
    background-image: none;
    border-radius: 25px;
    border-width: 0;
    bottom: auto;
    box-sizing: border-box;
    color: #253858;
    cursor: pointer;
    display: block;
    flex: 0;
    float: right;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    left: auto;
    letter-spacing: 1px;
    line-height: 19px;
    margin-left: -15%;
    margin-right: 15%;
    margin-top: 15%;
    margin-top: 15%;
    padding: 5px 25px;
    position: auto;
    right: 0;
    text-align: center;
    text-decoration: none;
    top: 0;
    transition: background-color 150ms;
    z-index: 30;
}
 
a#product-button.button.product.w-button:active {
    outline: 0;
}
 
a#product-button.button.product.w-button:hover {
    background-color: #0099ff;
    font-weight: 400;
    outline: 0;
}
</style>