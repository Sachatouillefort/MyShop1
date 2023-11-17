<template>
    <div>
        <article class="parent">
                <div   class="image_1">
                    <img src="../img/appartjpg.jpeg" alt=" salon avec une fenetre" width="90%" height="60%">
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
                </div>
                <div class="image_2">
                    <img src="../img/salon.jpg" alt=" table et chaise sur fond blanc avec deux plantes" width="90%" height="60%">
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
                </div>
                <div class="image_3">
                    <img src="../img/salon_exterieure.jpg" alt="deux fauteilles jaunes dans un jardin" width="90%" height="60%">
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_4">
                    <img src="../img/table.jpg" alt="table de chevet avec une petote plante et un reveil" width="90%" height="60%">
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€ </h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_5">
                    <img src="../img/biblio.jpg" alt="bibliothèque à droit et un mur blanc a gauche" width="90%" height="60%" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_6">
                    <img src="src/img/chaise.jpg" alt="chaise blache avec pieds en boit sur fond blanc" width="90%" height="60%" >
                    <div class="produit">
                        <router-link to="/Products" id="product-button" ms-hide-element="true" href="" class="button product  w-button">Product</router-link>
                        <h5>99€</h5>
                    </div>
                    <h6>Categorie</h6>
                    <img src="panier_+.png">
 
                </div>
                <div class="image_7">
                    <img src="../img/cafe.jpg" alt="commode en boit"   width="90%" height="60%" >
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
 
.image_1 { grid-area: 1 / 2 / 2 / 3; }
.image_2 { grid-area: 1 / 3 / 2 / 4; }
.image_3 { grid-area: 1 / 4 / 2 / 5; }
.image_4 { grid-area: 2 / 1 / 3 / 2; }
.image_5 { grid-area: 2 / 2 / 3 / 3; }
.image_6 { grid-area: 2 / 3 / 3 / 4; }
.image_7 { grid-area: 2 / 4 / 3 / 5; }
 
.parent {
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20%, 1fr));
    grid-template-rows: repeat(3, 1fr);
    gap: 100p;
    grid-column-gap: 8px;
}
 
.produit{
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
 
.h5{
    display: flex;
    margin-left: -30px;
    margin-right: 30px;
    margin-top: 30px;
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
    flex: 1;
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