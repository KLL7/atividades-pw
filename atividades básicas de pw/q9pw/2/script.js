for(let i = 2; i <= 114; i++){
        let count = 0;
        let div = 0;
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                count++;
                div++;
                break;
            }
        }
        if(div === 0 && count < 30){
            console.log(i);
    }
}