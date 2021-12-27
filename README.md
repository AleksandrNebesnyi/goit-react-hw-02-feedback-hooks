# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Создание и настройка React-App

## 1. Создать репозиторий и склонировать на ПК

## 2. Установить React application

Открыть терминал в папке проекта и установить `react-app`

```powershell
npx create-react-app .
```

## 3. Удалить ненужные файлы

### 3.1 `public/index.html`

В папке `public` оставить только `index.html`. Удалить код из `index.html`,
создать базовую разметку с помощью Emmet.

Разметка может выглядеть так:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3.2 `/src`

В папке `/src` достаточно оставить `index.js`, `App.js`, `index.css`, `App.css`

В папке `/src` создать папку `components` для размещения будущих компонентов.

### 3.3 `index.js`

В `index.js` достаточно оставить следующий код:

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

### 3.4 `App.js`

В `App.js` достаточно оставить следующий код:

```js
// App.js
import './App.css';

function App() {
  return <div className="App">TEST</div>;
}

export default App;
```

### 3.4 `App.css`

В `App.css` удалить ненужные стили.

## 4. Запустить сервер проверить, нет ли ошибкок.

```powershell
npm start
```

## 5. Настройка pre-commit хуков

### 5.1 Установка зависимостей

Установить в проект следующие пакеты.

`Примечание:` react-app корректно работает с более старой версией
`eslint 7.11.0`

```powershell
npm install --save-dev prettier eslint@7.11.0
```

### 5.2 Инициализация lint-staged и husky

Пользователям `MacOS` и `Linux` систем необходимо выполнить в терминале
следующую команду. Она установит и настроит husky и lint-staged в зависимости от
инструментов качества кода из зависимостей проекта в package.json.

```powershell
npx mrm lint-staged
```

Пользователям `Windows` необходимо выполнить следующую команду. Она делает тоже
самое.

```powershell
npx mrm@2 lint-staged
```

### 5.3 Настройка в VSCode

Провреить наличие следующих раширений:

`Prettier - Code formatter`

`Formatting Toggle`

`ESLint`

Можно добавить настройки `Prettier`, создав файл `.prettierrc.yaml` в корневой
папке проекта. Можно добавить следующие настройки.

```yaml
printWidth: 100
useTabs: false
semi: true
singleQuote: true
trailingComma: 'all'
bracketSpacing: true
arrowParens: 'avoid'
proseWrap: 'always'
```

Открыть настройки `VSCode` и проверить следующее:

`autoSave`

![Превью настроек VSCode](./README/1.png)

`formatOnSave`

![Превью настроек VSCode](./README/2.png)

`codeActionsOnSave`

![Превью настроек VSCode](./README/3.png)

Или же добавить код в файл `settings.json`

`Ctrl + Shift + P` => `settings.json` => `Open Settings (JSON)`

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 6. Настройка Деплоя

[Ссылка на create-react-app](https://create-react-app.dev/docs/deployment#github-pages)

В `package.json` добавить следующию строку:

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

Сделать билд через терминал:

```powershell
npm run build
```

Установить пакет `gh-pages`

```powershell
npm install --save gh-pages
```

В `package.json` в `scripts` добавить 2 скрипта:

```json
  "scripts": {
    // добавить к остальным скриптам
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

Запустить деплой

```powershell
npm run deploy
```

Скрипт `predeploy` запускать не нужно, он выполнится автоматически. Будет
создана ветка `gh-pages`, выполнен автоккоммит и её пуш в ваш репозиторий на
GitHub.сom, в настройках GitHub Pages автоматически будет подставлена ветка
`gh-pages`, достаточно взять ссылку. Сам проект как обычно коммитим, пушим,
чтобы код отразился в ветке `main`.

## Если у кого-то не получилось настроить, я не виноват :)

### Не забудьте

## 7. Дальнейшая работа с проектом

Работаем, делаем коммиты и пушим на `GitHub` как обычно. Страница автоматически
не обновится. Если нужно залить на GitHub Pages, делаете повторно
`npm run deploy`. Или же можете настроить автодеплой. Меня этот вопрос на данный
момент не волнует.
