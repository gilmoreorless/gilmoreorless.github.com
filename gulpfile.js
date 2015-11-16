var fs = require('fs');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var mustache = require('gulp-mustache');

var themeClasses = ['space', 'sky', 'forest', 'ground'];

gulp.task('default', function () {
    var projectsFile = fs.readFileSync('gilhub/src/projects.json');
    var projectsData = JSON.parse(projectsFile);
    projectsData.categories.forEach(function (category, i) {
        category.theme = themeClasses[i] || '';
    });

    return gulp.src('gilhub/src/index.html')
        .pipe(mustache(projectsData))
        .pipe(gulp.dest('gilhub/lib/'));
});

gulp.task('prefix', function () {
    return gulp.src('gilhub/src/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('gilhub/lib'));
});
