function contagem(qtd_alunos,notas){
    let n = qtd_alunos;
    let nota = notas;
    let contador = 0;
    let i = 0;

    while (i < n) {

    if (nota[i] >= 50) {
        contador = contador + 1;
    }
    
    i++;
    }

    return "Número de alunos que passaram no exame: " + contador;
}

module.exports = contagem;