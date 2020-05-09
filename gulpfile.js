const gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
var reload = browserSync.reload;

gulp.task('sass', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/slider-pro/dist/css/slider-pro.css',
            'node_modules/tiny-slider/dist/tiny-slider.css',
            'docs/sass/main.scss'
        ])
        .pipe(sass({
            outputStyle: 'nested'
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
            'node_modules/jquery/dist/jquery.js',
            'node_modules/tiny-slider/dist/tiny-slider.js',
            'node_modules/slider-pro/dist/js/jquery.sliderPro.min.js',
        ])
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.stream());
});

gulp.task('nunjucks', function () {
    return gulp.src('docs/pages/**/*.+(html|njk)')
        .pipe(nunjucksRender({
            path: ['docs/templates'],
            watch: true,
        }))
        .pipe(gulp.dest('./docs'))
});



gulp.task('js-watch', ['js'], reload);
gulp.task('css-watch', ['sass'], reload);
gulp.task('nunjucks-watch', ['nunjucks'], reload);

gulp.task('server', ['sass'], () => {
    browserSync.init({
        server: './docs'
    });

    gulp.watch([
        'docs/sass/*.scss',
        'docs/sass/*/*.scss'
    ], ['css-watch']);

    gulp.watch([
        'docs/js/*.js'

    ], ['js-watch']);

    gulp.watch([
        'docs/pages' + '/**/*.+(html|njk)',
        'docs/templates' + '/**/*.+(html|njk)'
    ], ['nunjucks']);

    gulp.watch('./docs/*.html')
        .on('change', browserSync.reload);

});



gulp.task('default', ['js', 'nunjucks', 'server'])