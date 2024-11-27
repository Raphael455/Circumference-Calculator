const pi = 3.14159;
let radius;
let circumference;

const botao = document.getElementById("button-calculate")

function calculating () {
    radius = document.getElementById("textSubmit").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("result").innerHTML = `The circumference is <span class="resultext">${circumference}</span>`;
}

botao.addEventListener ("click", calculating)