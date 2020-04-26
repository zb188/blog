# 关于instanceof用法
###  instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链

    引用链接https://www.ibm.com/developerworks/cn/web/1306_jiangjj_jsinstanceof/index.html
    instanceof用法如下:
    1.所有对象和函数 instanceof Object//true（因为JS万物皆对象，函数也是对象）
    2.所有函数 instanceof Function    //true（这个很好理解，包括普通函数和构造函数）
    3.除Object和Function之外的构造函数 instanceof 自身  //false 因为构造函数的原型链上只有Function.prototype和Object.prototype而没有它们自身的prototype，这一点很不容易理解！）
