function fibonacci(termos){
    let quantidade_termos = termos;
    let a = 0;
    let b = 1;
    let c = 0;
    let resultado = "";
    for(let i = 0; i < quantidade_termos; i++){
      if(i!=quantidade_termos-1){
        resultado += a + " ";
      }
      else{
        resultado += a + " ";
      }
      c = a + b
      a = b
      b = c
    }
    return resultado;
}

module.exports = fibonacci;