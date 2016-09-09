var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function () {

  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  // what should happen when index.html is changed?
  watch('./app/index.html', function () {
    browserSync.reload();
  });

  // gulp can of course watch multiple files at once
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function () {
  return gulp
    .src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
