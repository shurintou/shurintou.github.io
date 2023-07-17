# my blog
![react](https://img.shields.io/badge/react-%5E18.0.0-blue) ![antd](https://img.shields.io/badge/antd-%5E4.21.0-red) ![gitalk](https://img.shields.io/badge/gitalk-%5E1.7.2-green) ![markdown](https://img.shields.io/badge/react--markdown-%5E8.0.3-orange) ![typescript](https://img.shields.io/badge/typescript-%5E4.6.3-9cf) ![axios](https://img.shields.io/badge/axios-%5E0.26.1-yellowgreen) ![License](https://img.shields.io/badge/license-MIT-yellow)

:link:**URL: [https://shurintou.github.io](https://shurintou.github.io)**

## :house:What is it ?

This is my blog project which was developed by [React](https://reactjs.org/) and built by `npm run build`.

[Here](https://github.com/shurintou/my_blog) is the project for development.

## :bulb:Anything special ?

### Customized theme
The project can config design theme by using [craco](https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides), to try this, please modify the `craco.config.ts` file in the development project.

### Database-free
All posts of the blog are stored as [Github issue](https://github.com/shurintou/shurintou.github.io/issues), and comments are synchronized by [Gitalk](https://github.com/gitalk/gitalk). 

### Trilingual contents
The UI parts of the blog can be displayed in three languages(`English`, `Simplified Chinese` and `Japanese`) by changing the setting, and each languages has its original post contents.

### SPA with browserHistory
Though the project is developed as a single page application(`SPA`), the browserHistory can totally work at each operation you have made, and copying an URL can get the exact same result as the copied one. 

### filter/search posts 
Posts can be filtered by `categories`(memo, technic, ...), `tags`(Java, Javascript, ...), and `languages`(English, Japanese, Chinese), or searched by any keyword you are interested.

## :key:How does it work ?

This project is automatically deployed by [Github Pages](https://pages.github.com/).

## :memo:Some tips

### `404.html`
Because the project was developed as a [SPA](https://en.wikipedia.org/wiki/Single-page_application) project, the `404.html` need to exactly be the same as the `index.html` in the project.

### `build.sh`
This shell file is written to replace built files such as `main.12345678.js` more conveniently.
To use it, place the development project and the production project like below,
```shell
|-- DevProject
    |-- build
    ...
|-- ProdProject
    |-- build.shell
    ...
```
After run `npm run build` in the development project, run the `build.shell` in the production project, done!
