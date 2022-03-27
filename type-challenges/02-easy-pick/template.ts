
// ts
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}


// js
function myPick(todo, keys) {
    const obj = [];

    keys.foreach(key => {
        if (key in todo) {
            obj[key] = todo[key];
        }
    })
}

// 1. 返回一个对象
// 2. 遍历foreach mapped
// 3. todo[key] 取值 indexed
// 4. 查看key 在不在 todo 里面
//  - 1.keyof lookup
//  - 2.类型约束 extends