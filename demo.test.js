import { generateConfig, generateAnotherConfig } from "./demo";

test('测试 generateConfig 函数', ()=>{
    // expect(generateConfig()).toEqual(
    //     {
    //         server: 'http://aaa.com',
    //         port: 8080,
    //         domain: 'localhost',
    //     }
    // )
    expect(generateConfig()).toMatchSnapshot({
        time: expect.any(Date)
    });
})

test('测试 generateAnotherConfig 函数', ()=>{
    expect(generateAnotherConfig()).toMatchSnapshot({
        time: expect.any(Date)
    });
})

