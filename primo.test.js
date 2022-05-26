const primo = require('./primo');

test('numero 2 é primo', ()=>{
    expect(primo(2)).toBe('É primo')
})

test('numero 10 não é primo', ()=>{
    expect(primo(10)).toBe('Não é primo')
})