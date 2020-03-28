var fs = require('fs');
var gulp = require('gulp');
var JSON5 = require('json5');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var postcssGradients = require('postcss-gradient-transparency-fix');
var mustache = require('gulp-mustache');
var concat = require('gulp-concat-util');

var themeClasses = ['deep-space', 'space', ['clouds', 'clouds-top'], 'clouds', 'forest', 'ground'];

function html() {
    var projectsFile = fs.readFileSync('gilhub/src/projects.json');
    var projectsData = JSON5.parse(projectsFile);
    projectsData.categories.forEach(function (category, i) {
        category.themes = [].concat(themeClasses[i] || '');
        category.projects.forEach(function (project) {
            project.description = [].concat(project.description);
        });
    });

    return gulp.src('gilhub/src/index.html')
        .pipe(mustache(projectsData))
        .pipe(gulp.dest('./'));
};

function css() {
    return gulp.src('gilhub/src/*.css')
        .pipe(postcss([
            postcssGradients,
            autoprefixer({
                cascade: true
            })
        ]))
        .pipe(gulp.dest('gilhub/lib'));
};

function scripts() {
    return gulp.src(['node_modules/fontfaceobserver/fontfaceobserver.js', 'gilhub/src/*.js'])
        .pipe(concat('home.js'))
        .pipe(concat.header('// https://github.com/bramstein/fontfaceobserver\n'))
        .pipe(gulp.dest('gilhub/lib'));
};

exports.html = html;
exports.css = css;
exports.scripts = scripts;
exports.default = gulp.series(html, css, scripts);
