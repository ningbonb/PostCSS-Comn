var gulp = require('gulp');
var postcss = require('gulp-postcss'); 

// 取消某一功能，在gulp.task中注释该行即可
// 添加其他插件方法，访问https://github.com/NalvyBoo/PostCss查看说明
var atImport = require('postcss-import'); //整合多个css
var mqpacker = require('css-mqpacker'); //合并媒体查询
var autoprefixer = require('autoprefixer'); //添加浏览器内核前缀
var cssnext = require('cssnext'); //css未来语法
var precss = require('precss'); //类似Sass预编译
var color_rgba_fallback = require('postcss-color-rgba-fallback'); //给rgba颜色创建降级方案(添加备用颜色)
var opacity = require('postcss-opacity');//给opacity提供降级方案（给IE浏览器添加滤镜属性）
var pixrem = require('pixrem');//让IE8支持rem单位
var pseudoelements = require('postcss-pseudoelements');//将伪元素的::转换为:(IE8不支持::)
var cssnano = require('cssnano'); //压缩CSS文件

gulp.task('css', function () { 
	var processors = [
		atImport,
		mqpacker,
		autoprefixer,
		cssnext,
		precss,
		color_rgba_fallback,
		opacity,
		pixrem,
		pseudoelements
		// cssnano
	]; 
	// 源文件地址
	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	// 目的文件地址
	.pipe(gulp.dest('./css')); 
});