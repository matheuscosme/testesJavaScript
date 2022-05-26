function quickSort(listaTeste){
    function metodo_quickSort(lista, esquerda, direita){
        let i = esquerda;
        let j = direita;
        let centro = Math.floor((i + j)/2);
      
        while(i <= j){
          while(lista[i] < lista[centro]){
            i++;
          }
      
          while(lista[j] > lista[centro]){
            j--;
          }
      
          if(i <= j){
            let auxiliar = lista[i];
            lista[i] = lista[j];
            lista[j] = auxiliar;
            i++;
            j--;
          }
        }
        
        let indice = i;
        
        if(indice-1 > esquerda){
          metodo_quickSort(lista, esquerda, indice-1);    
        }
      
        if(indice < direita){
          metodo_quickSort(lista, indice, direita);
        }
        return lista;
      }
      let lista = listaTeste;

      
      
      let lista_ordenada = metodo_quickSort(lista, 0, lista.length - 1);
      
      return lista_ordenada;
}

module.exports = quickSort;