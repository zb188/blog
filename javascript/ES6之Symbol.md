# ES6 之 Symbol

最近打算看下 redux源码 ，看到 symbol-observable ，就顺藤摸瓜的学习下symbol

## 简述
symbol 是一种基本数据类型 （primitive data type）。  
Symbol()函数会返回 symbol 类型的值，该类型具有静态属性和静态方法。
它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。
每个从 Symbol()返回的 symbol 值都是唯一的。
一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的

### Symbol 函数返回的值都是唯一的

```js
//无参数
var s1 = Symbol();
var s2 = Symbol();
s1 === s2; // false
//有参数
var s1 = Symbol("symbol");
var s2 = Symbol("symbol");
s1 === s2; //false
```

### Symbol 作为对象属性名

```js
let symbolProp = Symbol();
var obj = {};
obj[symbolProp] = 'hello Symbol';
//或者
var obj = {
    [symbolProp] : 'hello Symbol';
}
//或者
var obj = {};
Object.defineProperty(obj,symbolProp,{value : 'hello Symbol'});
```

> 注意：定义属性的时候只能将 Symbol 值放在方括号里面，否则属性的键名会当做字符串而不是 Symbol 值。
同理，在访问 Symbol 属性的时候也不能通过点运算符去访问，点运算符后面总是字符串

### Symbol 属性名的遍历

Symbol 作为属性名，虽然不是私有属性，但是在 for...in,for...of 循环中，Object.keys(),Object.getOwnPropertyNames()都不会获取到。通常通过两种方法达到 Symbol 属性的遍历。Object.getOwnPropertySymbols 方法返回一个数组，成员是当前对象的所有 Symbol 值的属性。
Reflect.ownKeys()可以返回所有类型的键名，包括包括常规的键名和 Symbol 键名.

## 内置的Symbol值
除了自己定义的Symbol值外，JavaScript有一些内置的Symbol表示的内部语言行为不在ECMAScript 5及以前暴露给开发者。这些Symbol可以被访问被下列属性:

1. Symbol.iterator
返回对象的默认迭代器的方法。被for...of使用

2. Symbol.math
与字符串匹配的方法，也用于判断对象是否可以用作正则表达式.被 String.prototype.match()使用。

3. Symbol.replace
一种方法取代匹配字符串的子串。被String.prototype.replace()使用。

4. Symbol.search
返回与正则表达式匹配的字符串内返回索引的方法。被String.prototype.search()使用。

5. Symbol.split
在与正则表达式匹配的索引处拆分字符串的方法。被String.prototype.split()使用.

6. Symbol.hasInstance
确定构造函数对象是否将对象作为实例识别的方法。被instanceof使用

7. Symbol.isConcatSpreadable
一个布尔值，指示对象是否应该被扁平化为数组元素。被Array.prototype.concat()使用.

8. Symbol.unscopables
从关联对象的环境绑定中排除其自身和继承的属性名称的对象值。被with使用

9. Symbol.species
用于创建派生对象的构造函数。

10. Symbol.toPrimitive
将对象转换为原始值的方法。

11. Symbol.toStringTag
用于对象的默认描述的字符串值。被Object.prototype.toString()使用.

我这里没给出具体的例子，针对这11个属性。忘读者自己主动去把这几个属性搞懂，对理解有些方法是非常有用的。
