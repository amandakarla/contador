const btnMenos = document.getElementById("subtrair");
const btnMais = document.getElementById("adicionar");
const contador = document.getElementById("counter");

let counter = 0;

contador.innerHTML = counter;

btnMenos.addEventListener('click', function () {
    contador.innerHTML = --counter;
});
btnMais.addEventListener('click', function () {
    contador.innerHTML = ++counter;
});
