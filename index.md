# 王东 <span style="font-size: initial;">(3年PHP开发) 简历</span>

<span style="font-size: x-small;"> >> 简历在线版: [imdong.github.io](https://imdong.github.io/) >> PDF版(<b>HR</b>请点这里): [me.qs5.org](https://me.qs5.org/?github.io "请下载/打印此份")</span>

## 自我介绍

> 业余时间自学PHP，曾担任公司技术主管，熟悉Linux日常维护。  
> 虽实际工作经验两年有余，但在公司一直是技术主导，且此前业余在家也写代码。  
> 熟练掌握Web前后端开发技术，能独立开发完成一个Web项目。  
> 拥有较强的学习能力，业余有做一些小项目。

## 关于我 / 联系我

+ **性别**: 男
+ **年龄**: 23岁
+ **籍贯**: 山东省-枣庄
+ **手机**: 15263263676 (山东枣庄)
+ **Q  Q**: 598346965
+ **微信**: im27786
+ **邮箱**: [job@qs5.org](mailto://job@qs5.org)
+ **博客**: [www.qs5.org](https://www.qs5.org/?github.io)
+ **GitHub**: [github.com/imdong](https://github.com/imdong)

## 技术能力

> 开发语言: PHP, JavaScript, Shell, C#  
> 技术框架: ThinkPHP, jQuery, Bootstrap  
> 其他相关: Linux, Nginx, MySQL, Regexp, Git  

## 兴趣爱好

> 爱好跑步, 羽毛球, 徒步, 偶尔会参与一些户外活动

## 近期个人作品
+ QsMail Server(Mail邮件服务端框架)
+ Swoole热更新, 单实例应用进程管理Shell脚本
+ PHP小数据缓存类

## 近期技术文章
+ [【正则表达式】解析命令行参数(附PHP例子)](https://www.qs5.org/Post/651.html)
+ [PHP中if($a==false)和if(!$a)哪种写法速度更快？](https://www.qs5.org/Post/637.html)
+ [【源码】C#根据IP段生成随机IP](https://www.qs5.org/Post/633.html)

## 工作/学习经历

|时间|地点|职务|状态|
|----|----|----|----|
|2015.09-2017.05|深圳博仕集团|技术主管|在职|
|2015.02-2015.09|枣庄美辰信息技术|PHP开发|来深圳发展|
|2010.09-2011.11|枣庄科技职业学院|计算机应用|结业|

<p class="page_number">本页面由 Markdown 书写，托管于 Github, 使用 Apache 2 协议开源。<span>1/2</span></p>

## 项目经验

#### 网站广告管理加载系统 ( 2015.09-2015.10 / PHP + MySQL + JavaScript / 独自分析, 构架及代码完成 )

###### 需求分析:

> 由于网站数量众多，网站悬浮广告代码杂乱缺乏管理，日常更新较为频繁，每天在更换广告上面浪费极多时间。  
> 最严重的时候，更换一次活动需要数日才能完成，且常有遗漏或者错误，策划检查网站也浪费很多时间。  

###### 解决方案:

> 首先对广告加载代码进行统一，使用共同的加载代码。  
> 由后台根据来路Url使用主域名配合正则表达式匹配子域名与路径加载广告方案组合与医院配置。  
> 后台对广告单元进行拆解为单个模块分类放置，且规范接口，事件等规则。  
> 前端自行封装JS框架，使用对广告单元的加载，显示，以及页面事件的回调进行统一处理分发。

###### 实现结果:

> 切换后，除技术人员写模板时间外，更换方案可一个人在几分钟内完成，且不同医院的相同活动方案可使用同一个广告模块。
> 且公司其他的系统都基于这个系统进行加载，上新功能可在几分钟内在所有网站生效。
> 不仅节约大量人力与时间，且减少由于错误带来的流量损失。

###### 个人成长：

> 对JS相关技术的理解提升，且有了基本的JS封装的认识。

#### 站群批量建站系统(2016.04-2016.05 / PHP + JS / 独立完成)

> 提前配置好LNMP服务器多台并部署好远程控制脚本(PHP)。  
> 基于DedeCMS二次开发，调用DNSPod API进行域名解析。  
> 全自动远程安装程序，发布文章，生成全站等。  

#### 网站DDoS防护自动处理预案(2016.08-2016.10 / Nginx / 独立完成)
> 利用第三方高防服务器反向代理清洗后的流量通过阿里云跳板机走内网回源到原网站服务器。  
> Nginx配置反向代理与静态文件缓存，PHP使用POP3协议收取邮箱邮件，收到到阿里云的攻击邮件后自动更改域名解析到高防IP。  

#### Mail邮件系统 (2017.04-2017.05 / PHP + Swoole / 业余开源 )
> 利用Swwole创建服务，封装POP3 + SMTP协议。  
> 实现简易邮件服务器。  
> 开源项目地址: https://github.com/imdong/QsMail-Server/

#### CSDN免积分下载 (2015.09-2016.04 / PHP / 业余作品)
> 利用CSDN验证码BUG和任务积分系统，配合第三方临时邮件服务。  
> 实现自动注册CSDN账号并获取积分，下载资源。  
> 作品地址: http://www.qs5.org/csdn  (长期未维护，已失效)

<p class="page_number page_number_end">本页面由 Markdown 书写，托管于 Github, 使用 Apache 2 协议开源。<span>2/2</span></p>

<!-- 修改页面 -->
<link href="/asset/print.css" rel="stylesheet"><script type="text/javascript" src="/asset/bottom.js"></script>
