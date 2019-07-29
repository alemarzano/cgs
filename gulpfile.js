const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'src/stylesheet/extras.scss',
            'src/stylesheet/main.scss',
            'src/stylesheet/theme.scss'
        ])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
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
        'src/stylesheet/*.scss',
        'src/stylesheet/assets/*.scss',
    ], ['sass']);

    gulp.watch([
        'src/*.html',
        'src/js/*.js'
    ])
    .on('change', browserSync.reload);

});


gulp.task('fonts', () => {
    return gulp.src([
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

gulp.task('default', ['js', 'serve', 'fonts', 'slider-pro'])