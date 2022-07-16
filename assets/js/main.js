window.addEventListener('scroll', onScroll)

function onScroll(){
    showToBackToTop()
}





const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show');
    });
}

/* Esconde o menu quando algum item nele é clicado */

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}





ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 700
}).reveal(`header nav, #home .guia, #home .imagem, 
          #blog .posts, #blog posts .post, #blog .post-image,
          #blog-footer, #blog-footer .post
          `);



