---
id: '360056232274'
title: 【おまかせ はたラクサポート】同期可能な従業員情報
labels:
  - スモールプラン
  - スタンダードプラン
  - プロフェッショナルプラン
  - ¥0プラン
---
おまかせ はたラクサポート（KING OF TIME for おまかせ はたラクサポート） ⇔ SmartHR間で同期できる従業員情報は以下の通りです。

従業員情報は社員番号をキーにして連携されます。

| 項目名 | SmartHR 上の物理名 | おまかせ はたラクサポート 上の物理名 |
| :-: | :-: | :-: |
|   社員番号（おまかせ はたラクサポートでは「従業員コード」）   | emp\_code | code |
| 姓 | last\_name | lastName |
| 名 | first\_name | firstName |
| 姓ヨミガナ | last\_name\_yomi | lastNamePhonetics |
| 名ヨミガナ | first\_name\_yomi | firstNamePhonetics |
| 性別 | gender | gender |
| 生年月日 | birth\_at | birthDate |
| メールアドレス※ | email | emailAddresses |
| 入社年月日 | entered\_at | hiredDate |
| 退職年月日 | resigned\_at | resignationDate |

※ メールアドレスについて： おまかせ はたラクサポート上でいう、「予備のメールアドレス」は連携対象ではありません。

:::tips
新規登録の場合、上記とは別に、以下の設定が取り込み毎に必要です。
（更新時の対象にはなりません）
■おまかせ はたラクサポートからSmartHRに新規登録する際
・ 所属事業所
■ SmartHRからおまかせ はたラクサポートに新規登録する際
・ 所属
・ 雇用区分
:::
