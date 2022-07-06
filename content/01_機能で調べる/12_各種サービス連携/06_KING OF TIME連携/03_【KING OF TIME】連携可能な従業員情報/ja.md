---
id: '360026263633'
title: "【KING OF TIME】\b連携可能な従業員情報"
labels:
  - スモールプラン
  - スタンダードプラン
  - プロフェッショナルプラン
  - ¥0プラン
---
KING OF TIME（キングオブタイム） ⇔ SmartHR間で送受信できる従業員情報は以下の通りです。

従業員情報は社員番号をキーコードとして連携されます。

| 項目名 | SmartHR 上の物理名 | KING OF TIME 上の物理名 |
| :-: | :-: | :-: |
|   社員番号（KING OF TIMEでは「従業員コード」）   | emp\_code | code |
| 姓 | last\_name | lastName |
| 名 | first\_name | firstName |
| 姓ヨミガナ | last\_name\_yomi | lastNamePhonetics |
| 名ヨミガナ | first\_name\_yomi | firstNamePhonetics |
| 性別 | gender | gender |
| 生年月日 | birth\_at | birthDate |
| メールアドレス※ | email | emailAddresses |
| 入社年月日 | entered\_at | hiredDate |
| 退職年月日 | resigned\_at | resignationDate |

※ メールアドレスについて： KING OF TIME上でいう、「予備のメールアドレス」は連携対象ではありません。

:::tips
新規登録の場合、上記とは別に、以下の設定が取り込み毎に必要となります。
（更新時の対象にはなりません）
■ KING OF TIMEからSmartHRに新規登録する際
・ 所属事業所
■ SmartHRからKING OF TIMEに新規登録する際
・ 所属
・ 雇用区分
:::
