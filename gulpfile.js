// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask

'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const server = require('gulp-webserver');
const concat = require('gulp-concat');

// gulp.task('message',()=>{
//     return console.log('satan');
// });

gulp.task('copyHtml', ()=>{
    return gulp.src('src/*.html')
                .pipe(gulp.dest('dist'));
});

gulp.task('scripts', ()=>{
   return gulp.src([
                    // 'node_modules/gsap/dist/gsap.min.js',
                    'src/js/*.js'
                    ])
                //.pipe(concat('all.js'))
                .pipe(uglify())
                .pipe(gulp.dest('dist/js'))
})

//gulp.task('default',['copyHtml', 'minify']); //alles in 1 command. je hoeft alleen gulp te typen

gulp.task('server',()=>{
    return gulp.src(['./src'])
                .pipe(server({
                    livereload: true,
                    open: true,
                }));
});



gulp.task('all', gulp.series(['copyHtml','scripts']));


gulp.task('watch', gulp.series(['all','server']) ,()=>{
    gulp.watch(['src/**/*.js','src/**/*.html'], gulp.series(['all']));
})

