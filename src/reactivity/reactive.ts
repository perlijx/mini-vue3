/*
 * @Author: lijiaxin 1003914407@qq.com
 * @Date: 2022-05-24 20:01:59
 * @LastEditors: lijiaxin 1003914407@qq.com
 * @LastEditTime: 2022-05-25 17:36:23
 * @FilePath: \min-vue\src\reactivity\reactive.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */

/**
 * @description: 
 * @param {*} params 需要代理的对象
 * @return proxy对象
 */
import {collect,update} from"./effect"
export function reactive(params) {
    return new Proxy(params,{
        get(target,key){
          
            let res = Reflect.get(target,key)
            collect(target,key)  //触发get方法说明有地方在使用这个变量收集起来
            return res
        },
        set(target,key,value){
            let res= Reflect.set(target,key,value)  
            update(target,key) //变量改变调用依赖收集里的函数
            return res
        }
    })
}