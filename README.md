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
var MECAB_IPADIC_NELOGD_PATH = process.env.MECAB_IPADIC_NELOGD_PATH;

// for backward compatibility
var MeCab = function() {};

MeCab.prototype = {
    command : 'mecab -d ' + MECAB_IPADIC_NELOGD_PATH,
```

# 実行

```
MECAB_IPADIC_NELOGD_PATH=YOUR_PATH_TO_MECAB_IPADIC_NELOGD npm start
```
