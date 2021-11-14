/*Story page */
/* Content display according to clicked menu */

let chefsLink = document.querySelector('#chefs-link');
let restosLink = document.querySelector('#restos-link');
let franchisesLink = document.querySelector('#franchises-link');

let chefs = document.querySelector('#chefs');
let restos = document.querySelector('#restos');
let franchises = document.querySelector('#franchises');


chefsLink.addEventListener('click', function(){
    chefs.style.display = 'block';
    restos.style.display = 'none';
    franchises.style.display = 'none';
});

restosLink.addEventListener('click', function(){
    chefs.style.display = 'none';
    restos.style.display = 'block';
    franchises.style.display = 'none';
});


franchisesLink.addEventListener('click', function(){
    chefs.style.display = 'none';
    restos.style.display = 'none';
    franchises.style.display = 'block';
});
