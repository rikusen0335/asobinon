---
slug: /minecraft/howto/bedrock-multiplayer-permission/
title: マルチプレイでブロックが壊せない時は、権限の設定を見直そう
sidebar_position: 0
---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208103713.png)

Twitterを見ていると、**「マルチプレイでブロックが壊せない」**という報告をよく目にします。それ、**設定を変えれば簡単に解決できますよ。**

---

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208104931.jpg)

スイッチでフレンドのワールドに参加してみました。あら、ブロックが選択状態にならない。壊そうとしても空振りです。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095339.jpg)

ドアを開けようとしても… むり。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095342.jpg)

チェストも開けられない。

だからといって諦める必要はありません! **ちょっと設定を変えれば解決可能です。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100852.jpg)

スイッチでポーズメニューを開きましょう。右上の自分の名前の横に、**手のマーク**が表示されていませんか? これは**「あなたは”ビジター”です」**という意味なんです。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208111453.jpg)

マルチプレイには、**「ビジター」「メンバー」「オペレーター」**の**3段階の権限レベル**があります。**「ビジター」は、ほとんどワールドに干渉できない**んです。

だからといって、**ビジターが自分で「メンバー」や「オペレーター」になることはできません。**それができたら権限レベルの意味がないですもんね。ということで、**マルチプレイのホストの人に、自分の権限レベルを変えてもらいましょう。**

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208110608.png)

**こちらはホスト側の画面です。**ブロックを壊せなくて困っている人の、手のマークを選択。

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208102223.png)

すると権限の設定画面が出てくるので、**とりあえず「メンバー」に変更しましょう。**(オペレーターは強すぎます)

また、**それぞれの項目は、個別に変更することもできます。**個別に変えると「カスタム」という権限レベルになります。

## BE1.4時点で 各権限レベルでできること

| 項目名 | ビジター | メンバー | オペレーター |
|---|---|---|---|
| 建築及び採掘                | いいえ  | はい   | はい     |
| ドアおよびスイッチの使用          | いいえ  | はい   | はい     |
| 入れ物の開閉                | いいえ  | はい   | はい     |
| プレイヤーへの攻撃             | いいえ  | はい   | はい     |
| モブへの攻撃                | いいえ  | はい   | はい     |
| オペレーター(OP権限)          | いいえ  | いいえ  | はい     |
| テレポートの使用              | いいえ  | いいえ  | はい     |


**「オペレーター」をONにしないと、ほとんどのコマンドは実行できません。**(helpやtellといった誰でも使えるコマンドもあります)

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095345.jpg)

ビジターからメンバーに変えたことで、ブロックを壊したりできるようになりました。みなさんも権限レベルを使いこなして、快適にマルチプレイを楽しみましょう!
