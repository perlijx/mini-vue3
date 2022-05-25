/*
 * @Author: lijiaxin 1003914407@qq.com
 * @Date: 2022-05-24 16:07:42
 * @LastEditors: lijiaxin 1003914407@qq.com
 * @LastEditTime: 2022-05-25 20:06:38
 * @FilePath: \min-vue\src\reactivity\tests\index.spec.ts
 * @Description: 测试用例
 */

import { reactive } from "../reactive"
import {effect} from "../effect"

describe("effect",()=>{
    it("happily path",()=>{
        let user = reactive({
            age:10,
            b:{c:1}
        })
        let nextAge
        effect(()=>{
            nextAge= user.b.c+1
        })
        expect(nextAge).toBe(2)
    
          user.b.c++
          expect(nextAge).toBe(2)
    })

    it("call effect return",()=>{
        let name="张三"
       const runner= effect(()=>{
            name="李四"
            return name
        })

        expect(name).toBe("李四")
        const r =runner()
        expect(name).toBe(r )
    })
})