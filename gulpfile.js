(function() {

	var gulp = require('gulp'),
		sass = require('gulp-sass'),
		cssnano = require('gulp-cssnano'),
		autoprefixer = require('gulp-autoprefixer'),
		sourcemaps = require('gulp-sourcemaps'),
		jshint = require('gulp-jshint'),
		stylish = require('jshint-stylish'),
		map = require('map-stream'),
		uglify = require('gulp-uglify'),
		imagemin = require('gulp-imagemin'),
		useref = require('gulp-useref'),
		gulpIf = require('gulp-if'),
		cache = require('gulp-cache'),
		del = require('del'),
		changed = require('gulp-changed'),
		runSequence = require('run-sequence'),
		browserSync = require('browser-sync').create(),
		plumber = require('gulp-plumber'),
		paths = {
			root: './',
			source: {
				root: 'src/',
				scss: 'src/assets/scss/',
				styles: 'src/assets/css/',
				scripts: 'src/assets/js/',
				images: 'src/assets/imgs/',
				fonts: 'src/assets/fonts/',
				plugins: 'src/assets/plugins/'
			},
			build: {
				root: 'build/',
				styles: 'build/assets/css/',
				scripts: 'build/assets/js/',
				images: 'build/assets/imgs/',
				fonts: 'build/assets/fonts/',
				plugins: 'build/assets/plugins/'
			}
		};

	/**
     * ======================================
     * 开发阶段Tasks
     * ======================================
     */

	// 将Sass编译成css
	gulp.task('sass', function() {
		return gulp.src(paths.source.scss + '*.scss')
			.pipe(changed(paths.source.root, { extension: '.scss' }))
			.pipe(plumber())
			.pipe(sass())
			.pipe(sourcemaps.init())
			.pipe(autoprefixer({
				browsers: ['last 3 versions'],
				cascade: true
			}))
			.pipe(sourcemaps.write(paths.root))
			.pipe(gulp.dest(paths.source.styles))
			.pipe(browserSync.reload({
				stream: true
			}));
	});

	// js语法检测
	gulp.task('hint', function() {
		return gulp.src(paths.source.scripts + '**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
	});

	// 浏览器同步
	gulp.task('liveload', function() {
		browserSync.init({
			server: {
				baseDir: paths.source.root
			},
			open: "external" // open with external mode (http://192.168.1.xxx:3000)
		});
	});

	// 清理开发目录css文件夹
	gulp.task('clean:css', function() {
		return del.sync(paths.source.styles);
	});

	// 监听文件修改
	gulp.task('watch', ['liveload', 'sass', 'hint'], function() {
		gulp.watch(paths.source.scss + '**/*.scss', ['sass']);
		gulp.watch(paths.source.root + '**/*.html', browserSync.reload);
		gulp.watch(paths.source.scripts + '**/*.js', browserSync.reload);
	});


	/**
     * ======================================
     * 构建阶段Tasks
     * ======================================
     */

    // 压缩js和css
    gulp.task('useref', function() {
    	return gulp.src(paths.source.root + '**/*.html')
    		.pipe(useref())
    		//.pipe(gulpIf('*.js', uglify()))
    		.pipe(gulpIf('*.css', cssnano()))
    		.pipe(gulp.dest(paths.build.root));
    });

    // 拷贝html
    gulp.task('build:html', function() {
    	return gulp.src(paths.source.root + '**/*.html')
    		.pipe(gulp.dest(paths.build.root));
    });

    // 拷贝plugins
    gulp.task('build:plugins', function() {
    	return gulp.src(paths.source.plugins + '**/*')
    		.pipe(gulp.dest(paths.build.plugins));
    });

    // 拷贝css
    gulp.task('build:styles', function() {
    	return gulp.src(paths.source.styles + '**/*.css')
    		.pipe(sourcemaps.init())
    		.pipe(cssnano({
    			zindex: false
    		}))
    		.pipe(sourcemaps.write(paths.root))
    		.pipe(gulp.dest(paths.build.styles));
    });

    // 拷贝js
    gulp.task('build:scripts', function() {
    	return gulp.src(paths.source.scripts + '**/*.js')
    		//.pipe(uglify())
    		.pipe(gulp.dest(paths.build.scripts));
    });

    // 拷贝并压缩图片
    gulp.task('build:images', function() {
    	return gulp.src(paths.source.images + '**/*.+(png|jpg|jpeg|gif|svg)')
    		.pipe(cache(imagemin([], {
    			interlaced: true
    		})))
    		.pipe(gulp.dest(paths.build.images));
    });

    // 拷贝字体
    gulp.task('build:fonts', function() {
    	return gulp.src(paths.source.fonts + '**/*')
    		.pipe(gulp.dest(paths.build.fonts));
    });

    // 清理build文件夹
    gulp.task('clean:build', function() {
    	return del.sync(paths.build.root);
    });

    // 生成
    gulp.task('build', function(cb) {
    	runSequence('clean:build',
    		['build:html', 'build:plugins', 'build:styles', 'build:scripts', 'build:images', 'build:fonts'],
    		cb);
    });

    /**
     * ======================================
     * 默认Task
     * ======================================
     */
    gulp.task('default', function(cb) {
        runSequence(['sass', 'hint', 'liveload', 'watch'], cb);
    });

})();
