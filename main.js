
function tocaSom(idAudio) {
    document.querySelector(idAudio).play()
}


const listaDeTeclas = document.querySelectorAll('.tecla');



for(let cont = 0;cont <listaDeTeclas.length; cont++){
    
    const tecla = listaDeTeclas[cont];

    const instrumeto = tecla.classList[1];

    const idAudio = `#som_${instrumeto}`;
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    
}