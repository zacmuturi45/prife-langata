# MY NEXT.JS PROJECTS

- After creating your next.js directory, enter the src folder and delete the modules.css and globals.css files
- Delete the main content in the page.js and layout.js files.
- Create an 'images' folder in your public directory, then create an imports.js file. This is where you will be storing your images for use throughout the app
- Create a gulpfile.js in your root folder.
- Create a Sass folder in your app directory.
- Create an index.scss file in the Sass folder. This is where your sass code is going to be located.

## Installations

### Gulp

- Our project will be using Sass so we need to install gulp to handle our sass code as it is not compatible with browsers.
- Run the following commands:

```bash
npm install gulp gulp-sass sass gulp-purgecss --save-dev
```

- Gulp runs our auto-completion tasks, gulp-sass is a plugin which will compile our sass code and --save-dev ensures these libraries are saved as dependencies in our package.json.

- In your gulpfile, enter the following code

```bash
const { src, dest, watch, series } = require('gulp')
const sass = require('sass')
const gulpSass = require('gulp-sass')(sass)
const purgecss = require('gulp-purgecss')

function buildSass() {
    return src('src/app/Sass/*.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(purgecss({ content: ['src/app/**/*.jsx']}))
    .pipe(dest('src/app/css'))
}

function watchSass() {
    watch(['src/app/Sass/*.scss', 'src/app/**/*.jsx'], buildSass)
}

exports.default = series(buildSass, watchSass)
```

## Cloning the template

- Clone the template from Github into your project folder.
- Using your terminal, remove the origin upstream. `git remote remove origin`.
- Create a new repository for your project on github.
- Copy the link and use it as your new upstream. `git remote add origin <link>`

### Steps

```bash
git remote remove origin
git remote add origin <your link>
git add .
git commit -m "Initial commit"
git push -u origin main
```