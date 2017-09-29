const gulp = require('gulp')     // load the gulp library
const sass = require('gulp-sass')   // load the gulp-sass complier library
const sassPath = 'scss/**/*.scss'   // the folder(s) with our sass source file

// define a new task called 'sass that we can call to compile sass to css'
gulp.task('sass', function () {
  return gulp
  .src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
})

gulp.task('default', function () {
  gulp.watch('scss/**/*.scss', ['sass'])
})
