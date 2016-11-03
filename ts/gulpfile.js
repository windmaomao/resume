var gulp        = require('gulp'),
    tslint      = require('gulp-tslint'),
    ts          = require('gulp-typescript'),
    karma       = require('gulp-karma'),
    browserify  = require('browserify'),
    transform   = require('vinyl-transform'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps');

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

gulp.task('karma', function(cb) {
  return gulp.src('./dist/test/**/**.test.js')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('end', cb)
    .on('error', function(err) { throw err; });
});



// gulp.task('bundle-js', function() {
//   return gulp.src(['./tmp/main.js'])
//     .pipe(browserify({ debug: true }))
//     .pipe(sourcemaps.init({ loadMaps: true }))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/js/'));
// });

gulp.task('default', ['lint', 'tsc']);
