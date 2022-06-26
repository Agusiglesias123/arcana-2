const fuego = document.getElementById('fuego');
const tierra = document.getElementById('tierra');
const agua = document.getElementById('agua');
const aire = document.getElementById('aire');
const portalCentral = document.getElementById('central');

function pasarColor (e) {
    portalCentral.style.animationName = e;
    portalCentral.style.animationDuration ='5s';
    portalCentral.style.animationIterationCount = 'infinite';
    portalCentral.style.animationDirection = 'alternate'; 
}
portalCentral.addEventListener('click', ()=>{
    portalCentral.style.animationName = 'estar';
})

fuego.addEventListener('click', () => {
    console.log('fuego');
    pasarColor('fuego');
});
let cod = 1234;
agua.addEventListener('click', () => {
    console.log('agua');
    pasarColor('agua');
    let codigo = prompt('Introduzca el codigo para la experiencia: ');
    let code = parseInt(codigo);
    if(code == cod){
        window.location.href = 'http://127.0.0.1:5500/portal1.html';
    }   else alert('Codigo incorrecto');
    
});

tierra.addEventListener('click', () => {
    console.log('tierra');
    pasarColor('tierra');
});

aire.addEventListener('click', () => {
    console.log('aire');
    pasarColor('aire');
});

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });


