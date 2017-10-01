var gulp = require('gulp');
var sass = require('gulp-sass');
var imageop = require('gulp-image-optimization');
gulp.task('hello', function () {
    console.log('Hello Zell');
});
gulp.task('styles', function() {
    return gulp.src('styles/sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css/styles.css'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('styles/sass/styles.scss',['styles']);
});

 
gulp.task('images', function(cb) {
    gulp.src(['img/*.png','img/*.jpg','img/*.gif','img/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('img/images')).on('end', cb).on('error', cb);
});