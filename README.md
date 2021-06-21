# reactNotCreateapp
create-react-app を使わずに React の環境を作る

https://qiita.com/dhythm/items/64b14cad94fa78f34bb8
の内容で進めたもの

Add gitignore   ==> nodeで作成（VSCodeプラグイン）

$ yarn init

$ mkdir -p src/components           ※サブフォルダごと作成
$ touch src/components/app.js
$ touch src/index.{html,js}         ※２ファイル作成
$ touch .babelrc webpack.config.js


$ yarn add react react-dom
$ yarn add -D webpack webpack-cli webpack-dev-server
$ yarn add -D babel babel-loader @babel/core @babel/preset-env @babel/preset-react
$ yarn add -D html-webpack-plugin http-server

Error: Cannot find module 'webpack-cli/bin/config-yargs' のエラーがでる
→　webpack-cliのバージョン4系には、config-yargsが含まれていないのでエラーとなってる
     最新は 4.0
     "webpack-cli": "^3.3.12", 　にするか

    webpack-cli serve --mode development
    元のソース
    // "start": "node_modules/.bin/webpack-dev-server --mode development --open --hot",

    参照元：https://qiita.com/whiteraccoon/items/f0675297fce333ac9474
        CSCはwebpack-dev-serverを利用していた（webpack:3.3.3)

yarn add -D yargs       ※記載は無いが、エラーになったので追加した


