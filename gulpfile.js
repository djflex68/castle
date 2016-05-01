var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var browserSync = require('browser-sync').create();

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('ts-changed', ['build'], browserSync.reload);

gulp.task('build', function() {
	var tsResult = tsProject.src() // instead of gulp.src(...) 
		.pipe(ts(tsProject));
	 
	return tsResult.js.pipe(gulp.dest('dist'));
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['build'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
     gulp.watch("js/**/*.ts", ['ts-changed']);
});