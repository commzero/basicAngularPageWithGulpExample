const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');



// Just to make sure Gulp is running
gulp.task('default', function () {
    return console.log("I'm Gulp, i'm running..");
});

// To copy all HTML files into Dest folder

gulp.task('copyHtml', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dest'));
});

// To minimize images

gulp.task('imageMin', () =>
gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img'))
);

// To minify JS
gulp.task('minify', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'))
});

// To minify CSS
gulp.task('minifycss', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dest/css'));
});