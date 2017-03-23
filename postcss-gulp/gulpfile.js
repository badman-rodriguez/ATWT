var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var neat_grid = require('postcss-neat');
var precss = require('precss');
var debug = require('gulp-debug');

gulp.task('css', function(){
  var plugins = [
    cssnext({browsers: ['last 1 version']}),
    neat_grid(),
    precss()
  ];
  return gulp.src('./css/*.css')
    .pipe(debug({title: 'postcss:'}))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function(){
  var plugins = [
    cssnext({browsers: ['last 1 version']}),
    neat_grid(),
    precss()  ];

  return gulp.src('./sass-like/*.css')
    .pipe(debug({title: 'postcss-scss:'}))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});

gulp.task('css:watch', function () {
  gulp.watch('./css/*.css', ['css']);
});

gulp.task('default', ['css', 'sass']);
