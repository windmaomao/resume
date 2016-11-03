var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');

var tsProject = ts.createProject({
  removeComments: true,
  noImplicitAny: true,
  target: 'ES3',
  module: 'commonjs',
  declarationFiles: false
});

gulp.task('lint', function() {
  return gulp.src(['./src/**/**.ts'])
    .pipe(tslint({ formatter: "verbose" }))
    .pipe(tslint.report());
});

gulp.task('tsc', function() {
  return gulp.src(['./src/**/**.ts'])
    .pipe(tsProject())
    .js.pipe(gulp.dest('./tmp'));
});

gulp.task('default', ['lint', 'tsc']);
