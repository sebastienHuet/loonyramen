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