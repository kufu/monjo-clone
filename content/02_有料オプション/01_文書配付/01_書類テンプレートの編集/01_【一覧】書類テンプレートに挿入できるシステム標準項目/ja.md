---
id: '360061384674'
title: 【一覧】書類テンプレートに挿入できるシステム標準項目
labels:
  - 有料オプション
---
書類テンプレートの編集画面で、テンプレート変数として挿入できる、SmartHRの従業員情報の一覧です。

# テンプレート変数として書類に挿入できるSmartHRの従業員項目

## テンプレート変数とは？

テンプレート変数とは、書類を作成する時に依頼日、署名日、そしてSmartHRに登録されているデータを挿入するために、書類テンプレートに埋め込んでおく文字列のことです。

テンプレート変数を利用すると、書類作成のたびに従業員の情報や会社情報を書き換える必要がなくなります。

各企業アカウントのSmartHRで作成済みのカスタム従業員項目も、テンプレート変数として利用できます。

ここでは、システム標準項目の従業員情報を紹介します。

:::related
[テンプレート変数を使って書類テンプレートを作成する](https://knowledge.smarthr.jp/hc/ja/articles/360036818773)
:::

## システム標準項目とテンプレート変数の対応表

| 項目名 | テンプレート変数 |
| --- | --- |
| 従業員/雇用形態 | crew/emp\_type |
| 従業員/雇用形態/名称 | crew/employment\_type/name |
| 従業員/雇用形態/プリセットタイプ | crew/employment\_type/preset\_type |
| 従業員/在籍状況 | crew/emp\_status |
| 従業員/従業員番号 | crew/emp\_code |
| 従業員/姓 | crew/last\_name |
| 従業員/名 | crew/first\_name |
| 従業員/姓（ヨミガナ） | crew/last\_name\_yomi |
| 従業員/名（ヨミガナ） | crew/first\_name\_yomi |
| 従業員/ビジネスネーム姓 | crew/business\_last\_name |
| 従業員/ビジネスネーム名 | crew/business\_first\_name |
| 従業員/ビジネスネーム姓（ヨミガナ） | crew/business\_last\_name\_yomi |
| 従業員/ビジネスネーム名（ヨミガナ） | crew/business\_first\_name\_yomi |
| 従業員/性別 | crew/gender |
| 従業員/性別(日本語) | crew/gender\_ja |
| 従業員/電話番号 | crew/tel\_number |
| 従業員/メールアドレス | crew/email |
| 従業員/住所/国/国番号 | crew/address/country/number |
| 従業員/住所/国/日本語 | crew/address/country/ja |
| 従業員/住所/国/英語 | crew/address/country/en |
| 従業員/住所/郵便番号 | crew/address/zip\_code |
| 従業員/住所/都道府県 | crew/address/pref |
| 従業員/住所/市区町村 | crew/address/city |
| 従業員/住所/丁目・番地 | crew/address/street |
| 従業員/住所/建物名・部屋番号 | crew/address/building |
| 従業員/住所/ヨミガナ | crew/address/literal\_yomi |
| 従業員/住所/住所セット | crew/address/set |
| 従業員/住所/住所セット（郵便番号含む） | crew/address/set\_with\_zip\_code |
| 従業員/住民票住所/都道府県 | crew/resident\_card\_address/pref |
| 従業員/住民票住所/市区町村 | crew/resident\_card\_address/city |
| 従業員/住民票住所/丁目・番地 | crew/resident\_card\_address/street |
| 従業員/住民票住所/建物名・部屋番号 | crew/resident\_card\_address/building |
| 従業員/住民票住所/住所セット | crew/resident\_card\_address/set |
| 従業員/緊急連絡先住所/国/国番号 | crew/emergency\_address/country/number |
| 従業員/緊急連絡先住所/国/日本語 | crew/emergency\_address/country/ja |
| 従業員/緊急連絡先住所/国/英語 | crew/emergency\_address/country/en |
| 従業員/緊急連絡先住所/都道府県 | crew/emergency\_address/pref |
| 従業員/緊急連絡先住所/市区町村 | crew/emergency\_address/city |
| 従業員/緊急連絡先住所/丁目・番地 | crew/emergency\_address/street |
| 従業員/緊急連絡先住所/建物名・部屋番号 | crew/emergency\_address/building |
| 従業員/緊急連絡先住所/住所セット | crew/emergency\_address/set |
| 従業員/緊急連絡先（続柄） | crew/emergency\_relation\_name |
| 従業員/緊急連絡先（姓） | crew/emergency\_last\_name |
| 従業員/緊急連絡先（名） | crew/emergency\_first\_name |
| 従業員/緊急連絡先（姓：ヨミガナ） | crew/emergency\_last\_name\_yomi |
| 従業員/緊急連絡先（名：ヨミガナ） | crew/emergency\_first\_name\_yomi |
| 従業員/緊急連絡先（電話番号） | crew/emergency\_tel\_number |
| 従業員/事業所/管理名 | crew/biz\_establishment/name |
| 従業員/事業所/社会保険の事業所名 | crew/biz\_establishment/soc\_ins\_name |
| 従業員/事業所/労働保険の事業所名 | crew/biz\_establishment/lab\_ins\_name |
| 従業員/事業所/給与支払者の登録住所/住所セット | crew/biz\_establishment/salary\_payer\_address/set |
| 従業員/事業所/社会保険の登録住所/住所セット | crew/biz\_establishment/soc\_ins\_address/set |
| 従業員/事業所/労働保険の登録住所/住所セット | crew/biz\_establishment/lab\_ins\_address/set |
| 従業員/部署1（※） | crew/department |
| 従業員/役職 | crew/position |
| 従業員/業務内容 | crew/occupation |
| 従業員/退職・解雇・死亡年月日/ハイフン区切り | crew/resigned\_at/date\_hyphen |
| 従業員/退職・解雇・死亡年月日/西暦 | crew/resigned\_at/date\_ad |
| 従業員/退職・解雇・死亡年月日/和暦 | crew/resigned\_at/date\_era |
| 従業員/退職・解雇・死亡年月日/スラッシュ区切り | crew/resigned\_at/date\_slash |
| 従業員/退職・解雇・死亡事由 | crew/resigned\_reason |
| 従業員/通勤経路 | crew/nearest\_station\_and\_line |
| 従業員/定期券代① | crew/commutation\_1\_expenses |
| 従業員/期間①/数値(ヶ月) | crew/commutation\_1\_period/number\_per\_month |
| 従業員/期間①/文字列 | crew/commutation\_1\_period/string |
| 従業員/片道運賃① | crew/commutation\_1\_single\_fare |
| 従業員/定期券代② | crew/commutation\_2\_expenses |
| 従業員/期間②/数値(ヶ月) | crew/commutation\_2\_period/number\_per\_month |
| 従業員/期間②/文字列 | crew/commutation\_2\_period/string |
| 従業員/片道運賃② | crew/commutation\_2\_single\_fare |
| 従業員/配偶者の有無 | crew/having\_spouse |
| 従業員/生年月日/ハイフン区切り | crew/birth\_at/date\_hyphen |
| 従業員/生年月日/西暦 | crew/birth\_at/date\_ad |
| 従業員/生年月日/和暦 | crew/birth\_at/date\_era |
| 従業員/生年月日/スラッシュ区切り | crew/birth\_at/date\_slash |
| 従業員/入社日/ハイフン区切り | crew/entered\_at/date\_hyphen |
| 従業員/入社日/西暦 | crew/entered\_at/date\_ad |
| 従業員/入社日/和暦 | crew/entered\_at/date\_era |
| 従業員/入社日/スラッシュ区切り | crew/entered\_at/date\_slash |
| 従業員/給与支給形態/名称 | crew/payment\_period/name |
| 従業員/雇用保険 被保険者番号 | crew/emp\_ins\_insured\_person\_number |
| 従業員/社会保険/健康保険の被保険者整理番号 | crew/soc\_ins/hel\_ins\_insured\_person\_number |
| 従業員/社会保険/厚生年金保険の被保険者整理番号 | crew/soc\_ins/soc\_ins\_insured\_person\_number |
| 従業員/社会保険/基礎年金番号 | crew/soc\_ins/basic\_pension\_number |
| 従業員/社会保険/資格取得日/ハイフン区切り | crew/soc\_ins/soc\_ins\_qualified\_at/date\_hyphen |
| 従業員/社会保険/資格取得日/西暦 | crew/soc\_ins/soc\_ins\_qualified\_at/date\_ad |
| 従業員/社会保険/資格取得日/和暦 | crew/soc\_ins/soc\_ins\_qualified\_at/date\_era |
| 従業員/社会保険/資格取得日/スラッシュ区切り | crew/soc\_ins/soc\_ins\_qualified\_at/date\_slash |
| 従業員/社会保険/資格喪失日/ハイフン区切り | crew/soc\_ins/soc\_ins\_disqualified\_at/date\_hyphen |
| 従業員/社会保険/資格喪失日/西暦 | crew/soc\_ins/soc\_ins\_disqualified\_at/date\_ad |
| 従業員/社会保険/資格喪失日/和暦 | crew/soc\_ins/soc\_ins\_disqualified\_at/date\_era |
| 従業員/社会保険/資格喪失日/スラッシュ区切り | crew/soc\_ins/soc\_ins\_disqualified\_at/date\_slash |
| 従業員/契約種別 | crew/contract\_type\_ja |
| 従業員/契約更新の有無 | crew/contract\_renewal\_type\_ja |
| 従業員/契約開始日/ハイフン区切り | crew/contract\_start\_on/date\_hyphen |
| 従業員/契約開始日/西暦 | crew/contract\_start\_on/date\_ad |
| 従業員/契約開始日/和暦 | crew/contract\_start\_on/date\_era |
| 従業員/契約開始日/スラッシュ区切り | crew/contract\_start\_on/date\_slash |
| 従業員/契約終了日/ハイフン区切り | crew/contract\_end\_on/date\_hyphen |
| 従業員/契約終了日/西暦 | crew/contract\_end\_on/date\_ad |
| 従業員/契約終了日/和暦 | crew/contract\_end\_on/date\_era |
| 従業員/契約終了日/スラッシュ区切り | crew/contract\_end\_on/date\_slash |
| 会社/会社名 | company/name |
| 会社/法人番号 | company/corporate\_number |
| 会社/住所/会社の住所（国）/国番号 | company/address/country/number |
| 会社/住所/会社の住所（国）/日本語 | company/address/country/ja |
| 会社/住所/会社の住所（国）/英語 | company/address/country/en |
| 会社/住所/会社の住所（郵便番号） | company/address/zip\_code |
| 会社/住所/会社の住所（都道府県） | company/address/pref |
| 会社/住所/会社の住所（市区町村） | company/address/city |
| 会社/住所/会社の住所（丁目・番地） | company/address/street |
| 会社/住所/会社の住所（建物名・部屋番号） | company/address/building |
| 会社/住所/会社の住所（ヨミガナ） | company/address/literal\_yomi |
| 会社/住所/住所セット | company/address/set |
| 会社/住所/住所セット（郵便番号含む） | company/address/set\_with\_zip\_code |
| 会社/電話番号 | company/tel\_number |
| 会社/代表者/姓 | company/owner/last\_name |
| 会社/代表者/名 | company/owner/first\_name |
| 会社/代表者/メールアドレス | company/owner/email |
| 会社/代表者/役職 | company/owner/position |
| 依頼日（ハイフン区切り） | request\_date\_hyphen |
| 依頼日（西暦） | request\_date\_ad |
| 依頼日（和暦） | request\_date\_era |
| 依頼日（スラッシュ区切り） | request\_date\_slash |
| 署名日（ハイフン区切り） | sign\_date\_hyphen |
| 署名日（西暦） | sign\_date\_ad |
| 署名日（和暦） | sign\_date\_era |
| 署名日（スラッシュ区切り） | sign\_date\_slash |

※部署2、部署3はテンプレート変数での挿入ができません。テンプレート変数で挿入する場合にはSmartHRの従業員項目にカスタム項目を作成するか、CSV挿入用テンプレート変数で挿入してください。

:::related
[従業員ごとに異なる情報を書類に反映させるには？](https://knowledge.smarthr.jp/hc/ja/articles/900007339543/)
:::
