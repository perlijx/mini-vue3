/*
 * @Author: lijiaxin 1003914407@qq.com
 * @Date: 2022-05-24 20:01:27
 * @LastEditors: lijiaxin 1003914407@qq.com
 * @LastEditTime: 2022-05-25 20:12:03
 * @FilePath: \min-vue\src\reactivity\effect.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
    1.首先effect是一个函数接收一个函数执行里面的代码
    2.后面如果被代理的数据更新effect接收的函数要再次执行所以需要一个容器接收这个函数
    3.收集依赖
*/
let activeEffect
class ReactiveEffect{
    private _fn: any
    constructor(fn){
        this._fn=fn
       
    }
    run(){
        activeEffect=this //在执行 effect函数的时候才会收集这个依赖
        return this._fn() //runner 可以拿到 fn的执行结果所以直接return出去
    }
}

let targetMap=new Map()  //一个接收所有触发过get的被proxy代理过的变量的集合
export function collect(target,key) {
    let depMap=targetMap.get(target)  //拿出在targetMap的被proxy代理过的变量的集合
    if(!depMap){ //如果 targetMap没有这个被proxy代理过的变量集合那就创建一个新的集合放进去
        depMap=new Map() 
        targetMap.set(target,depMap)
    }
    let dep= depMap.get(key)  //key 这个属性的依赖集合
    if(!dep){
        dep=new Set()
        depMap.set(key,dep)
    }
    console.log(activeEffect);
    
    dep.add(activeEffect)
}


export function  update(target,key) {
    let depMap= targetMap.get(target)
    let dep= depMap.get(key)
    for( const effect of dep){
        effect.run()
    }
}

export function effect(fn) {
    let _effect= new ReactiveEffect(fn)
    _effect.run()
    //可以 用 let a=effect() a() 说明 effect的返回值为一个函数,执行后可以拿到run里的值说明调用的就是run
   return   _effect.run.bind(_effect)
}