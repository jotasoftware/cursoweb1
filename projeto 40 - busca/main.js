let busca = document.getElementById('busca');
let quant = document.getElementById('display');
let ul = document.getElementById('ul');
let lis = document.querySelectorAll('li');

busca.addEventListener('input', (e) => {
    console.log(lis[0].innerText.toLowerCase);
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    let valorBusca = busca.value;
    console.log(valorBusca);
    for(let i = 0; i<lis.length; i++){
        if(lis[i].innerText.toLowerCase().includes(valorBusca.toLowerCase())){
            const novaLi = document.createElement('li');
            const textoLi = document.createTextNode(lis[i].innerText);
            novaLi.appendChild(textoLi);
            ul.appendChild(novaLi);
        }
    }
});

