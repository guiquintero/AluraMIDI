
function tocaSom(idAudio) {
    document.querySelector(idAudio).play()
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador <listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];

    const instrumeto = tecla.classList[1];

    const idAudio = `#som_${instrumeto}`;
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador + 1;
}