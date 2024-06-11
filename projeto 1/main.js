let btn = document.getElementById('btnIdade');

btn.addEventListener('click', () => {
    let idade = document.getElementById('idade').value;
    (idade>=18) ? alert("Voce e um adulto") : alert("Voce nao e um adulto")
})