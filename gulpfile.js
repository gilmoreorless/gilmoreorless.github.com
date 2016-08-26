var fs = require('fs');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var postcssGradients = require('postcss-gradient-transparency-fix');
var mustache = require('gulp-mustache');
var concat = require('gulp-concat-util');

var themeClasses = ['space', 'sky', 'forest', 'ground'];

gulp.task('html', function () {
    var projectsFile = fs.readFileSync('gilhub/src/projects.json');
    var projectsData = JSON.parse(projectsFile);
    projectsData.categories.forEach(function (category, i) {
        category.theme = themeClasses[i] || '';
    });

    return gulp.src('gilhub/src/index.html')
        .pipe(mustache(projectsData))
        .pipe(gulp.dest('./'));
});

gulp.task('css', function () {
    return gulp.src('gilhub/src/*.css')
        .pipe(postcss([ autoprefixer({
            browsers: ['last 3 versions', 'Firefox ESR'],
            cascade: true
        }), postcssGradients ]))
        .pipe(gulp.dest('gilhub/lib'));
});

gulp.task('scripts', function () {
    return gulp.src(['node_modules/fontfaceobserver/fontfaceobserver.js', 'gilhub/src/*.js'])
        .pipe(concat('home.js'))
        .pipe(concat.header('// https://github.com/bramstein/fontfaceobserver\n'))
        .pipe(gulp.dest('gilhub/lib'));
});

gulp.task('default', ['html', 'css', 'scripts']);
