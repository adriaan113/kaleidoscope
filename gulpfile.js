// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask

'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const server = require('gulp-webserver');

// gulp.task('message',()=>{
//     return console.log('satan');
// });

gulp.task('copyHtml', ()=>{
    return gulp.src('src/*.html')
                .pipe(gulp.dest('dist'));
});

gulp.task('minify', ()=>{
   return gulp.src('src/js/*.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist/js'))
})

//gulp.task('default',['copyHtml', 'minify']); //alles in 1 command. je hoeft alleen gulp te typen

gulp.task('server',()=>{
    return gulp.src('./src')
                .pipe(server({
                    livereload: true,
                    open: true,
                }));

});