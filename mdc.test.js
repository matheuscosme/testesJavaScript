const mdc = require('./mdc');

test('mdc de 80 e 144', ()=>{
    expect(mdc(80,144)).toBe('O MDC entre o número 80 e o número 144 é 16')
})


test('mdc de 36 e 44', ()=>{
    expect(mdc(36,44)).toBe('O MDC entre o número 36 e o número 44 é 4')
})
