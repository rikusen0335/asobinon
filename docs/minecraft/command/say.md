# say

|項目|内容|
|---|---|
|コマンド|`say`|
|目的|チャット欄にメッセージを流す|
|必要な権限レベル|2|
|コマブロで実行|可能|
|適用対象|-|

:::warning

特定のプレイヤーにメッセージを送るには、sayではなく[/tell](./tell)コマンドを使ってください。

:::

## 構文

[[dl|チャットにメッセージを流す]]
|```
|/say <メッセージ>
|```

## 引数

[[dl|<メッセージ> (必須)]]
|チャット欄に流すメッセージを指定する。  
  
メッセージの中で**ターゲットセレクターを使うと、そのターゲットセレクターで指定したエンティティ(プレイヤー含む)の名前をメッセージ内に入れることが出来る。**@aなどのセレクターを使うなどして複数のターゲットが指定された場合、「○○、○○」という風にターゲットの名前が並べられてメッセージ内に入る。

## 実行結果

メッセージ内のターゲットセレクターの対象が見つからない場合は空白になり、そのままメッセージが流れる。 

## 注意

sayコマンドは全員にメッセージを流すのであって、**特定の人にメッセージを送るコマンドではない。**

例えば `/say @a[m=0]` クリエに変えて と書いても、サバイバルモードのプレイヤー名がメッセージの中に表示されるだけだ。sayコマンドにおいて**ターゲットセレクターは送信先の指定ではなく、単に名前を表示するために用いる。**
