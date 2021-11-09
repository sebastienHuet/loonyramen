/* Content display according to clicked menu */

let ramenConceptLink = document.querySelector('#ramen-link');
let basicRamenLink = document.querySelector('#basic-link');
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


ramenConceptLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'block';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
    cyclopediaContent.style.display = 'none';
});

basicRamenLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'block';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
    cyclopediaContent.style.display = 'none';
});


toppingLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'block';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
    cyclopediaContent.style.display = 'none';
});


noodlesLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'block';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
    cyclopediaContent.style.display = 'none';
});


eatLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'block';
    orderContent.style.display = 'none';
    cyclopediaContent.style.display = 'none';
});


orderLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'block';
    cyclopediaContent.style.display = 'none';
});


cyclopediaLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
    cyclopediaContent.style.display = 'block';
});

