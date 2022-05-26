function mdc(num1, num2){
    let x = num1;
    let y = num2;

    for(let i = x; i>0; i--){
        if(x%i == 0 && y%i == 0){
            return 'O MDC entre o número ' + x + ' e o número ' + y + ' é ' + i;
            break;
        }
    }
}

module.exports = mdc;