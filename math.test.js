// import { add, minus, multi } from './math';
// const math = require('./math.js');
// const { add, minus, multi } = math;

// test('测试3 + 7', () => {
//     expect(add(3, 7)).toBe(10);
// })

// test('测试3-3', () => {
//     expect(minus(3, 3)).toBe(0);
// })

// test('测试3 * 3', () => {
//     expect(multi(3, 3)).toBe(9);
// })

// test('测试对象内容相等', () => {
//     //toBe()匹配器 matcher
//     //object.is ===
//     expect(10).toBe(10);
// })
// test('toEqual', () => {
//     const a = { one: 1 };
//     expect(a).toEqual({ one: 1 })
// })
// test('toBeUndefined 匹配器', () => {
//     const a = undefined;
//     expect(a).toBeUndefined(undefined)
// })
// test('toBeDefined 匹配器', () => {
//     const a = null;
//     expect(a).toBeDefined()
// })

// test('toBeFalsy', ()=>{
//     const a = 1;
//     expect(a).not.toBeFalsy();
// })

// test('toBeGreaterThan', ()=>{
//     const count = 10;
//     expect(count).toBeGreaterThan(9)
// })
// test('toBeGreaterThanOrEqual', ()=>{
//     const count = 10;
//     expect(count).toBeGreaterThanOrEqual(10)
// })
// test('toBeCloseTo', ()=>{
//     const count = 0.1;
//     const count1 = 0.2;
//     expect(count + count1).toBeCloseTo(0.3)
// })
// test('toMatch', () => {
//     const str = 'www.baidu.com';
//     expect(str).toMatch('www')
// })
// //Array set
// test('toContain', () => {
//     const Arr = ['dell', 'lee', 'test'];
//     expect(Arr).toContain('dell')
// })
// test('toContain', () => {
//     const Arr = ['dell', 'lee', 'test'];
//     const data = new Set(Arr)
//     expect(data).toContain('dell')
// })
//异常
const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
}
test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow();
})

