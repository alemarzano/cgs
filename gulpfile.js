const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src([
            'node_modules/bootstrap/scss/bootstrap.scss',
            'src/stylesheet/*.scss'
        ])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/slider-pro/dist/js/jquery.sliderPro.min.js'
        ])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './src'
    });

    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.min.scss',
        'src/stylesheet/*.scss'
    ], ['sass']);

    gulp.watch([
        'src/*.html',
        'src/js/*.js'
    ])
    .on('change', browserSync.reload);

});

gulp.task('font-awesome', () => {
    return gulp.src('node_modules/@fontawesome/fontawesome-free/css/font-awesome.min.css')
        .pipe(gulp.dest('src/css'));
})

gulp.task('fonts', () => {
    return gulp.src([
        'node_modules/@fontawesome/fontawesome-free/webfonts/*',
        'src/stylesheet/fonts/*',
        '!src/stylesheet/fonts/*.*ss',
        '!src/stylesheet/fonts/*.html'
    ])
        .pipe(gulp.dest('src/css/fonts'));
});

gulp.task('slider-pro', () => {
    return gulp.src('node_modules/slider-pro/dist/css/slider-pro.css')
    .pipe(gulp.dest('src/css'));
})

gulp.task('default', ['js', 'serve', 'font-awesome', 'fonts', 'slider-pro'])