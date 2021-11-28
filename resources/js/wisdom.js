/*Wisdom page */

/* Variable declaration */
/*Side menu selection*/
let ramenConceptLink = document.querySelector('#ramen-link');
let basicRamenLink = document.querySelector('#basic-link');
let toppingLink = document.querySelector('#topping-link');
let noodlesLink = document.querySelector('#noodles-link');
let eatLink = document.querySelector('#eat-link');
let orderLink = document.querySelector('#order-link');

/*Sub-menu of side menu*/
let dropdown = document.querySelector('.dropdown-btn');
let dropdownRamen = document.querySelector('.dropdown-ramen')

/*Content according to side menu*/
let ramenConceptContent = document.querySelector('#ramen');
let basicRamenContent = document.querySelector('#basic-ramen');
let toppingContent = document.querySelector('#basic-topping');
let noodlesContent = document.querySelector('#noodles');
let eatContent = document.querySelector('#how-to-eat');
let orderContent = document.querySelector('#how-to-order');


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
    dropdownRamen.style.display = 'none';
});


noodlesLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'block';
    eatContent.style.display = 'none';
    orderContent.style.display = 'none';
    dropdownRamen.style.display = 'none';
});


eatLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'block';
    orderContent.style.display = 'none';
    dropdownRamen.style.display = 'none';
});


orderLink.addEventListener('click', function(){
    ramenConceptContent.style.display = 'none';
    basicRamenContent.style.display = 'none';
    toppingContent.style.display = 'none';
    noodlesContent.style.display = 'none';
    eatContent.style.display = 'none';
    orderContent.style.display = 'block';
    dropdownRamen.style.display = 'none';
});
