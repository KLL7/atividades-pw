function primos(n){
    var primeiros = [];
    var i = 101;
    while (primeiros.length < n){
        var primo = true;
        for (var j = 2; j < i; j++){
            if (i % j == 0){
                primo = false;
                break;
            }
        }
        if (primo){
            primeiros.push(i);
        }
        // importante
        i++;
    }
    console.log(primeiros);
}

primos(10);

