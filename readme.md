1. npm i -D gulp
2. npm i -g gulp-cli
3. npm i -D gulp-uglify
```js
// 压缩js
const {src,dest} = require('gulp');
const uglify = require('gulp-uglify');
exports.default = function(){
    return src('src/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'))
}
```
4. npm i -D gulp-rename
```js
// 修改后缀
const {src,dest} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename')
exports.default = function(){
    return src('src/js/*.js')
        .pipe(dest('dist/js'))
        .pipe(uglify())
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('dist/js'))
}
```
5. npm i -D gulp-htmlclean
```js
// 压缩html
const htmlClean = require('gulp-htmlclean')
function html(){
    return src(folder.src+'html/*')
    .pipe(htmlClean())
    .pipe(dest(folder.dist+'html/')) 
}
```
6. npm i -D gulp-less
```js
// less转成css
const less = require('gulp-less')
function css(){
    return src(folder.src+'css/*')
    .pipe(less())
    .pipe(dest(folder.dist+'css/')) 
}
```
7. npm i -D gulp-clean-css
```js
// 压缩css
const cleanCss = require('gulp-clean-css')
function css(){
    return src(folder.src+'css/*')
    .pipe(less())
    .pipe(cleanCss())
    .pipe(dest(folder.dist+'css/')) 
}
```
8. npm i -D gulp-strip-debug
```js
// 将js文件中的console或者debug不显示。
const stripDebug = require('gulp-strip-debug')
function js(){
    return src(folder.src+'js/*')
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(dest(folder.dist+'js/')) 
}
```
9. npm i -D gulp-imagemin
```js
// 图片压缩

```
10. npm i -D gulp-connect


