const gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

// Pug task    
gulp.task('pug',()=>{
    return gulp.src('source/pug/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('dist'))
            .pipe(livereload())
});

// Sass task
gulp.task('sass',()=>{
    return gulp.src('source/sass/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(concat('main.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload())
});

// Js task
gulp.task('js',()=>{
    return gulp.src('source/js/*.js')
            .pipe(concat('main.js'))
            .pipe(minify())
            .pipe(gulp.dest('dist/js'))
            .pipe(livereload())
});

// Watch task
gulp.task('watch', ()=> {
    require('./server.js');
    livereload.listen();
    gulp.watch('source/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('source/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('source/js/*.js', gulp.series('js'));
});

