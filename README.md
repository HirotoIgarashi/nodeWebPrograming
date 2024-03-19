# Node.js 入門

## 1章 イントロダクション

Node.js の特徴とそれまでの技術との違い、および ECMAScript 標準、Web 標準との関係について説明します。また、Node.js の実行環境や、JavaScript プログラミングの基礎知識についても触れます。

### 1.1 Node.jsの特徴

#### 1.1.1 Node.jsのモジュールシステム

モジュールはJavaScriptのコードを1つのファイルにまとめたものです。モジュールの目的は、様々な場所から持ってきたコードを組み合わせて、大きなプログラムを作成できるようにすることです。

### 1.2 Node.jsとECMAScript標準、Web標準

JavaScriptの言語仕様はECMAScript標準によって規定されます。これは[ECMA International]という団体に属する技術委員会のTC39(Technical Committee 39)での議論を経て標準化されるものです。[ECMA International]のなかではJavaScriptの言語仕様はECMA-262となっています。

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

### 1.3 JavaScriptの基本

## 2章 Node.js と JavaScript 標準

## 3章 Node.js の実行環境のインストール

このドキュメントの動作環境の前提は、オペレーションシステムはLinuxでLinuxのディストリビューションはLinux mintです。

### 3.1 バージョンマネージャの利用

バージョンマネージャは[nvm]を使用します。

[nvm]: https://github.com/nvm-sh/nvm

#### 3.1.1 nvm について

## 3章 Node.js のパッケージ管理ツールの npm について

Node.jsをインストールすることでパッケージ管理ツールであるnpmコマンドを利用することができます。

## 4章 Webアプリケーションを作成する

## 5章 ユニットテストとデバッグ

### 5.1 ユニットテストツールの分類

### 5.2 Mocha + Chai + SinonJS + Istanbul

### 5.3 Jest

### 5.4 デバッグ

### 5.5 まとめ

## 6章 非同期プログラミング

Node.js はイベントループにより並行処理を実現しています。プログラマーは並行処理を実現するために非同期プログラミングに対応した記述を習得する必要があります。非同期プログラミングの様々なパターンや、歴史的に非同期プログラミングの記述方法がどのように進化したかを見ます。

### 6.1 イベントループと非同期処理プログラミング

#### 6.1.1 マルチスレッドによる並行処理とその問題点

#### 6.1.2 イベントループによる並行処理と非同期プログラミング

### 6.2 コールバック

JavaScriptにおける非同期プログラミングの実装パターンの基本的なものはコールバックです。処理Aの処理完了時に処理Bを処理する関数を記述するときには、その関数に処理Aと処理Bをコールバックとして引数に渡します。

Node.jsのコールバックによる非同期処理の実装には規約があり、fs.readdir()のインターフェースはこの規約に沿ったものとなっています。規約は次の２点からなります。

- コールバックがパラメータの最後にあること
- コールバックの最初のパラメータが処理中に発生したエラー、２つ目以降のパラメータが処理の結果であること

例として、testディレクトリにnew.txtという名前のファイルを作成するプログラムを作成してみましょう。以下が処理フローになります。

- testディレクトリの有無を確認してある場合はnew.txtファイルを作成して、ない場合はtestディレクトリを作成する。
- new.txtファイルの有無を確認して、ある場合はなにしないでプログラムを終了してない場合はnew.txtファイルを作成する。

### 6.3 Promise

### 6.4 ジェネレータ

### 6.5 async/await

## 7章 EventEmitter とストリーム

## 8章 マルチプロセス、マルチスレッド

## 9章 リアルタイム Web アプリケーション

## 10章 データストレージ

## 11章 デプロイ

## 12章 JavaScript とコンパイル
