var si=1;

const slides = document.getElementsByClassName('slide');
showSlide();
function plusSlides(n){
showSlide(si+n);
}

function showSlide(n){
    for(let i = 0 ; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    si++;
    if(si>slides.length) {si=1}
    slides[si-1].style.display = "block";
    console.log(si);
}
setInterval( showSlide , 5000);