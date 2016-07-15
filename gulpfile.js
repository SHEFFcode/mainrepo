var gulp  = require('gulp');
var shell = require('gulp-shell');
var fs = require('fs');
var gulpif = require('gulp-if');

gulp.task('example', function () {
  return gulp.src('*.js', {read: false})
  .pipe(gulpif(!(fs.exists('./v1.1/')), shell([
    'git subtree add --prefix my-lib my-lib <%= g %>'
  ], {
    templateData: {
      g: 'v1.1'
    }
  })))
})
