const somatorio = require('./somatorio');

test('somatorio de 5 numeros', ()=>{
    expect(somatorio(5,[1,2,3,4,5])).toBe("A soma dos 5 números é 15")
})


test('somatorio de 10 numeros', ()=>{
    expect(somatorio(10,[10,15,50,35,50,70,60,20,30,40])).toBe("A soma dos 10 números é 380")
})
