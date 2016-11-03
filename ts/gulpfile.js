var gulp = require('gulp');
var tslint = require('gulp-tslint');

gulp.task('default', function() {
  console.log('Hello gulp!');
});

gulp.task('lint', function() {
  return gulp.src(['./src/**/**.ts'])
    .pipe(tslint({ formatter: "verbose" }))
    .pipe(tslint.report());
});
