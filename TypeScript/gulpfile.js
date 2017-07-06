const gulp = require('gulp');
const ts = require('gulp-typescript');
const babili = require('gulp-babili');
const rm = require('gulp-rm');

// 1 - Trouver un plugin qui supprime un fichier ou répertoire
// Et créer une tache qui supprime le répertoire dist

// Faire un enchaine de tache qui supprime le répertoire dist
// lance le build ts
// puis déplacer les fichiers txt

gulp.task('hello', function() {
    console.log('Hello');
});

gulp.task('copy', ['clean:dist'], function() {
    return gulp.src('src/txt/*.txt')
        .pipe(gulp.dest('dist/txt'));
});

gulp.task('clean:dist', function() {
    return gulp.src( 'dist/**/*', { read: false })
        .pipe( rm() )
})

gulp.task('build:ts', ['clean:dist'], function() {
    const tsProject = ts.createProject('tsconfig.json');
    const tsResult = tsProject.src()
        .pipe(tsProject());


    return tsResult.js.pipe(babili()).pipe(gulp.dest('dist'));
});

gulp.task('build', [
    'build:ts',
    'copy',
]);

gulp.task('helloandcopy', ['hello', 'copy']);
