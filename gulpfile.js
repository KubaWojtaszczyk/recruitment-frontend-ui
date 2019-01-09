var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");




gulp.task("sass", function() {

    return gulp.src("scss/main.scss")
               .pipe(plumber())
               .pipe(sourcemaps.init())
               .pipe(sass())
               .pipe(sourcemaps.write())
               .pipe(gulp.dest("css"));
});




gulp.task("watch", ["sass"], function(){

    gulp.watch("scss/**/*.scss", ["sass"]);

});

