/*Wisdom page */

/* Variable declaration */
let ramenConceptLink = document.querySelector('#ramen-link');
let basicRamenLink = document.querySelector('#basic-link');
let dropdown = document.querySelector('.dropdown-btn');
let toppingLink = document.querySelector('#topping-link');
let noodlesLink = document.querySelector('#noodles-link');
let eatLink = document.querySelector('#eat-link');
let orderLink = document.querySelector('#order-link');
let cyclopediaLink = document.querySelector('#cyclopedia-link');


let ramenConceptContent = document.querySelector('#ramen');
let basicRamenContent = document.querySelector('#basic-ramen');
let toppingContent = document.querySelector('#basic-topping');
let noodlesContent = document.querySelector('#noodles');
let eatContent = document.querySelector('#how-to-eat');
let orderContent = document.querySelector('#how-to-order');
let cyclopediaContent = document.querySelector('#ramencyclopedia');


/*Function*/

const dropdownMenu = () => {
    dropdown.classList.toggle("active");
    let dropdownContent = dropdown.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
}
};

/* Content display according to clicked menu */

ramenConceptLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'block';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
});

basicRamenLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'block';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';

    dropdownMenu();
});



toppingLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'block';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
});


noodlesLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'block';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
});


eatLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'block';
    orderContent.style.display = 'none';
});


orderLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'block';
});


/*Cooking page */
/* Content display according to clicked menu */
let soupLink = document.querySelector('#soup-link');
let makeNoodlesLink = document.querySelector('#make-noodles-link');
let toppingRecipesLink = document.querySelector('#topping-recipes-link');
let assemblageLink = document.querySelector('#assemblage-link');


let soup = document.querySelector('#soup');
let makeNoodles = document.querySelector('#make-noodles');
let toppingRecipes = document.querySelector('#topping-recipes');
let assemblage = document.querySelector('#assemblage');

soupLink.addEventListener('click', function(){
    soup.style.display = 'block';
    makeNoodles.style.display = 'none';
    toppingRecipes.style.display = 'none';
    assemblage.style.display = 'none';
});

makeNoodlesLink.addEventListener('click', function(){
    soup.style.display = 'none';
    makeNoodles.style.display = 'block';
    toppingRecipes.style.display = 'none';
    assemblage.style.display = 'none';
});

toppingRecipesLink.addEventListener('click', function(){
    soup.style.display = 'none';
    makeNoodles.style.display = 'none';
    toppingRecipes.style.display = 'block';
    assemblage.style.display = 'none';
});

assemblageLink.addEventListener('click', function(){
    soup.style.display = 'none';
    makeNoodles.style.display = 'none';
    toppingRecipes.style.display = 'none';
    assemblage.style.display = 'block';
});