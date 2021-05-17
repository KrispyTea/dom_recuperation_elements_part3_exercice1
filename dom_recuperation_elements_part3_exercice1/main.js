let exo1 = document.getElementsByTagName("h2")[0]
console.log(exo1.innerText);

exo1.innerText = "Exercice 1"
console.log(exo1.innerText);

let exo2 = exo1.nextElementSibling
exo2.innerText = "Exercice 1"
console.log(exo2.innerText);

let exo4 = document.getElementsByTagName("section")[0]
console.log(exo4.id);

let exo5 = document.getElementsByTagName("h1")[0]
console.log(exo5.className);
console.log(exo5.classList);

let exo6 = document.querySelectorAll("h1")
exo6.forEach(e => {
    console.log(e.className);
});

let exo7 = document.getElementsByTagName("input")[0]
console.log(exo7.attributes);

console.log(exo7.attributes.type);

let exo9 = document.getElementById("inputPassword3")
exo9.attributes.type = "password"
console.log(exo9.attributes.type);

exo7.attributes.type = "color"