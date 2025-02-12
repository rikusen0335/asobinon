---
title: スイッチ/PS4対応 誰でも分かるスコアボードコマンドの使い方
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123451.png)

マイクラにおいて、配布ワールドの制作やPvPの運営に欠かせない**「スコアボードコマンド」**。BEでは先日のアップデート「1.7」でついに実装されました。しかし**BEのスコアボードには1.7現在基本的な機能しかありません。**だからこそ、**今のうちに使い方を覚えておきましょう！**

## 目次

*   [まずはオブジェクティブを作成して表示してみよう](#objectives)
*   [スコアの数値を編集してみよう](#score)
*   [各プレイヤーのスコア一覧を確認してみよう](#list)
*   [スコアの数値を他のコマンドで使ってみよう](#selector)

## まずはオブジェクティブを作成して表示してみよう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208101829.png)

スコアボードコマンドでは、スコアを格納する「オブジェクティブ」を作成・編集します。**オブジェクティブはつまり「値の項目」であり、それぞれに自由な名前をつけることができます。**注意してほしいのは、**「一箇所に表示できるオブジェクティブは一つだけ」**ということ。**例えば画面横に残り時間と得点を同時に表示することはできません。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115939.png)

オブジェクティブを作成するコマンド

/scoreboard objectives add <オブジェクティブの名前> dummy \[表示名\]

*   Java版ならdummy以外も使えるが、**BE1.7ではdummyしか使えない**
*   <オブジェクティブの名前>は入力必須で英数字しか使えない
*   \[表示名\]は日本語も使える。またこれは入力しなくてもいい

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115946.png)

/scoreboard objectives list で、作成したオブジェクティブの一覧を表示できます。また不要になったオブジェクティブは、/scoreboard objectives remove <オブジェクティブの名前> で削除できます。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208123655.png)

次は作成したオブジェクティブを画面横に表示してみましょう。ただしまだ値は設定していないので、**オブジェクティブの名前しか表示されません。** (ちなみにJava版なら名前すら表示されません)

オブジェクティブを画面横に表示するコマンド

/scoreboard objectives setdisplay sidebar <オブジェクティブの名前>

ちなみに、sidebarをlistに変えれば、画面横ではなくポーズメニューに表示できます。belownameにすれば、マルチプレイで相手のプレイヤー名の下にスコアが表示されます。

スコアボードの表示を解除するには?

オブジェクティブを削除せずに、スコアボードの表示だけを解除したい場合は、/scoreboard objectives setdisplay sidebar というふうに、**オブジェクティブを指定せずにコマンドを実行して下さい。**すると指定した場所から表示が消えます。

## スコアの数値を編集してみよう

次はいよいよ**オブジェクティブの値をコマンドで編集**してみましょう。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115942.png) ![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115950.png)

オブジェクティブの数値を好きな値に変えるコマンド

/scoreboard players set <プレイヤー名> <オブジェクティブの名前> <設定したい数字>

オブジェクティブの数値に好きな値を追加するコマンド

/scoreboard players add <プレイヤー名> <オブジェクティブの名前> <追加したい数字>

オブジェクティブの数値から好きな値を減算するコマンド

/scoreboard players remove <プレイヤー名> <オブジェクティブの名前> <減算したい数字>

やり直したい時は、0に変えるのではなく、スコアを「リセット」することもできます。**リセットすると値は空っぽになり、表示されなくなります。**

オブジェクティブの数値をリセットするコマンド

/scoreboard players reset <プレイヤー名> <オブジェクティブのの名前>

## 各プレイヤーのスコア一覧を確認してみよう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115953.png)

指定したプレイヤーのスコア一覧を確認するコマンド

/scoreboard players list \[プレイヤー名\]  
(プレイヤー名を入力しなかった場合は、スコアボードでトラッキングされているエンティティの一覧が表示される)

## スコアの数値を他のコマンドで使ってみよう

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208115958.png)

**スコアボード機能の真価は、その数値を他のコマンドで使うことで発揮されます。**試しに**test**というオブジェクティブを作成した後、/tell @a\[scores={test=2..}\] aaa を実行してみましょう。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208120003.png)

すると「セレクターに合う対象がありません」と言われるはずです。実は、@a\[scores={test=2..}\] は**「testが2以上のプレイヤー全員」**という意味なのです。

こんな風に\[scores={オブジェクティブの名前=数字}\]と書けば、**スコアを条件にエンティティを選べるのです。**これを応用すれば、**マイクラの中であたかも別のゲームを作り出すようなことが可能になる**んです。

\[scores={オブジェクティブの名前=数字,オブジェクティブの名前=数字}\]という風に書けば、**複数のスコアを条件にすることも可能**です。

スコアの条件の書き方一覧

\[scores={test=1}\]

testが**1の時だけ**実行する

\[scores={test=1..}\]

testが**1以上**の時だけ実行する

\[scores={test=1..3}\]

testが**1から3**の時だけ実行する

\[scores={test=..3}\]

testが**3以下**の時だけ実行する

\[scores={foo=1,bar=1..5}\]

**fooが1かつbarが1から5の時だけ**実行する

前にJava版でスコアボードコマンドを使っていた人はちょっと困惑するかもしれません。BEのスコアの書き方は、**Java版の「1.13」と同じ仕様になっている**んです。

例えばこんなことができます

/tp @a\[scores={test=5}\] ~ ~50 ~

testが5**ぴったり**のプレイヤー全員をコマンド実行場所から50m上に移動させる

/give @a\[scores={test=1..,foo=5..}\] diamond

testが1**以上**かつfooが5**以上**のプレイヤー全員にダイヤモンドを与える

/execute @a\[scores={test=3..}\] ~ ~ ~ kill @a\[r=5,scores={foo=..5}\]

testが3**以上**の人が、その**半径5m**以内のfooが5**以下**のプレイヤー全員をキルする

---

いかがでしたか。まだダミーのスコアを操ることしかできないBEのスコアボードコマンドですが、**使いこなすことで素晴らしいワールドが作れるはずです。**みなさんも応用法を考えてみて下さい！
