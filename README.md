Тестовое задание, динамическая подгрузка данных пользователей в мобильной версии

Добавление на github

1) npx create-react-app
2) git init
3) git add .
4) git commit -m "#1 сделал тз"
5) git remote add origin https://github.com/Nocab11/km-bank-test-task.git
6) git push -u origin master


Деплой проекта

1) npm install gh-pages --save-dev
2) добавить в package.json 
"homepage": "https://nocab11.github.io/km-bank-test-task"
3) добавить в package.json  
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
}
4) Запустить из git bash npm run deploy и ввести логин и токен
5) Ссылка на проект будет работать, если отключить проверку валидности в браузере
https://nocab11.github.io/km-bank-test-task/