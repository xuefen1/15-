var gulp = require('gulp');
var sass = require("gulp-sass");
var clean = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");	
// 编译sass
gulp.task('sass',function() {
    return gulp.src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(clean())
        .pipe(autoprefixer({
            browsers:['last 2 versions']
        }))
        .pipe(gulp.dest("./src/css"))
})

gulp.task("watch",function(){
    gulp.watch('./src/scss/index.scss',gulp.series("sass"))
})