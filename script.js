const tenis = document.querySelectorAll('.tenis');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let contador = 0;
let slide = document.querySelectorAll('.active img');

function updateSlideSelector() {
    slide = document.querySelectorAll('.active img');
}

function showDiv(div) {
    // Esconde todas as divs
    tenis.forEach(div => div.classList.remove('active'));

    // Mostra apenas a div selecionada
    const selectedDiv = document.getElementById(div);
    selectedDiv.classList.add('active');
    updateSlideSelector()
    remove()
    adicionar(contador = 0);

}
// slides dos tenis


function remove(){
    slide.forEach(item => item.classList.remove('block'));
}

function adicionar(index){
    slide[index].classList.add('block'); 
}

function nextSlide(){
    remove()
    if(contador == slide.length -1) {
        contador = 0
    } else {
        contador++
    }
    adicionar(contador);
}

function prevSlide(){
   remove()
   if(contador == 0){
    contador = slide.length -1
   } else{
    contador--
   }
   adicionar(contador);
 }

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

