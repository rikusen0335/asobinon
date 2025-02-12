---
title: ホラゲー制作に便利! マイクラの効果音/音楽を、自由な音程で聞けるツール「Minecraft Assets Listener」
---

[![assetsListener](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208174603.png)](#e/9/e9ef948e.png "assetsListener")  
Minecraft内に収録されている**SE(効果音)を鳴らせる「playsound」コマンド。**  
**爆発**や**叫び声**、**クイズの正解**など、**ピッチを変えれば色々な音を再生できます。**  
しかし、**どんな設定をすれば理想の音を鳴らせるのか分かりにくいですね。**  
そこで、[のと氏](https://twitter.com/notosanz)制作の**「Minecraft Assets Listener」**を使いましょう。  
****音量とピッチを自由に決めてSEと音楽を再生できる**ので、**意外な発見があるかも!?**** 

## 効果音/音楽が自由に聴ける便利ツール Minecraft Assets Listener

**「Minecraft Assets Listener」のダウンロード**  
[![「Minecraft Assets Listener」のダウンロード](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180641.jpg)](#f/d/fd772889.jpg "「Minecraft Assets Listener」のダウンロード")  
[**http://forum.minecraftuser.jp/viewtopic.php?f=36&t=2100&start=40#p225490**](http://forum.minecraftuser.jp/viewtopic.php?f=36&t=2100&start=40#p225490 "「Minecraft Assets Listener」が配布されている、作者さんの投稿です。")

※動作には[.NET framework 4](http://www.microsoft.com/ja-jp/download/details.aspx?id=17851)以上、[Java 7以上](http://java.com/ja/download/manual.jsp)が必要です。  
**もし上手く動作しない場合はPCにこれらがインストールされているか確認しましょう。**

[![「Minecraft Assets Listener」の実行](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131145.jpg)](#1/a/1ac36a4d.jpg "「Minecraft Assets Listener」の実行")  
ダウンロードした**zipを展開**して、中の**「MinecraftAssetsListener.exe」**を実行して下さい。

![2015-4-5_17-33-34](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180450.jpg)  
起動したら、まず**効果音などが入っているマイクラのバージョンを選びましょう。**  
私は1.8のガーディアンなどの音が聞きたいので「1.8」を選びました。

[![このツールの画面の見方、使い方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208143556.jpg)](#6/f/6ff5354e.jpg "このツールの画面の見方、使い方")  
上の**「Search」**に**Mob名やレコード名などを入力**すれば、目当ての効果音を見つけられます。  
**「Volume」**で**音量を設定します。**しかし、**1以下の少数しか打てません。**  
**「Pitch」**で**音程を調節します。**例えば**「2.0」にすれば高い音**が出て、**「0.0」で低い音**が出ます。  
それぞれの値を**キーボードで打った場合は、エンターキーを押さないと反映されない**のでご注意下さい。

[![音源をダブルクリックで再生、複数再生も可能。](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162715.jpg)](#d/c/dc4baaa7.jpg "音源をダブルクリックで再生、複数再生も可能。")  
聞きたい効果音/音楽をダブルクリックで再生できます。  
例えば**「music」で検索**して、**次々ダブルクリックしていけば、全部のBGMを同時に聞けます。**

[![Cave10.oggをピッチ0.2の音量最大でどうぞ。](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208175233.jpg)](#f/0/f0a44f1c.jpg "Cave10.oggをピッチ0.2の音量最大でどうぞ。")  
**お化け屋敷の配布ワールドで使えるな～**っと思った効果音を教えます。  
**「ambient」**で検索すると出てくる**「cave10.ogg」を、ピッチ0.2で聞いてみてください。**  
ふふふ…

**効果音とか音楽とか、聞いてどうしろっていうんだよ!!**  
..という方もいらっしゃると思います。**それでは、マイクラ内で使ってみましょう。**

## playsoundコマンドを使って、自由に色々な音を鳴らそう

先ほどのツールで、**ピッチを変えていろいろな音を再生すると、意外な発見があったはずです。**  
例えば、**スケルトン馬が死ぬ時の音**が**奇妙で怖～い雰囲気**だったり、  
**クリーパーの声のピッチを下げると人の声っぽく聞こえたり….**

中には、**配布ワールドでストーリーを作る時に使えるんじゃ?** という物が沢山あります。  
それらの効果音を、**マイクラのワールド/サーバーで再生してみましょう。**

**効果音/音楽を再生するplaysoundコマンドの基本構文****  
/playsound <音源の名前> <ターゲット> \[x y z\] \[音量(0.0~1.0)\] \[ピッチ(0.0~2.0)\] \[離れた時に音が小さくなるか\]**

<音源の名前>で効果音/音楽の場所を指定する時は、以下のように書きます。  
![2015-4-5_19-26-10 (1) (1)](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208180557.jpg)  
(例)流したい音が、ツールの画面で**「/sounds/mob/villager/yes2.ogg」**だった場合:  
コマンドの**<音源の名前>**は**「mob.villager.yes」**と書きます。  
**※音源名の最後に数字が付いていた場合、数字を省かないと再生できません!  
同じカテゴリの音源がランダムで再生されるようです。**  
([七色氏](https://twitter.com/nanairo2416)と[たつ氏](https://twitter.com/midorikuma_)がご指摘/情報提供して下さりました。**この場を借りて感謝申し上げます!!**)

\[2016年4月29日追記\] **バージョン1.9ではこの方法でサウンド名を指定できません**ので、赤石愛氏の[こちらサウンド名一覧](http://ch.nicovideo.jp/akaishi_ai/blomaga/ar928909)をご参照下さい。

**<ターゲット>**は音を聞かせる相手です。**配布ワールドなら@pで良いでしょう。**  
**ここまでが最低限必要な記述です。**

そして**\[x y z\]の座標**ですが、< b>音の発生源と聞かせるプレイヤーの距離を設定できます。  
例えば**「~ ~2 ~」と書いた場合、プレイヤーの2ブロック上から音が聞こえてきます。**

**\[音量\]**と**\[ピッチ\]**は、先ほどのツールで**自分の好きな音ができるまで調整を繰り返して決めましょう。**  
   
**\[離れた時に音が小さくなるか\]**は、**「1.0」にすれば音の発生源から離れても音が小さくなりません。**  
 

**お化け屋敷に使えそうな音を鳴らすplaysoundコマンド****  
/playsound ambient.cave.cave @p ~ ~ ~ 1.0 0.2**

環境音をランダムで流すだけです。**ピッチは0.2に下げています。**

意外にplaysoundコマンドって難しいですね。  
これで音楽を作っていた方はどれだけ苦労されたのか身に染みて分かりました。  
**「こんなツールを紹介して欲しい!」**といったご意見、コメント/[**Twitter**](https://twitter.com/napoan)で待ってます。
