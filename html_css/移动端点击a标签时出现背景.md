# 之前做移动端的Portal时，手机上测试，点击a标签总是出现一个背景框

## 为a标签CSS添加 -webkit-tap-highlight-color属性就可以了

```css
a:active{

     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}
```
