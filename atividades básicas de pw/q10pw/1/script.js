function Primos(n){
    for(i = 2; i <= n; i++){
        div = 0;
        for(j = 2; j < i; j++){
            if(i % j === 0){
                div++;
                break;
            }
        }
        if(div === 0){
            console.log(i);
        }
    }
}

Primos(10);