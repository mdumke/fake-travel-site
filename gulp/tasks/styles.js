var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  mixins = require('postcss-mixins'),
  cssimport = require('postcss-import');

gulp.task('styles', function () {
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function (msg) {
      console.log(msg.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles/'));
});
