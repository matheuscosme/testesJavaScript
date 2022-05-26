function primo(numero){
    let n = numero;
    let c = 0;
    for (i=n; i>0; i--){
        if (n%i == 0){
            c++;
        }
    }
    if (c > 2){
        return "Não é primo";
    }    
    else{
        return "É primo";
    }
}

module.exports = primo;