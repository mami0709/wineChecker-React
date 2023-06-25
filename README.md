# アプリケーション名

Wine Checker

# アプリケーション概要

ワインは種類が多くてわからない…
自分に合ったワインを知りたい。そんな人のために 30 秒であなたに合ったおすすめのワインを診断できるアプリです。

# デモ

![](../../Desktop/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202023-06-25%2018.29.11.png)
※書く

# 使用した技術

### フロントエンド

- Next.js
- TypeScript
- Redux Toolkit
- Mui
- axios

### バックエンド

- PHP
- MySQL
- Docker

# デザイン

デザインは最初に Figma で起こしました。
https://www.figma.com/file/aXsIMaNZ9bn2NV0YsO4M8o/WineChecker%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?type=design&node-id=0-1&t=BFrK8KTRqfjCDtoH-0

# 環境構築

### はじめに

このアプリはフロントとバックエンドを別々のリポジトリで管理しています。
なので手元で動かす際はどちらもローカルで起動した上でご使用ください。

バックエンドのリポジトリ
https://github.com/mami0709/wineChecker-PHP

### バックエンドの環境構築手順

1. git からクローンする

```
git clone https://github.com/mami0709/wineChecker-PHP.git
```

2. Docker を起動。  
   `docker-compose up -d`  
   http://localhost:8080/ で PHP info が表示されたら OK

### フロントエンドの環境構築手順

1. git からクローンする

```
git clone https://github.com/mami0709/wineChecker-React.git
```

2. パッケージのインストール

```
npm i
```

3. ローカル起動

```
npm run dev
```

http://localhost:3000/ にアクセスしてトップページが表示されれば OK！
