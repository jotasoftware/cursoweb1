let letras = document.getElementById('letras');
let quant = document.getElementById('display');

function count(){
    let quantTotal = letras.value.length;
    let quantLetras = 0;
    for(let i = 0; i<quantTotal; i++){
        if(letras.value[i] != ' '){
            quantLetras++;
        }
    }
    display.innerHTML = quantLetras;
}

