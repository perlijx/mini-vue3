/*
 * @Author: lijiaxin 1003914407@qq.com
 * @Date: 2022-05-24 19:41:39
 * @LastEditors: lijiaxin 1003914407@qq.com
 * @LastEditTime: 2022-05-25 10:50:56
 * @FilePath: \min-vue\src\reactivity\tests\reactive.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { reactive } from "../reactive"

describe("reactive",()=>{
    it("happy path",()=>{
        const original = {foo:1}
        const observe=reactive(original)
        expect(observe).not.toBe(original)
        expect(observe.foo).toBe(1)
    })
})