# サービス名
学習記録アプリ

## サービスの説明
* 学習内容と学習時間を入力すると、現在入力中の内容が表示される
* 学習内容と学習時間を入力し、登録ボタンを押すと現在登録されている記録に追加される
* 学習内容と学習時間を入力せずに登録しようとするとエラーが表示される
* 登録した記録は削除ボタンで削除できる

## 環境設定の方法(.envなど)
.envには`VITE_SUPABASE_ANON_KEY`と`VITE_SUPABASE_URL`を用意し、Supabaseの`API Settings`のProject URLとProject API Keysをそれぞれペーストする

## 起動の仕方
* プロジェクトルートに移動し、`$ npm i`でpackage.jsonの内容をインストール
* ターミナルを開き`$ npm run dev`でプロジェクトを起動する
* `https://localhost:5173`が開けること確認する

## CICD
* テストとfirebaseへのデプロイはmainブランチにマージされたときに自動で行われる
* 手動でテストする際はターミナルで`npm run test`を実施する
