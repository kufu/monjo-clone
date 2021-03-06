---
title: 密码政策
---
本页面将介绍SmartHR的密码政策。

如对密码政策有任何疑问，请参阅以下帮助页面。

:::related
[密码政策常见问题](https://knowledge.smarthr.jp/hc/ja/articles/4415576721177)
:::
:::tips
自2022年2月16日起，为进一步加强SmartHR的安全性，我们参考各方对于密码的意见，制定由SmartHR推荐的新密码政策。
[【参考】 更改密码政策](https://smarthr.jp/update/32157)
密码政策更改后，SmartHR的**所有用户（包括管理员和员工）均需设置新密码。**
新旧密码政策的过渡期预定为**2022年2月16日～2022年5月中旬。**
更改点如下：
|   | **截至2022年2月15日** | **自2022年2月16日起** | **备注** |
| --- | --- | --- | --- |
| **最小字符数** | 至少8个字符 | 至少10个字符 | 2022年2月16日起更改 |
| **最大字符数** | 72个字符 | 72个字符 | \- |
| **字符类型** | 无限制 | 无限制 | \- |
| **有效期** | 不应要求定期修改 | 不应要求定期修改 | \- |
| **密码连续修改间隔时间** |   \-   | \- | \- |
| **禁用曾经使用过的密码** | \- | \- | \- |
| **禁用密码** | \- | 使用可确认密码是否曾经泄露的外部数据库的API，设置禁用密码（屏蔽列表） | 2022年2月16日起更改 |
| **帐户锁定前的最大失败次数** | \- | 密码输入错误到达10次时锁定 （输错5次及以上时出现“再输错几次后锁定”的消息） |   2021年5月已完成更改  [【参考】 2021/05/24 更改为多次登录失败时锁定帐户](https://knowledge.smarthr.jp/hc/ja/articles/900007325243-2021-05-24-%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%AB%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%97%E5%A4%B1%E6%95%97%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88%E3%81%AB%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92%E3%83%AD%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F)   |
| **账户锁定时间长度** | \- | \- | \- |
:::

# 关于SmartHR密码政策

SmartHR 密码政策是参考NIST（美国国家标准）和内阁网络安全中心标准，同时考虑到与便利性相平衡的政策。

# 字符数

至少10个字符

# 字符类型

无限制

# 禁用密码

使用可确认密码是否曾经泄露的外部数据库的API，设置禁用密码（屏蔽列表）。

# 有效期

不应要求定期修改

:::tips
如需了解SmartHR未配备要求定期修改密码的功能的理由，请参照以下文章。
[“定期修改密码”具体由来？介绍放心使用SmartHR的小贴士｜SmartHR Mag.](https://mag.smarthr.jp/guide/cloud-hrl/detail/password_history/)
:::

# 帐户锁定

**密码输错10次后锁定帐户。**

输错5次及以上时，显示“再输错n次后锁定”的信息。

账户锁定后，可由管理员解除或由员工本人重置。

详细信息请参阅以下帮助页面。

:::related
[帐户锁定](https://knowledge.smarthr.jp/hc/ja/sections/900000946326-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%83%AD%E3%83%83%E3%82%AF)
:::
