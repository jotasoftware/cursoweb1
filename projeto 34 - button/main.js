let cont = 0;
let numero = document.querySelector('p');

function soma(){
    cont ++;
    numero.innerHTML = cont;
}

function subtrai(){
    cont --;
    numero.innerHTML = cont;
}

function reseta(){
    cont = 0;
    numero.innerHTML = cont;
}

