# PostCss
PostCss入门

## 命令与配置

**淘宝镜像npm`cnpm`（写命令时，将`npm`换成`cnpm`，其他与npm语法相同）**
```git
npm install cnpm -g --registry=https://registry.npm.taobao.org
```

**全局安装`gulp`**
如果之前有安装过一个全局版本的 gulp，请执行一下`npm rm --global gulp`来避免和`gulp-cli`冲突

```git
$ cnpm install --global gulp-cli
```

**项目安装`gulp`（项目根目录下）**
```git
$ cnpm install --save-dev gulp
```


**配置`package.json`文件**

```json
{ 
	"name": "testPostCSS", 
	"version": "0.0.1", 
	"description": "test PostCSS gulp plugin", 
	"keywords": [ 
		"gulpplugin", 
		"PostCSS", 
		"css" 
	], 
	"author": "damo", 
	"license": "MIT", 
	"dependencies": { 
		"postcss": "^5.0.0", 
		"gulp": "~3.8.10" 
	}, 
	"devDependencies": { 
		"gulp-postcss": "^6.0.1" 
	} 
}
```

**安装`gulp-postcss`（项目根目录下）**
```git
cnpm install --save-dev gulp-postcss
```

**配置`gulpfile.js`文件，`src`文件为css编辑文件，`css`文件为编译生成文件**

```javascript
var gulp = require('gulp');
var postcss = require('gulp-postcss');
```

```javascript
gulp.task('css', function () { 
	var processors = [
	]; 
	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./css')); 
});
```

**测试（在`src`中创建测试文件`style.css`）**
```css
.test{
	background: black;
}
```
**测试运行命令，在`css`文件查看`style.css`**

```git
$ gulp css
```

**添加PostCSS插件：[Autoprefixer][autopre](处理浏览器私有前缀)，[cssnext][cssnext](使用CSS未来的语法),[precss][precss](像Sass的函数)**

```git
$ cnpm install autoprefixer --save-dev
$ cnpm install cssnext --save-dev
$ cnpm install precss --save-dev
```

**配置`gulpfile.js`文件**

```javascript
var autoprefixer = require('autoprefixer'); 
var cssnext = require('cssnext'); 
var precss = require('precss');
```

```javascript
var processors = [
	autoprefixer,
	cssnext,
	precss
]; 
```

**运行命令，在`css`文件查看`style.css`**

```git
$ gulp css
```

**PostCss入门教程**
source:[http://www.w3cplus.com][source1]

* [PostCSS深入学习：你需要知道什么][konw1]
* [PostCSS深入学习：设置选项][konw2]
* [PostCSS深入学习：Gulp设置][konw3]
* [PostCSS深入学习：Grunt配置][konw4]
* [PostCSS深入学习: 管理插件][konw5]
* [PostCSS深入学习: 跨浏览器兼容性][konw6]
* [PostCSS深入学习: 压缩和优化CSS][konw7]
* [PostCSS深入学习: PreCSS的使用][konw8]
* [PostCSS深入学习: 定制自己的预处理器][konw9]
* [PostCSS深入学习: PostCSS和Sass、Stylus或LESS一起使用][konw10]
* [PostCSS深入学习: 结合BEM和SUIT方法使用PostCSS][konw11]
* [PostCSS深入学习: 简写和速写][konw12]
* [PostCSS入门：Sass用户入门指南][know13]

## 工具

* [CodePen][codepen]
* [Prepros][prepros]

## 插件
* [cssnext][cssnext]
* [postcss-simple-vars][simplevars]
* [postcss-discard-comments][discardcomments]
* [postcss-custom-media][custommedia]
* [postcss-media-minmax][mediaminmax]
* [postcss-conditionals][conditionals]
* [postcss-each][each]
* [postcss-for][for]
* [postcss-nested][nested]
* [postcss-transform-shortcut][transformshortcut]

[source1]:http://www.w3cplus.co

[konw1]:http://www.w3cplus.com/PostCSS/postcss-deep-dive-what-you-need-to-know.html
[konw2]:http://www.w3cplus.com/PostCSS/postcss-quickstart-guide-instant-setup-options.html
[konw3]:http://www.w3cplus.com/PostCSS/postcss-quickstart-guide-gulp-setup.html
[konw4]:http://www.w3cplus.com/PostCSS/postcss-quickstart-guide-grunt-setup.html
[konw5]:http://www.w3cplus.com/PostCSS/postcss-quickstart-guide-exploring-plugins.html
[konw6]:http://www.w3cplus.com/PostCSS/using-postcss-for-cross-browser-compatibility.html
[konw7]:http://www.w3cplus.com/PostCSS/using-postcss-for-minification-and-optimization.html
[konw8]:http://www.w3cplus.com/PostCSS/postcss-deep-dive-preprocessing-with-precss.html
[konw9]:http://www.w3cplus.com/PostCSS/postcss-deep-dive-roll-your-own-preprocessor.html
[konw10]:http://www.w3cplus.com/PostCSS/using-postcss-together-with-sass-stylus-or-less.html
[konw11]:http://www.w3cplus.com/PostCSS/using-postcss-with-bem-and-suit-methodologies.html
[konw12]:http://www.w3cplus.com/PostCSS/postcss-deep-dive-shortcuts-and-shorthand.html
[know13]:http://www.w3cplus.com/preprocessor/getting-started-with-postcss-a-quick-guide-for-sass-users.html

[codepen]:http://codepen.io/
[prepros]:https://prepros.io/

[cssnext]:http://cssnext.io/features/
[simplevars]:https://github.com/postcss/postcss-simple-vars
[discardcomments]:https://github.com/ben-eb/postcss-discard-comments
[custommedia]:https://github.com/postcss/postcss-custom-media
[mediaminmax]:https://github.com/postcss/postcss-media-minmax
[conditionals]:https://github.com/andyjansson/postcss-conditionals
[each]:https://github.com/outpunk/postcss-each
[for]:https://github.com/antyakushev/postcss-for
[nested]:https://github.com/postcss/postcss-nested
[transformshortcut]:https://github.com/jonathantneal/postcss-transform-shortcut
[autopre]:https://github.com/postcss/autoprefixer
[precss]:https://github.com/jonathantneal/precss
