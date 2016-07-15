var gulp  = require('gulp');
var shell = require('gulp-shell');
var fs = require('fs');
var gulpif = require('gulp-if');

gulp.task('add', function () {
  return gulp.src('*.js', {read: false})
  .pipe(gulpif(!(fs.exists('./v1.1/')), shell([
    'git remote add -f my-lib https://github.com/SHEFFcode/subrepo.git; git subtree add --prefix my-lib my-lib <%= g %>'
  ], {
    templateData: {
      g: 'alexeisaves'
    }
  })))
});

gulp.task('remove', function () {
  return gulp.src('*.js', {read: false})
  .pipe(shell([
    'git rm my-lib; sudo rm -rf my-lib; git add -A; git commit -m "removing sub-repo"'
  ], {
    templateData: {
      g: 'v1.1'
    }
  }))
});
