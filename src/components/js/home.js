document.addEventListener("DOMContentLoaded", function(event) {
    
    function mostrarScroll() {
        let contenedorCarousel = document.getElementById("container-corousel")
        console.log(contenedorCarousel);
        if (contenedorCarousel) {
            let posicion = window.scrollY;
        
            contenedorCarousel.style.opacity = `${(1-(posicion/550))}`;
            console.log(1-(posicion/600));
        }
    }
    
    window.addEventListener('scroll', mostrarScroll)
});