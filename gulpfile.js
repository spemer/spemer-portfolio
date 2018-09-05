"use strict";
const gulp = require('gulp'),
      watch = require('gulp-watch'),
      imagemin = require('gulp-imagemin');


/* ==============================
  image resizer
============================== */
gulp.task('img-resize', () =>
gulp.src('./src/assets/src/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./src/assets/dist'))
);


/* ==============================
  gulp watch
============================== */
gulp.task('watch', ['img-resize'])

