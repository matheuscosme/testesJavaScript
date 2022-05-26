const fibonacci = require('./fibonacci');

test('4 termos da sequencia', ()=>{
    expect(fibonacci(4)).toBe('0 1 1 2 ')
})

test('6 termos da sequencia', ()=>{
    expect(fibonacci(6)).toBe('0 1 1 2 3 5 ')
})