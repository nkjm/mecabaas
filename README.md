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

http[s]://YOUR_HOST_NAME/api/parse?text=分析したいテキスト

**わかち書き**

http[s]://YOUR_HOST_NAME/api/wakachi?text=分析したいテキスト
