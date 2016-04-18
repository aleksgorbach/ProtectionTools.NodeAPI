/// <binding BeforeBuild='css, js:concat' />
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require("gulp-cssmin"),
    rename = require("gulp-rename"),
    concatCss = require("gulp-concat-css");
    

gulp.task("js:concat", function() {
    return gulp.src([
        "lib/jquery/dist/jquery.js",
        "lib/bootstrap/dist/js/bootstrap.js",
        "lib/angular/angular.js",
        "lib/angular-route/angular-route.js",
        "lib/angular-messages/angular-messages.js",
        "wwwroot/scripts/app.js",
        "wwwroot/scripts/services/electricityService.js",
        "wwwroot/scripts/controllers/appController.js"
    ])
        //.pipe(concat("app.js"))
        .pipe(gulp.dest("wwwroot/public/js/"));
});

gulp.task("css:concat", function() {
    return gulp.src([
            "lib/bootstrap/dist/css/bootstrap.css",
            "lib/bootswatch/paper/bootstrap.css",
            "wwwroot/styles/site.css"
    ])
        .pipe(concatCss("styles.css"))
        //.pipe(uglify())
        //.pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("wwwroot/public/css/"));
});

gulp.task("css", function() {
    gulp.run("css:concat");
})
