function somatorio(quantidadeNumeros, lista){
    let n = quantidadeNumeros;
    let numero;
    let soma = 0;
    let i = 0;
    
    while (i < n) {
      numero = lista[i];
      soma = soma + numero;
      i = i + 1;
    }
    
    return "A soma dos " + n + " números é " + soma;
}

module.exports = somatorio;