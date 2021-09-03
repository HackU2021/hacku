/* strict mode */
'use strict';

/*-------------------------------------------------
 - include node_modules
--------------------------------------------------*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
// const webpack = require('webpack');
// const webpackStream = require('webpack-stream');
// const webpackConfig = require('./webpack.config');

const { series,task,src,dest,watch } = gulp;

/*-------------------------------------------------
 - input/output dir path
--------------------------------------------------*/
const cssSrcPath = './src/sass';
const cssDestPath = './css';
const jsSrcPath = './src/js';
const jsDestPath = './js';
const pugSrcPath = './src/pug';
const pugDestPath = './';

/*-------------------------------------------------
 - tasks
--------------------------------------------------*/

task('sass',(done)=>{
    src(cssSrcPath + '/*.scss' )
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(sass({
            outputStyle:'expanded',
            compass : true
            }).on('error',sass.logError))
        .pipe(sourcemaps.write())
<<<<<<< HEAD
        .pipe(autoprefixer())
        .pipe(dest(cssDestPath));
    done();
    console.log("===== sass is true =====")
=======
        .pipe(autoprefixer())//{browsers: ["last 3 versions", "ie >= 11", "Android >= 4","ios_saf >= 10"]}  ()内に入っていた物
        .pipe(dest(cssDestPath));
    done();
>>>>>>> 93ff1662336e9038457f0b13c5293a1b80f98aa7
    
});

task('js',(done)=>{
    src(jsSrcPath + '/*.js' )
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    // .pipe(webpackStream(webpackConfig,webpack))
    .pipe(dest(jsDestPath));
    done();
});

task('pug',(done)=>{
    //src(['pugSrcPath' + '/*.pug' , '!' + pugSrcPath + '/_*.pug'])
    src([`${pugSrcPath}/*.pug` , `!${pugSrcPath}/_*.pug`])
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest(pugDestPath));
    done();
});

task('watch',(done)=>{
//es5 or es6 
//    watch(cssSrcPath+'/*.scss',task('sass'));
    watch(`${cssSrcPath}/*.scss`,task('sass'));
//    watch(jsSrcPath+'/*.js',task('js'));
    // watch(`${jsSrcPath}/*.js`,task('js'));
//    watch(pugSrcPath+'/*.pug',task('pug'));
    // watch(`${pugSrcPath}/*.pug`,task('pug'));
   done();
});

task('default',series('sass','js','pug'));

