## 前言
防抖和节流这两个概念在入门JavaScript的时候就遇到过，而之后的项目中没有真正的实践过，偶尔的一次机会终于让我使用到了这两个概念，于是顺便搞懂这二者的区别。

## 概念理解
**防抖(debounce)** 的含义便是为了防止抖动造成的结果不准确，我们在抖动的过程中不去关注其中的变化，而是等到稳定的时候再处理结果。
这种概念在硬件上一些电流或者电磁波图有着很多的应用。在电流中一般会有毛刺，而我们在计算结果的时候是不会去考虑这段异常的抖动，而是从整体上来评测结果，而在软件上来实现防抖，便是在抖动的过程中不去执行对应的动作，而是等到抖动结束趋于稳定的时候再来执行动作。

**节流(throttle)** 则是可以形象地描述为人为地设置一个闸口，让某一段时间内发生的时间的频率降低下来，这个频率可以由你决定。想象一下你在一条流动的小溪中设置了一个关卡，本来一小时流量有10立方米，但是因为你的节流导致流量变成了5立方米，这样我们就成为节流。

上面的解释估计不够形象，那么我们结合下面的demo更加深入的阐述。lodash源码中已经有实现这二者的功能。完整的demo如下(借鉴了其代码)：

下面还有一张图片阐述了二者的区别：
![示意图](https://guide.meteor.com/images/throttle-vs-debounce.png)

lodash源码

https://github.com/lodash/lodash/blob/master/debounce.js

https://github.com/lodash/lodash/blob/master/throttle.js
