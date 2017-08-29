const gulp = require('gulp')
const connect = require('gulp-connect')
const lint = require('gulp-eslint')

gulp.task('default', ['server'], () => {})

gulp.task('connect', () => {
    connect.server({
        port: 3000,
        root: './',
        livereload: true
    })
})

gulp.task('watch', () => {
    gulp.watch([
        'index.html',
        'app/**/*.html'],
    [connect.reload()])

    gulp.watch([
        'app/**/*.css',
        'assets/stylesheets/**/*.css'],
    [connect.reload()])

    gulp.watch([
        'app/**/*.js',
        'assets/javascripts/**/*.js'],
    [connect.reload()])
})

gulp.task('lint', () => {
    gulp.src('app/**/*.js')
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failAfterError())
        .pipe(connect.reload())
})

gulp.task('server', ['connect', 'watch'])
