# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

# URL例

- `https://app.hogehoge.com/users`
- `https://app.hogehoge.com/users/:userId`
- `https://app.hogehoge.com/users/:userId/detail`
- `https://app.hogehoge.com/users/:userId/tasks`
- `https://app.hogehoge.com/users/:userId/tasks/:taskId`
- `https://app.hogehoge.com/users/:userId/tasks?tab=basic`
- `https://app.hogehoge.com/users/:userId/edit`
- `https://app.hogehoge.com/users/_create`
- `https://app.hogehoge.com/users/0/create`
- `https://app.hogehoge.com/users/_/create`
- `https://app.hogehoge.com/userCreate`

## パス設計

- 冪等性を確保したいかどうか
- 共有データのスコープをどう切りたいか



## 画面の種類

- ページ
  - パスを当てる
- タブコンテンツ
  - パス/クエリを当てる
- ダイアログ（モーダル・モーダレス・ポップアップ）
  - パスを当てるかどうかは機能次第


