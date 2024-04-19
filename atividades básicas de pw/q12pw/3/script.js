var n = parseInt(prompt("Coloque um número:"));
while (n <= 0 || n > 10) {
    alert("Numero invalido");
    n = parseInt(prompt("Coloque um número:"));
}

for (var i = 1; i < 11; i++) {
    console.log(i * n);
}

