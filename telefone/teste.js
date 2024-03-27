var allbot= document.querySelectorAll("input[type=button]");
var tel = document.querySelector("input[type=tel]");

allbot.forEach(function(bot){
    bot.addEventListener("click", function(){
        if (bot.value == "<-"){
            tel.value = tel.value.slice(0, -1);
            return;
        }
        if (bot.value == "''"){
            tel.value = "";
            return;
        }
        if (tel.value.length > 10){
            return;
        }
        tel.value += bot.value;
    })
})
