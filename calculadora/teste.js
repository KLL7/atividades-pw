var botoes = document.querySelectorAll("input[type=button]")
var tela = document.querySelector("input[type=tel]")
// elemetos para calc
let n1 = '';
let n2 = '';
let varop = '';
let bufferop = '';
let operador = false

botoes.forEach(function(bot){
    bot.addEventListener('click', function(){

        // se os botões clicados não forem números e os operadores não foram selecionados não seram armazenados as teclas e os números seram armazenados no n1

        if (bot.value != "<-" && bot.value != "AC" && bot.value != "=" && operador == false && bot.value != "+" && bot.value != "-" && bot.value != "/" && bot.value != "*"){
            n1 += bot.value
            tela.value += bot.value
        }

        // se os botões clicados não forem números e os operadores foram selecionados não seram armazenados as teclas e os números seram armazenados no n2

        if (bot.value != "<-" && bot.value != "AC" && bot.value != "=" && operador == true){
            n2 += bot.value
            tela.value += bot.value
        }

        // conferir se algum botão de opecação foi selecionado

        if (bot.value == '+' || bot.value == '-' || bot.value == '/' || bot.value == '*'){
            operador = true
            tela.value += bot.value
            varop = bot.value
            return
        }
        

        // conferir se o botão de < foi selecionado e se será excluido o valor de n1

        if (bot.value == "<-" && operador == false){
            n1 = n1.slice(0, -1)
            tela.value = tela.value.slice(0, -1)
        }

        // conferir se o botão de < foi selecionado e se será excluido o valor de n2

        if (bot.value == "<-" && operador == true){
            n2 = n2.slice(0, -1)
            tela.value = tela.value.slice(0, -1)
            if (tela.value.slice(-1) == varop){
                operador = false
            }
        }

        // conferir se o botão de = foi selecionado e apagar tudo

        if (bot.value == "AC"){
            n1 = ''
            n2 = ''
            operador = false;
            tela.value = ""
        }

        if (bot.value == "="){
            if (varop == '+'){
                operador = false;
                alert(parseInt(n1) + parseInt(n2));
                n1 = ''
                n2 = ''
                tela.value = ""
            }

            if (varop == '-'){
                operador = false;
                alert(parseInt(n1) - parseInt(n2));
                n1 = ''
                n2 = ''
                tela.value = ""
            }

            if (varop == '/'){
                operador = false;
                alert(parseInt(n1) / parseInt(n2));
                n1 = ''
                n2 = ''
                tela.value = ""
            }

            if (varop == '*'){
                operador = false;
                alert(parseInt(n1) * parseInt(n2));
                n1 = ''
                n2 = ''
                tela.value = ""
            }

        }

        console.log(n1)
        console.log(operador)
        console.log(n2) 
        
    })
})