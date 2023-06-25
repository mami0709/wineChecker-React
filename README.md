# アプリケーション名

Wine Checker

# アプリケーション概要

ワインは種類が多くてわからない…
自分に合ったワインを知りたい。そんな人のために 30 秒であなたに合ったおすすめのワインを診断できるアプリです。

# 画面
### トップページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/ff768608-eacb-4643-8722-c2760ef3db9f)

### 診断ページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/f4d7b374-e30a-467a-97a1-f8d5e6dcf28a)

### 診断結果ページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/1f90f3f2-e93b-4732-96b2-d3f948b3f01b)

### おすすめ一覧ページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/a05481e0-e7da-405a-b22f-723d72333bed)

### おすすめ詳細ページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/5c3b184c-368e-41f3-a844-bc166651369c)

### ワイン投稿ページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/6b8bb79f-e1f2-4840-b16b-329ee879e047)

### ログインページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/04ae85c6-dcc1-4c66-afb6-262c91f78d80)

### 会員登録ページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/b66f8bb8-02f8-4f45-8b64-c3c989680430)

### マイページ
![image](https://github.com/mami0709/wineChecker-React/assets/111770536/a4632939-612c-440e-aa27-602c69104b2f)



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

### その他
- GitHub
- Figma
- Sequel Ace


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
