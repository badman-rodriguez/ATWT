  var gulp = require('gulp');
  var browserify = require('browserify');
  var vueify = require('vueify');
  var globby = require('globby');
  var buffer = require('buffer');
  var gutil = require('gulp-util');

  gulp.task('vue-babel', function() {

    return globby(['./js/*.js']).then(function(entries) {
      // create the Browserify instance.
      return browserify({
        entries: entries,
        debug: true,
        transform: [vueify]
      })
      .bundle()
    ///  .pipe(buffer())
      .on('error', gutil.log)
      .pipe(gulp.dest('./dist/'));
    });

  });

  gulp.task('default', ['vue-babel'])
