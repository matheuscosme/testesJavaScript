const quickSort = require('./quickSort');

test('quickSort com 5 elementos', ()=>{
    expect(quickSort([60,20,80,70,30])).toStrictEqual([20,30,60,70,80])
})


test('quickSort com 9 elementos', ()=>{
    expect(quickSort([9,7,5,6,4,3,2,8,1])).toStrictEqual([1,2,3,4,5,6,7,8,9])
})
