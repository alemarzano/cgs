const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'docs/stylesheet/extras.scss',
            'docs/stylesheet/main.scss',
            'docs/stylesheet/theme.scss'
        ])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
        .pipe(gulp.dest('docs/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/slider-pro/dist/js/jquery.sliderPro.min.js'
        ])
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './docs'
    });

    gulp.watch([
        'docs/stylesheet/*.scss',
        'docs/stylesheet/assets/*.scss',
    ], ['sass']);

    gulp.watch([
        'docs/*.html',
        'docs/js/*.js'
    ])
    .on('change', browserSync.reload);

});


gulp.task('fonts', () => {
    return gulp.src([
        'docs/stylesheet/fonts/*',
        '!docs/stylesheet/fonts/*.*ss',
        '!docs/stylesheet/fonts/*.html'
    ])
        .pipe(gulp.dest('docs/css/fonts'));
});

gulp.task('slider-pro', () => {
    return gulp.src('node_modules/slider-pro/dist/css/slider-pro.css')
    .pipe(gulp.dest('docs/css'));
})

gulp.task('default', ['js', 'serve', 'fonts', 'slider-pro'])