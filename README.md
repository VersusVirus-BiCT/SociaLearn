# SociaLearn

Here lives an application made to offer workshops to students. It environment alowes it to save stuff in a database and to send mails to the users when needed.

# Need to know

## i18n
For the translation of this site, we are using **ngx-translate**. It is easy to use and easy to extend.

For more Information click [HERE](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular8-app-with-ngx-translate).

## Styles
For our styles, we are going to use [Angular Material](https://material.angular.io/) and [PrimeNG](https://primefaces.org/primeng/#/).

## Icons
The icons that we're going to use, we will be relying on [Angular Material](https://material.angular.io/) and [PrimeNG](https://primefaces.org/primeng/#/).

# Angular project structure & commands
In the folder src/app, there are seven folders.

## Components
In this folder, there are only components, that don't belong to a specific apge. <br>An example would be the navigation. <br>
**example command:**
```bash
ng g c  [path]/[name]
```

## Directives
Every created directive is stored in this folder. <br>
**example command:**
```bash
ng g directive  [path]/[name]/[name]
```

## Interfaces
All the created interface are stored in this folder. <br>
**example command:**
```bash
ng g interface [path]/[name]
```

## Modules
In this folder all the custom modules are stored. <br>
**example command:**
```bash
ng g module [path]/[name]
```

## Pages
In this folder all the pages are stored. <br>
Because we are lazy loading the pages, we can't just create a component.<br>
**example:**
```bash
ng generate module pages/[name] --route  [url] --module app.module
```
This command will generate a component with an module and a routing Module, that is lazy loaded.<br>
The `[url]` placeholder is the URL, that will be used to navigate to the page.

## Pipes
In this folder all if our custom pipes will be stored in this folder. <br>
**example:**
```bash
ng g pipe  [path]/[name]
```

## Services
In this folder all services will be stored.<br>
**example:**
```bash
ng g s  [path]/[name]/[name]
```

## NPM Commands
**Normally:**
```bash
npm start
```

## Build development
```bash
npm build
```

## Build productive
```bash
npm build-prod
```
## Translation
We're using [ngx-translate](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular8-app-with-ngx-translate).
For every lazyloaded page just import the custom TranslationModule and you're good to go. <br> <br>
For outputing the text, write the HTML like shown below:
```html
<h1>{{ 'demo.title' | translate }}</h1>
```


## [Theming](https://materialtheme.arcsine.dev/)

### A Versus Virus Hackaton Project
