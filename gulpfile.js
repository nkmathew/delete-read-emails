const gulp   = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function () {
  return gulp.src(['chrome/content/*.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {
  // This will only run if the lint task is successful...
});
