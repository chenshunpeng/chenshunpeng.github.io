---
title: Premiere如何入门做视频
commentable: true
Edit: 2021-04-16
mathjax: true
mermaid: true
tags: Premiere
categories: 技术
description: 从Premiere安装，素材寻找，视频制作等方面介绍了如何做视频
---

### Premiere安装
>![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319120024161.png)
>[​Premiere Pro 2020 软件安装教程](https://mp.weixin.qq.com/s?__biz=MzUyNjUwNjg3Mg==&mid=2247499476&idx=1&sn=1e2a7a88618110b009d530f54853387a&chksm=fa0f70c3cd78f9d5a16ef63a57af2d2d7b028b7a1ed42f13d1d04b045c0d0ab83a97361319ae&mpshare=1&scene=23&srcid=0315LmiM5xDzxrHSnGu78XCa&sharer_sharetime=1615798069807&sharer_shareid=314bf623e29443e7d3ca2410f1942de6#rd)

###  入门知识
>[Premiere Pro CC 全套入门教程](https://www.bilibili.com/video/av37550078/)

视频一共16集，不难，看到一半的时候比较累了(~~一次性看完最好~~ )，其中有一些重复的内容，开2倍速或者跳过就好
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031911583797.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)
也可以直接勇敢做视频，遇到困难再解决，总之要有自信

推荐使用P13的标准模板大大优化视频体验，唯一缺点的是网站在外国，下载了30min

### 素材寻找
我们是先找的：线上展览全国博物馆，一开始想做故宫（[全景故宫](http://webapp.vizen.cn/gugong_app_pc/index.html)）的，毕竟架构实在太整齐了，VR又好看，但是毕竟要做一个历史视频，最后就换了换

网站主页面：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319121347576.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)
主内容：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319121645289.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)

为了优化录制，要去掉这些部分，打开开发者模式，然后出现了一个小问题：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319121830889.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)
之后Chrome也不行，换成火狐，终于看见了源码
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031912222852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)

去掉一些源码后：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031912245670.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)
这样我们就可以安心找素材了
### 视频制作
首先开头是怎么做的呢，我们选了一个模板，挺复杂的，所以不去改它（遮罩真的看不懂，太菜了），而是去合理替换里面的内容，而且模板较长，需要自行优化一下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319130402728.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319123836256.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)
当然开头不用这么多，没必要的，我们选了前4个

对于中间部分，我们就以游览者的顺序游览整个数字展馆，找到我们的目标区域，对这部分加强游览并录制初步视频

省略一些步骤，总之就是开头+引入+中间核心+最后收尾，剪辑好的结果就是：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319130106159.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)

然后这没有配音，所以先导出来（渲染时间有点长，耐心等待就好）：![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319125713999.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)

对了，注意文件一开始就不要存在C盘，不然就算你改到其他盘了，内容也会脱机，必须要重新导入，亲测非常麻烦，下图就是我悲催的结果QAQ：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319124313113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319124955864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)
所以再提醒一下，一般不要改文件的位置

现在还差配音，这就很简单了，用剃刀工具+视频倍速（音频别倍速，不管怎样都有较大的失真）即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210319130200229.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NTUwMzc1,size_16,color_FFFFFF,t_70)

最后导出，视频制作完成
### 做的视频
>[。。。](https://www.bilibili.com/video/BV1tZ4y1w7xc)
