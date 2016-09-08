var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested');

gulp.task('html', function () {
  console.log('I am the html task!!');
});

gulp.task('styles', function () {
  return gulp
      .src('./app/assets/styles/styles.css')
      .pipe(postcss([autoprefixer, cssvars, nested]))
      .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function () {

  // what should happen when index.html is changed?
  watch('./app/index.html', function () {
    gulp.start('html');
  });

  // gulp can of course watch multiple files at once
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });

});
