# Node.js 入門

## 1章 Node.jsの紹介

Node.jsはオープンソースのJavaScript実行環境です。

Node.js の特徴とそれまでの技術との違い、および ECMAScript 標準、Web 標準との
関係について説明します。また、Node.js の実行環境や、JavaScript プログラミングの
基礎知識についても触れます。

### 1.1 Node.jsの特徴

#### 1.1.1 Node.jsのモジュールシステム

モジュールとは、変数や関数などをまとめたものです。JavaScriptにおいては、1つのモジュールは1つのJavaScriptファイルに対応します。

モジュールは、保守性・名前空間・再利用性のために使われます。

- 保守性: 依存性の高いコードの集合を一箇所にまとめ、それ以外のモジュールへの依存性を減らせます
- 名前空間: モジュールごとに分かれたスコープがあり、グローバルの名前空間を汚染しません
- 再利用性: 変数や関数を複数のプロクラムにコピーせずにモジュールとして再利用できます

モジュールシステムとは、プログラムからモジュールの機能をインポートして使用できる仕組みのことです。
Node.jsの登場当初(2009年)はJavaScript自体の仕様にはモジュールシステムはありませんでした。
そこでNode.jsはCommonJSモジュールと呼ばれるモジュールシステムを導入しました。
2015年にJavaScript自体の仕様にESモジュールと呼ばれるモジュールシステムが組み込まれ、Node.jsでも利用可能になりました。

つまり2015年以降はNode.jsのモジュールシステムにはCommonJSモジュールとESモジュールが混在する状態になりました。新しくプロジェクトを作成するときはESモジュールを選択するほうが良いと思います。

```mermaid
graph TD;
    A[[モジュールA]]--エクスポート-->d(( ))--インポート-->C[メインのプログラム];
    B[[モジュールB]]--エクスポート-->e(( ))--インポート-->C;
```

#### 1.1.2 ESモジュール

#### 1.1.3 CommonJSモジュール

CommonJSモジュールは、モジュールレベルのスコープでNode.jsが自動的に割り当てる
moduleという変数のexportsプロパティ(module.exports)を通して、外部に関数や変数を
公開します。一方、外部のモジュールをロードする際には同じくモジュールスコープで割
り当てられるrequire()という関数を使います。

例えば与えられた2つの引数を足す関数を作成してadd.cjsというファイルに保存します。
このファイルの拡張子はcjsである必要があります。

```javascript
module.exports.add = (a, b) => a + b;
```

この機能を利用するプログラムの拡張子もcjsである必要があります。

```javascript
const math = require('./add.cjs')
math.add(1, 2);
```

### 1.2 Node.jsとECMAScript標準、Web標準

JavaScriptの言語仕様はECMAScript標準によって規定されます。これは
[ECMA International]という団体に属する技術委員会のTC39(Technical Committee 39)
での議論を経て標準化されるものです。[ECMA International]のなかではJavaScriptの
言語仕様はECMA-262となっています。

[ECMA International]: https://www.ecma-international.org/

ECMAScript標準のバージョンとリリース時期

| edition | リリース時期 | 通称         | 追加された仕様 |
| ------- | ------------ | ------------ | -------------- |
| 1st     | 1997年6月    | ES(ES1)      |                |
| 2nd     | 1998年6月    | ES2          |                |
| 3rd     | 1999年12月   | ES3          |                |
| 4th     | 破棄         | ES4          |                |
| 5th     | 2009年12月   | ES5          |                |
| 5.1th   | 2011年6月    | ES5.1        |                |
| 6th     | 2015年6月    | ES2015(ES6)  | ESモジュール   |
| 7th     | 2016年6月    | ES2016(ES7)  |                |
| 8th     | 2017年6月    | ES2017(ES8)  |                |
| 9th     | 2018年6月    | ES2018(ES9)  |                |
| 10th    | 2019年6月    | ES2019(ES10) |                |
| 11th    | 2020年6月    | ES2020(ES11) |                |
| 12th    | 2020年6月    | ES2020(ES11) |                |

ESモジュールはECMAScriptモジュールとも呼ばれます。

### 1.3 JavaScriptの基本

## 2章 Node.js と JavaScript 標準

## 3章 Node.js の実行環境のインストール

このドキュメントは動作環境としてオペレーションシステムはLinuxでありLinuxの
ディストリビューションはLinux mintであることを前提として記述しています。

### 3.1 バージョンマネージャの利用

バージョンマネージャは[nvm]を使用します。

[nvm]: https://github.com/nvm-sh/nvm

#### 3.1.1 nvm について

## 3章 Node.js のパッケージ管理ツールの npm について

Node.jsをインストールするとパッケージ管理ツールであるnpmコマンドもインストール
されnpmコマンドを利用することができるようになります。

## 4章 Webアプリケーションを作成する

## 5章 ユニットテストとデバッグ

### 5.1 ユニットテストツールの分類

### 5.2 Mocha + Chai + SinonJS + Istanbul

### 5.3 Jest

### 5.4 デバッグ

### 5.5 まとめ

## 6章 非同期プログラミング

Node.js はイベントループにより並行処理を実現しています。
プログラマーは並行処理を実現するために非同期プログラミングに対応した記述を
習得する必要があります。非同期プログラミングの様々なパターンや、歴史的に
非同期プログラミングの記述方法がどのように進化したかを見ます。

### 6.1 イベントループと非同期処理プログラミング

#### 6.1.1 マルチスレッドによる並行処理とその問題点

#### 6.1.2 イベントループによる並行処理と非同期プログラミング

### 6.2 コールバック

JavaScriptにおける非同期プログラミングの実装パターンの基本的なものは
コールバックです。処理Aの処理完了時に処理Bを処理する関数を記述するときには、
その関数に処理Aと処理Bをコールバックとして引数に渡します。

Node.jsのコールバックによる非同期処理の実装には規約があり、fs.readdir()の
インターフェースはこの規約に沿ったものとなっています。規約は次の２点から
なります。

- コールバックがパラメータの最後にあること
- コールバックの最初のパラメータが処理中に発生したエラー、２つ目以降の
パラメータが処理の結果であること

例として、testディレクトリにnew.txtという名前のファイルを作成するプログラムを
作成してみましょう。以下が処理フローになります。

- testディレクトリの有無を確認してある場合はnew.txtファイルを作成して、
ない場合はtestディレクトリを作成する。
- new.txtファイルの有無を確認して、ある場合はなにもしないでプログラムを終了
してない場合はnew.txtファイルを作成する。

### 6.3 Promise

### 6.4 ジェネレータ

### 6.5 async/await

## 7章 EventEmitter とストリーム

## 8章 マルチプロセス、マルチスレッド

## 9章 リアルタイム Web アプリケーション

## 10章 データストレージ

## 11章 デプロイ

## 12章 JavaScript とコンパイル
