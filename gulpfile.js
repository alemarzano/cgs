const gulp = require('gulp');
var fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
var reload = browserSync.reload;

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

gulp.task('fileinclude', function() {
    gulp.src([
        './docs/includes/*.html',
        '!./docs/includes/inc_*.html'
    ])
    .pipe(fileinclude({
        prefix:'@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./docs/'))
    .pipe(browserSync.stream());
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


gulp.task('js-watch', ['js'], reload);
gulp.task('include-watch', ['fileinclude'], reload);

gulp.task('serve', ['sass', 'fileinclude'], () => {
    browserSync.init({
        server: './docs'
    });

    gulp.watch([
        'docs/stylesheet/*.scss',
        'docs/stylesheet/assets/*.scss',
    ], ['sass']);

    gulp.watch([        
        'docs/js/*.js'

    ], ['js']);

    gulp.watch([
        'docs/includes/*.html',
        'docs/*.html'
    ], ['include-watch'])

    .on('change', browserSync.reload);

});



gulp.task('default', ['js','fileinclude','serve', 'fonts', 'slider-pro'])