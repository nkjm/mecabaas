# 概要

日本語文章を形態素解析し、その結果を返してくれるAPIを実装するアプリです。node.jsで稼働します。
http://hoge.com/api/parse?text=ハンバーグを食べました。　というようなGETリクエストを投げるだけで形態素解析された結果を返してくれます。

# 環境要件

- node.js
- mecab, IPA辞書, mecab-ipadic-NElogdがインストールされていること。（mecab-ipadic-NElogdはなくても動きます。その場合、下記インストール手順の中でmecab-asyncモジュールを修正せずそのまま使ってください）

# インストール方法

```
$ git clone https://github.com/nkjm/mecabaas.git
$ npm install
```

mecab-asyncモジュールをmecab-ipadic-NElogdを使うように修正する。

```
$ vi node_modules/mecab-async/mecab.js
```

```
// for backward compatibility
var MeCab = function() {};

MeCab.prototype = {
    command : 'mecab -d ' + process.env.MECAB_IPADIC_NELOGD_PATH,
```

# 実行

```
// mecab-ipadic-neologdへのパスは自身の環境の値に置き換えてください。
MECAB_IPADIC_NELOGD_PATH=/usr/local/mecab/lib/mecab/dic/mecab-ipadic-neologd npm start
```

# APIへのアクセス

**解析**

- http[s]://YOUR_HOST_NAME/api/parse?text=分析したいテキスト

**わかち書き**

- http[s]://YOUR_HOST_NAME/api/wakachi?text=分析したいテキスト
