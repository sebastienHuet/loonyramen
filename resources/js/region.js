/*Regional Ramen page */
/* Content display according to clicked menu */
let hokkaidoLink = document.querySelector('#hokkaido-link');
let tohokuLink = document.querySelector('#tohoku-link');
let kantoLink = document.querySelector('#kanto-link');
let chubuLink = document.querySelector('#chubu-link');
let chugokuLink = document.querySelector('#chugoku-link');
let kinkiLink = document.querySelector('#kinki-link');
let kyushuLink = document.querySelector('#kyushu-link');
let shikokuLink = document.querySelector('#shikoku-link');
let okinawaLink = document.querySelector('#okinawa-link');

let hokkaido = document.querySelector('#hokkaido');
let tohoku = document.querySelector('#tohoku');
let kanto= document.querySelector('#kanto');
let chubu= document.querySelector('#chubu');
let chugoku = document.querySelector('#chugoku');
let kinki = document.querySelector('#kinki');
let kyushu = document.querySelector('#kyushu');
let shikoku = document.querySelector('#shikoku');
let okinawa = document.querySelector('#okinawa');

hokkaidoLink.addEventListener('click', function(){
    hokkaido.style.display = 'block';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'none';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

tohokuLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'block';
    kanto.style.display = 'none';
    chubu.style.display = 'none';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

kantoLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'block';
    chubu.style.display = 'none';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

chubuLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'block';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

chubuLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'block';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

chugokuLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'none';
    chugoku.style.display = 'block';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

kinkiLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'none';
    chugoku.style.display = 'none';
    kinki.style.display = 'block';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

kyushuLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'none';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'block';
    shikoku.style.display = 'none';
    okinawa.style.display = 'none';
});

shikokuLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'none';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'block';
    okinawa.style.display = 'none';
});

okinawaLink.addEventListener('click', function(){
    hokkaido.style.display = 'none';
    tohoku.style.display = 'none';
    kanto.style.display = 'none';
    chubu.style.display = 'none';
    chugoku.style.display = 'none';
    kinki.style.display = 'none';
    kyushu.style.display = 'none';
    shikoku.style.display = 'none';
    okinawa.style.display = 'block';
});