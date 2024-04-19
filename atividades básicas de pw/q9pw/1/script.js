var num = 5000;
var i = 10000;

while(num < i){
    num = num*1.3
    console.log(num);
    if(num >= i){
        break;
    }
}