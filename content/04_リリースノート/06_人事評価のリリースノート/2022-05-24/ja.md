---
id: 'a1d65df3-cc53-4a29-8b13-bae09beb2bc1'
title: 2022/05/24 権限の操作履歴が見れるようになりました 他1件
---

2021年5月17日（火）〜24日（火）に行なったアップデートの詳細をお知らせします。

人事評価機能の変更点は、改善2件でした。

# 📈改善

## 権限の操作履歴が見れるようになりました
人事評価機能を管理者として利用する権限を付与、変更、削除の操作履歴を自動的に記録するようになりました。
（注：本機能をリリースした2022年5月23日以降からの履歴となります）
権限設定画面上部の説明文の中にある［操作履歴］というテキストリンクをクリックすると、操作履歴画面が表示されます。

| 権限設定画面 | 操作履歴画面 |
| ------------ | ----- |
| ![](https://s3-ap-northeast-1.amazonaws.com/kufutools-codimd/uploads/upload_f70a74ff3d8ce91dee761827d8c7db29.png) |![](https://s3-ap-northeast-1.amazonaws.com/kufutools-codimd/uploads/upload_53d114008770bbdc21ee982b660393cb.png) |

## 評価のCSV書き出し画面で、評価テンプレート名の横に［未設定］ラベルを表示するようにしました
* 経緯の説明
評価のCSV書き出し画面では、評価テンプレートごとに書き出したい評価シート項目を選択する必要があります。複数の評価テンプレートの書き出し操作をする際に、選択をせずに［書き出し］ボタンを押してしまうことがありました。

* 追加
［評価のCSVファイル書き出し（2/3）］で、評価シート項目を未選択の時に、評価テンプレート名の横に［未選択］を表示するようにしました。

|改善前|改善後|
| --- | --- |
|![image](https://user-images.githubusercontent.com/68522541/170168040-853df322-e908-472f-99ab-7f2c3c0810a2.png)|![image](https://user-images.githubusercontent.com/68522541/170167483-f0acec65-63ae-4594-94f9-adcbee4c1381.png)|