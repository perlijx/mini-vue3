/*
 * @Author: lijiaxin 1003914407@qq.com
 * @Date: 2022-05-24 16:07:42
 * @LastEditors: lijiaxin 1003914407@qq.com
 * @LastEditTime: 2022-05-25 17:14:21
 * @FilePath: \min-vue\src\reactivity\tests\index.spec.ts
 * @Description: 测试用例
 */

import { reactive } from "../reactive"
import {effect} from "../effect"

describe("effect",()=>{
    it("happily path",()=>{
        let user = reactive({
            age:10
        })
        let nextAge
        effect(()=>{
            nextAge= user.age+1
        })
        expect(nextAge).toBe(11)
    
         user.age++
         expect(nextAge).toBe(12)
    })
})