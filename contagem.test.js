const contagem = require('./contagem');

test('contagem 4', ()=>{
    expect(contagem(4,[60,70,80,100])).toBe("Número de alunos que passaram no exame: 4")
})


test('contagem 2', ()=>{
    expect(contagem(5,[60,70,10,45,38])).toBe("Número de alunos que passaram no exame: 2")
})
