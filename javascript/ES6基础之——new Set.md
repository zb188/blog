Set 对象存储的值总是唯一的

Set 对象方法
方法 描述
add 添加某个值，返回Set对象本身。
clear 删除所有的键/值对，没有返回值。
delete 删除某个键，返回true。如果删除失败，返回false。
forEach 对每个元素执行指定操作。
has 返回一个布尔值，表示某个键是否在当前 Set 对象之中。

Set 对象作用
数组去重

var arr = [1,2,3,3,1,4];
[...new Set(arr)]; // [1, 2, 3, 4]
Array.from(new Set(arr)); // [1, 2, 3, 4]
[...new Set('ababbc')].join(''); // "abc" 字符串去重
new Set('ice doughnut'); //Set(11) {"i", "c", "e", " ", "d", …}
并集

var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]); // {1, 2, 3, 4}
交集

var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}
差集

var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}
