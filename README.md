# SRE Lectures

Университетские лекции по Site Reliability Engineering, собранные на React и `web-slides`.

## Запуск

Нужны Node.js 22.12+ и соседняя директория `../web-slides`.

```sh
npm install
npm run dev
```

## Публикация

Workflow GitHub Pages запускается при отправке изменений в ветку `main`. В настройках репозитория нужно выбрать **Settings → Pages → Source: GitHub Actions**.

Для кастомного домена перед первым деплоем создайте `public/CNAME` со значением домена и настройте его DNS по [инструкции GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site). Домен намеренно не указан в репозитории, чтобы не подменять ваш настоящий адрес.
