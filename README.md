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
MECAB_IPADIC_NELOGD_PATH=YOUR_PATH_TO_MECAB_IPADIC_NELOGD npm start
```

# APIへのアクセス

**解析**
http[s]://YOUR_HOST_NAME/api/parse?text=分析したいテキスト

**わかち書き**
http[s]://YOUR_HOST_NAME/api/wakachi?text=分析したいテキスト
