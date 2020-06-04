## React Native 0.57打包 APK 踩坑记录 ，Release 包闪退或者修改代码打包没有效果
由于本人不是 APP 开发出生，React Native项目也是第一次接触，修改的是之前开发的项目。好在现在 Android 技术成熟，文档完善，没折腾多久就上手了。

言归正传，说到这个坑就不得不吐槽上面提到的教程，里面提到：

使用 ./gradlew assembleRelease 会把所有用到的 JavaScript 代码都打包到一起，然后内置到 APK 包中。

事实上，执行指令后这些资源并没有打包到 apk 里，apk 仅仅是个空壳，而这正是导致闪退的原因。最后我是通过在根目录执行下面的命令解决的资源打包问题：

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
然后从根目录进入 android 目录， 执行 ./gradlew assembleRelease