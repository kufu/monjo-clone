---
id: '4405369856281'
title: 【一覧】年末調整機能でダウンロードできるCSVファイルと使用例
labels:
  - スモールプラン
  - スタンダードプラン
  - プロフェッショナルプラン
  - ¥0プラン
---
:::alert
当ページで案内しているSmartHRの年末調整機能の内容は、2021年（令和3年）版のものです。
2022年（令和4年）版の年末調整機能の公開時期は秋頃を予定しています。
なお、画面や文言、一部機能は変更になる可能性があります。
公開時期が決まり次第、[アップデート情報](https://smarthr.jp/update)でお知らせします。
:::

SmartHRの年末調整機機能でダウンロードできるCSVファイルと使用例を説明します。

:::tips
一部のCSVファイルは、特定の依頼グループ分をダウンロードする方法と、すべての依頼グループ分を一括してダウンロードする方法の2つがあります。
詳しくは以下のヘルプページをご覧ください。
[特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)
[情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)
:::

# 年末調整の準備・設定時

主に従業員の登録や保険料の事前登録をする場合に使用します。

| **対象CSV** | **使用例** | **関連ヘルプページ** |
| --- | --- | --- |
| 対象従業員一覧CSV |   年末調整の対象となる従業員を一覧で確認できます。  従業員の依頼グループを一括で変更するためにも使えます。   | [年末調整の依頼グループを一括で設定する](https://knowledge.smarthr.jp/hc/ja/articles/4403662363161) |
| 対象従業員追加用のCSV | 年末調整の依頼グループ作成後、依頼グループに従業員を追加するためのCSVファイルです。 | [年末調整の依頼グループに従業員を一括で追加する](https://knowledge.smarthr.jp/hc/ja/articles/360056088674) |
| ヒントメッセージ設定用のCSV |   従業員向けのアンケート画面で表示されるヒントメッセージを追加・編集できます。  ヒントメッセージの一括編集は、別の依頼グループや別の企業アカウントで同じヒントを設定したい場合に便利です。   | [アンケート画面のヒントを追加・編集する](https://knowledge.smarthr.jp/hc/ja/articles/360034870854) |
| 昨年の保険料データCSV |   SmartHRのCSVフォーマットに昨年の保険料情報を事前に入力してインポートしておくと、従業員が操作する画面で昨年の保険料情報を表示できます。  特に、昨年SmartHR以外で年末調整を行なっていた場合に、従業員の入力の手間を軽減できます。   |   [年末調整機能で昨年分の保険等の情報を表示する](https://knowledge.smarthr.jp/hc/ja/articles/360035370453)  [【一覧】昨年の保険料データCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360035370113)   |
| 団体保険料データCSV |   LINC形式のDATファイル、もしくは損保標準形式のDATファイル、あるいはSmartHR形式のCSVファイルを使用して、団体保険情報を一括登録できます。  従業員の団体保険情報をインポートした状態で年末調整の依頼をしたい場合にご利用ください。   |   [団体保険のデータをインポートする](https://knowledge.smarthr.jp/hc/ja/articles/360036159813)  [団体保険ファイルのインポートの可否を確認する](https://knowledge.smarthr.jp/hc/ja/articles/360035370353)  [【一覧】団体保険料データCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360035370093)   |
| 企業型確定拠出年金データCSV |   企業型確定拠出年金情報を一括登録するためのCSVファイルです。  会社が把握している掛金などの情報をインポートした状態で、年末調整の依頼をしたい場合にご利用ください。   |   [企業型確定拠出年金のデータをインポートする](https://knowledge.smarthr.jp/hc/ja/articles/900004613586)  [【一覧】企業型確定拠出年金データCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360061217434)   |

# 年末調整の進捗状況時

主に従業員の依頼・書類確認状況をチェックしたい場合に使用します。

| **対象CSV** | **使用例** | **関連ヘルプページ** |
| --- | --- | --- |
| 依頼状況一覧CSV |   依頼、書類、前職情報のステータスを確認できます。  下記の場合に使用すると便利です。  - 従業員数が50名以上（SmartHRの画面上で一度に確認できる人数は50名までのため、従業員数が200名以上などの場合は、CSVファイルで確認するほうが便利です） - 依頼ごとの書類・前職情報の確認状況を把握したい - 差し戻しを行ない、再回答された依頼の状況を確認したい - チェック待ちの書類のうち、再回答された依頼の書類が何かチェックしたい - 依頼もしくは書類のステータスを、CSVファイルで一括更新したい   |   [特定の依頼グループの依頼状況一覧をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360034870814)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】依頼状況一覧CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360036159274)   |
| 書類作成更新日時リストCSV |   書類、前職情報のステータスが切り替わった日時を確認できます。  下記の場合に使用すると便利です。  - 書類が提出された日と、その書類が修正・差し戻された日を一覧で把握したい - 従業員とその家族の情報を別システムで管理していて、年末調整の書類作成日時と別システムのデータ更新日を比較したい場合（年末調整の書類作成日の方が古い場合、別システムに情報を上書きしないようにしたい）   |   [書類作成更新日時リストをダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360054928774)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】書類作成更新日時リストCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/4405791434393)   |
| 原本一覧CSV |   従業員ごとに、提出が必要な原本を一覧で確認できます。  「誰がどの原本を提出する予定か」「どの原本が提出されたのか確認したい」場合に便利です。   |   [従業員から提出予定のある原本を確認する](https://knowledge.smarthr.jp/hc/ja/articles/360054094953)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】原本一覧CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/4405798339865)   |

# 年末調整の結果確認・連携時

従業員から収集した年末調整の申告内容の確認や、給与計算など外部システムへのインポートの元データとして使用します。

## 収集情報に関わるCSVファイル

| **対象CSV** | **使用例** | **関連ヘルプページ** |
| --- | --- | --- |
| 従業員情報CSV（今年、翌年） |   「従業員本人」の情報を確認できます。  当年または翌年を選択すると、それぞれ選択した年の情報が出力されます。   |   [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】従業員情報CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360055845153)   |
| 配偶者情報CSV（今年、翌年） |   従業員の「配偶者」の情報を確認できます。  当年または翌年を選択すると、それぞれ選択した年の情報が出力されます。  なお、収集情報のダウンロード時に「税扶養控除対象でない配偶者と家族」をCSVに含めるかどうか選択できます。   |   [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】配偶者情報CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360055932213)   |
| 扶養家族情報CSV（今年、翌年） |   従業員の「扶養家族」の情報を確認できます。  当年または翌年を選択すると、それぞれ選択した年の情報が出力されます。  収集情報のダウンロード時に「税扶養控除対象でない配偶者と家族」をCSVに含めるかどうか選択できます。  CSVの項目の並びを「縦並び」「横並び」から選択できます。   |   [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】扶養家族情報CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360054141614)   |
| 保険料控除情報CSV |   従業員の「保険料控除の情報」を確認できます。  保険情報を保険契約ごとに表示できます。  CSVの項目の並びを「縦並び」「横並び」から選択できます。   |   [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】保険料控除情報CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360054586574)   |
| 前職情報CSV |   「前職の源泉徴収票の情報」を確認できます。   |   [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】前職情報CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360035657454)   |
| 住宅借入金控除情報CSV |   「住宅借入金控除の情報」を確認できます。  住宅借入金等特別控除申告書の作成有無や住宅借入金等特別控除申告書の種類を表示しています。   |   [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】住宅借入金控除情報CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360056627593)   |
| すべての申告情報CSV（今年、翌年） |   「すべての申告情報」を確認できます。  従業員情報、配偶者情報、扶養家族情報、保険料控除情報、住宅借入金控除情報、前職情報のうち、給与計算に必要な情報のみを抽出して、1つのファイルにまとめています。  当年または翌年を選択すると、それぞれ選択した年の情報が出力されます。  なお、収集情報のダウンロード時に「税扶養控除対象でない配偶者と家族」をCSVファイルに含めるかどうか選択できます。   |   [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】すべての申告情報CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360056629453)   |
| 今年の本人情報差分リストCSV |   従業員情報（本人情報）の差分を確認できます。  下記の時点を比較して差分を表示します。  - 年末調整機能に従業員が追加された時点のデータ（年末調整の作成または従業員の追加時のデータ） - 差分リストダウンロード時点のデータ   |   [年末調整の差分リストとは？](https://knowledge.smarthr.jp/hc/ja/articles/360035370213)  [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】今年の本人情報差分リストCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/4405362292121)   |
| 今年の扶養親族差分リストCSV |   配偶者および扶養家族の差分を確認できます。  下記の時点を比較して差分を表示します。  - 年末調整機能に従業員が追加された時点のデータ（年末調整の作成 または従業員の追加時のデータ） - 差分リストダウンロード時点のデータ   |   [年末調整の差分リストとは？](https://knowledge.smarthr.jp/hc/ja/articles/360035370213)  [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】今年の扶養親族差分リストCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/4405362296089)   |
| 今年と来年の本人情報差分リストCSV |   従業員情報（本人情報）の「今年と来年の差分」を確認できます。  下記の情報を比較して差分を表示します。  - 今年の本人情報として入力された内容 - 来年の本人情報として入力された内容   |   [年末調整の差分リストとは？](https://knowledge.smarthr.jp/hc/ja/articles/360035370213)  [差分リストをダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/4405171704985)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】今年と来年の本人情報差分リストCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/4408029105817/)   |
| 今年と来年の扶養親族情報差分リストCSV |   配偶者および扶養家族情報の「今年と来年の差分」を確認できます。  下記の情報を比較して差分を表示します。  - 今年の配偶者および扶養家族情報として入力された内容 - 来年の配偶者および扶養家族情報として入力された内容   |   [年末調整の差分リストとは？](https://knowledge.smarthr.jp/hc/ja/articles/360035370213)  [差分リストをダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/4405171704985)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】今年と来年の扶養親族差分リストCSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/4408021570841/)   |

:::related
[【一覧】各CSVファイル項目と年末調整書類の対照表](https://knowledge.smarthr.jp/hc/ja/articles/4408014538393)
:::

## システム連携用ファイル

| **対象CSV** | **使用例** | **関連ヘルプページ** |
| --- | --- | --- |
| 家族情報インポート用csv |   SmartHRの「従業員管理」の家族情報更新機能にある、CSVのレイアウトに合わせた形で、家族情報を出力したCSVファイルです。  年末調整の結果確定後、SmartHRの家族情報を年末調整の結果に更新する際に使用できます。   |   [年末調整の結果を、家族情報一括更新用CSVでSmartHRに取り込む際の注意事項](https://knowledge.smarthr.jp/hc/ja/articles/360039794053)  [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)  [【一覧】年末調整の家族情報一括更新用CSV凡例](https://knowledge.smarthr.jp/hc/ja/articles/360056730693)   |
| 給与奉行形式CSV（今年、翌年）(OBC奉行インポート用) |   収集情報を、給与奉行iシリーズの汎用データ受入形式一覧表に基づいたレイアウトで出力したCSVファイルです。  ダウンロードしたCSVファイルは、そのままでは使用できず、必要なカラムだけを抽出・結合する必要があるので注意してください。   |   [年末調整のデータを給与奉行形式でダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360035370233)  [特定の依頼グループの収集情報をダウンロードする](https://knowledge.smarthr.jp/hc/ja/articles/360055844513)  [情報一括ダウンロードの使い方](https://knowledge.smarthr.jp/hc/ja/articles/4405396080025)   |
