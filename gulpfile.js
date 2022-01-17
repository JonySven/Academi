 const  gulp = require('gulp'),
        htmlmin = require('gulp-htmlmin'),
        del = require('del'),
        sass = require('gulp-sass')(require('sass'));
        autoprefixer = require('gulp-autoprefixer');
        rename = require('gulp-rename');
        cleanCSS = require('gulp-clean-css');
        watch  = require('gulp');
    
const {series} = gulp
       



function html() {
    return gulp
              .src('app/*.html')
              .pipe(htmlmin({ collapseWhitespace: true }))
              .pipe(gulp.dest('dist'));
};
function all() {
    return gulp
              .src('app/**/**/*.*')
              .pipe(gulp.dest('dist/'));
};

gulp.task('removedist', function () {
    return del('dist');
});

gulp.task('sassApp', function () {
    return gulp
        .src('app/assets/css/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS())  
        .pipe(gulp.dest('app/assets/css'))

});

gulp.task('watch', function() {
    gulp.watch('app/assets/css/*.scss', gulp.series('sassApp'))
});
    

exports.html = html;
exports.all = all;

exports.build = series ('removedist', html, 'sassApp', all);

























