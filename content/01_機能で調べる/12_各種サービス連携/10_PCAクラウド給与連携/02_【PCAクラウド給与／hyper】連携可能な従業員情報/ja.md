---
id: '360040752454'
title: 【PCAクラウド給与／hyper】連携可能な従業員情報
labels:
  - スモールプラン
  - スタンダードプラン
  - プロフェッショナルプラン
  - ¥0プラン
---
PCAクラウド給与／PCAクラウド給与hyperとSmartHRの間で同期できる従業員情報は、以下のとおりです。

従業員情報は社員番号をキーにして連携されます。

    
| **PCAクラウド側の情報** |  | **SmartHR側の情報** |  | **備考** |
| --- | --- | --- | --- | --- |
| 物理名 | PCAクラウド項目名称 | 物理名 | 項目名称 |   |
| Code | 社員コード | emp\_code | 社員番号 |    |
| LastName | 社員氏名(姓) | last\_name | 姓 |   |
| FirstName | 社員氏名(名) | first\_name\_yomi | 名 |   |
| LastKana | 社員氏名フリガナ(姓) | last\_name\_yomi | 姓（ヨミガナ） |   |
| FirstKana | 社員氏名フリガナ(名) | first\_name\_yomi | 名（ヨミガナ） |   |
| BirthDate | 生年月日 | birth\_at | 生年月日 |   |
| Gender | 性別 | gender | 戸籍上の性別 |   |
| EnterDate | 入社日 | entered\_at | 入社年月日 |   |
| RetireDate | 退職日 | resigned\_at | 退職年月日 |   |
| WorkingState | 就労状況 |   |   | SmartHR側に項目が存在しないため、**同期を行なわない。** |
| MaidenName | 旧姓 |   |   | SmartHR側に項目が存在しないため、**同期を行なわない。** |
| MaidenKana | 旧姓フリガナ |   |   | SmartHR側に項目が存在しないため、**同期を行なわない。** |
| NameChangeDate | 氏名変更年月日 |   |   | SmartHR側に項目が存在しないため、**同期を行なわない。** |
| MyNumberManageNo | 個人番号管理No. |   |   | SmartHR側に項目が存在しないため、**同期を行なわない。** |
