# アプリケーション名

Wine Checker


# アプリケーション概要

ワインは種類が多くてわからない…
自分に合ったワインを知りたい。そんな人のために 30 秒であなたに合ったおすすめのワインを診断できるアプリです。

# 使用した技術

今回、フロントとバックエンドは完全に分離した状態でリポジトリも分けて開発。
バックエンドはAPIを作って、それをエンドポイントに指定して、フロントからAPIを叩きにいって値を取ってきたりとかCRUD処理の実行とかを行なっています。
結構実務だとこういうやり方をするので、それにできるだけ近い感じになるよう意識して作りました。

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


# 機能一覧
- ワイン診断機能
- おすすめ一覧
- ログイン・ログアウト
- 新規会員登録
- ワイン投稿機能
- マイページ
- ユーザー編集


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



# デザイン

デザインは最初に Figma で起こしました。
https://www.figma.com/file/aXsIMaNZ9bn2NV0YsO4M8o/WineChecker%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?type=design&node-id=0-1&t=BFrK8KTRqfjCDtoH-0


# URL 設計

| URL 　　　　　　　　　　　　　　　　　　　 | メソッド |               処理               |
| :----------------------------------------- | -------: | :------------------------------: |
| /                                          |      GET |      TOP ページを表示する。      |
| /shindan/aka                               |      GET |       赤ワインの質問を表示       |
| /shindan/shiro                             |      GET |       白ワインの質問を表示       |
| /shindan/resultAkaWine                     |      GET |     赤ワインの診断結果を表示     |
| /shindan/resultShiroWine                   |      GET |     白ワインの診断結果を表示     |
| /shindan/recommend                         |      GET | おすすめワインの一覧ページの表示 |
| /shindan/recommend/1                       |      GET | おすすめワインの詳細ページの表示 |
| /newPost                                   |     POST |      ワイン投稿ページを表示      |
| /newPost/PostComplete                      |      GET |    ワイン投稿完了ページを表示    |
| /login/userInfo                            |     POST |         マイページを表示         |
| /login                                     |     POST |       ログインページを表示       |
| /login/Signup                              |     POST |     ユーザー登録ページを表示     |

# DB 設計

### result_aka テーブル

| カラム論理名　　　　 |   カラム物理名    |      型      |       型の意味       |
| :------------------- | :---------------: | :----------: | :------------------: |
| ID                   |        id         |   INT(PRY)   |   連番（自動採番）   |
| ワイン名             |     wine_name     | VARCHAR(50)  | 50 文字までの文字列  |
| ワイン名(英名）      | english_wine_name | VARCHAR(50)  | 50 文字までの文字列  |
| ワイナリー           |      winery       | VARCHAR(20)  | 20 文字までの文字列  |
| ワインタイプ         |     wine_type     | VARCHAR(10)  | 10 文字までの文字列  |
| ワインの画像         |    wine_image     | VARCHAR(500) | 500 文字までの文字列 |
| 産地                 |   wine_country    | VARCHAR(20)  | 20 文字までの文字列  |
| ワインの URL         |     wine_url      | VARCHAR(500) | 500 文字までの文字列 |
| 生産年               |       years       |     INT      |         数値         |
| 製造者               |     producer      | VARCHAR(30)  | 30 文字までの文字列  |
| ぶどうの種類         |       breed       | VARCHAR(50)  | 50 文字までの文字列  |
| 容量                 |     capacity      |     INT      |         数値         |
| おすすめ文言         |     one_word      | VARCHAR(100) | 100 文字までの文字列 |
| 詳細コメント         |      comment      | VARCHAR(500) | 500 文字までの文字列 |

### result_shiro テーブル

| カラム論理名　　　　 |   カラム物理名    |      型      |       型の意味       |
| :------------------- | :---------------: | :----------: | :------------------: |
| ID                   |        id         |   INT(PRY)   |   連番（自動採番）   |
| ワイン名             |     wine_name     | VARCHAR(50)  | 50 文字までの文字列  |
| ワイン名(英名）      | english_wine_name | VARCHAR(50)  | 50 文字までの文字列  |
| ワイナリー           |      winery       | VARCHAR(20)  | 20 文字までの文字列  |
| ワインタイプ         |     wine_type     | VARCHAR(10)  | 10 文字までの文字列  |
| ワインの画像         |    wine_image     | VARCHAR(500) | 500 文字までの文字列 |
| 産地                 |   wine_country    | VARCHAR(20)  | 20 文字までの文字列  |
| ワインの URL         |     wine_url      | VARCHAR(500) | 500 文字までの文字列 |
| 生産年               |       years       |     INT      |         数値         |
| 製造者               |     producer      | VARCHAR(30)  | 30 文字までの文字列  |
| ぶどうの種類         |       breed       | VARCHAR(50)  | 50 文字までの文字列  |
| 容量                 |     capacity      |     INT      |         数値         |
| おすすめ文言         |     one_word      | VARCHAR(100) | 100 文字までの文字列 |
| 詳細コメント         |      comment      | VARCHAR(500) | 500 文字までの文字列 |

### recommend_wines テーブル

| カラム論理名　　　　 |   カラム物理名    |      型      |       型の意味       | 必須項目 |
| :------------------- | :---------------: | :----------: | :------------------: | :------: |
| ID                   |        id         |   INT(PRY)   |   連番（自動採番）   | Not Null |
| ワイン名             |     wine_name     | VARCHAR(50)  | 50 文字までの文字列  | Not Null |
| ワイン名(英名）      | english_wine_name | VARCHAR(50)  | 50 文字までの文字列  |          |
| ワイナリー           |      winery       | VARCHAR(20)  | 20 文字までの文字列  | Not Null |
| ワインタイプ         |     wine_type     | VARCHAR(10)  | 10 文字までの文字列  | Not Null |
| ワインの画像         |    wine_image     | VARCHAR(500) | 500 文字までの文字列 | Not Null |
| 産地                 |   wine_country    | VARCHAR(20)  | 20 文字までの文字列  | Not Null |
| ワインの URL         |     wine_url      | VARCHAR(500) | 500 文字までの文字列 | Not Null |
| 生産年               |       years       |     INT      |         数値         |          |
| 製造者               |     producer      | VARCHAR(30)  | 30 文字までの文字列  |          |
| ぶどうの種類         |       breed       | VARCHAR(50)  | 50 文字までの文字列  | Not Null |
| 容量                 |     capacity      |     INT      |         数値         |          |
| おすすめ文言         |     one_word      | VARCHAR(100) | 100 文字までの文字列 |          |
| 詳細コメント         |      comment      | VARCHAR(500) | 500 文字までの文字列 |          |

### user ｓテーブル

| カラム論理名　　　　 |    カラム物理名    |     型      |      型の意味       | 必須項目 |
| :------------------- | :----------------: | :---------: | :-----------------: | :------: |
| ID                   |         id         |  INT(PRY)   |  連番（自動採番）   | Not Null |
| メールアドレス       |    mail_address    | VARCHAR(50) | 50 文字までの文字列 | Not Null |
| パスワード           |   user_password    | VARCHAR(20) | 20 文字までの文字列 | Not Null |
| ユーザ名             |     user_name      | VARCHAR(20) | 20 文字までの文字列 |          |
| ユーザ名（ひらがな） | user_name_hiragana | VARCHAR(20) | 20 文字までの文字列 |          |
| 電話番号             |  telephone_number  | VARCHAR(10) | 10 文字までの文字列 |          |
| ニックネーム         |      nickname      | VARCHAR(20) | 20 文字までの文字列 |          |
| 作成日               |     created_at     | VARCHAR(30) | 30 文字までの文字列 | Not Null |
| トークン             |       token        |     INT     |        数値         | Not Null |

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



#  こだわりポイントと苦労した点

### こだわり

- フロントの部分はカスタムフックや共通部分などはコンポーネントとして切り出し、拡張性やコードの可読性を意識した。
- UIはできるだけシンプルで使いやすいデザイン
- こだわり出すとキリがないので、ある意味こだわりすぎない。



### 苦労した点
- 認証認可
- バリデーションチェックで起こる謎エラー
- バックエンドが可読性とか保守性とかあまり考えれてないコードになってしまった。
- 最初の構築部分とか構想部分は、結構手が止まってしまった。
