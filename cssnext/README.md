# cssnext语法说明
支持书写CSS未来语法的插件，文章整理了支持PostCSS的常用语法

- 自定义属性 & `var()`
- 自定义属性集 & `@apply`
- `calc()` & `var()`
- 媒体查询 & `@custom-media`
- 自定义选择器 & `@custom-selector`
- 嵌套 & `&`
- color()

## 自定义属性 & `var()`
在 `:root{}` 中定义常用属性，使用`--`前缀命名变量  
使用 `var()` 调用

```css
:root{
	--mainColor: red;
}

a{
	color: var(--mainColor);
}
```

编译后样式

```css
a{
	color: red;
}
```

----------

## 自定义属性集 & `@apply`
在 `:root{}` 中定义属性集，使用 `--` 前缀命名属性集变量名  
使用 `@apply` 进行调用  
在 `http://cssnext.io/playground/` 在线测试有效

```css
:root {
  --centered: {
    display: flex;
    align-items: center;
    justify-content: center;
  };
}

.centered {
  @apply --centered;
}
```

编译后样式

```css
.centered {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
```

----------

## `calc()` & `var()`
使自定义属性支持 `calc()`

```css
:root{
	--fontSize: 1rem;
}
h1{
	font-size: calc(var(--fontSize)*2);
}
```

编译后样式

```css
h1{
	font-size: calc(1rem*2);
}
```

----------

## 媒体查询 & `@custom-media`
支持使用`<=`,`>=`;代码在css最后  
**注意：变量名和括号之间保留空格**

```css
@custom-media --small-viewport (max-width: 30em);
@media (--small-viewport){
	body { font-size: 10rem;}
}
```

编译后样式

```css
@media (max-width: 30em){
	body{
		font-size: 10rem;
	}
}
```

----------

```css
@custom-media --viewport-medium (width <= 50rem);
@media (--viewport-medium) {
body { font-size: calc(var(--fontSize) * 1.2); }
}
```

编译后样式

```
@media (max-width: 50rem){
	body{
		font-size: calc(1rem * 1.2);
	}
}
```

----------

```css
@media (width >= 500px) and (width <= 1200px){
	body{
		width: 100%;
	}
}
```

编译后结果

```css
@media (min-width: 500px) and (max-width: 1200px){
	body{
		width: 100%;
	}
}
```

----------

## 自定义选择器 & `@custom-selector`

```css
@custom-selector :--button button, .button;
@custom-selector :--enter :hover, :focus;
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

:--button{
	box-shadow: 0 0 1px black;
}

a:--enter{
	color: black;
}

:--heading { 
	margin-top: 0;
}
```

编译后样式

```
button, .button{
	box-shadow: 0 0 1px black;
}

a:hover, a:focus{
	color: black;
}

h1, h2, h3, h4, h5, h6 { 
	margin-top: 0;
}
```

----------

## 嵌套 & `&`
`@nest selector &` 外层嵌套  
支持嵌套媒体查询

```css
a{
	& span{
		color: white;
	}
	
	@nest span &{
		color: blue;
	}
	/*嵌套@media*/
	@media (min-width: 30rem){
		color: yellow;
	}
}
```

编译后样式

```css
a{
}

a span{
	color: white;
}

span a{
	color: blue;
}

@media (min-width: 30em) {
    a{
    	color: yellow
    }
}
```

----------

## color()
更多颜色修饰：https://github.com/postcss/postcss-color-function#list-of-color-adjuster

```css
a{
	color: color(red alpha(-10%));
}

a:hover{
	color: color(red blackness(80%));
}
```

编译后样式

```css
a{
	color: #ff0000;
	color: rgba(255, 0, 0, 0.9);
}
a:hover{
	color: rgb(51, 0, 0);
}
```

----------

更多语法规则：[http://cssnext.io/][cssnext]  
源码下载：[https://github.com/NalvyBoo/PostCSS-Comn/tree/master/cssnext][nalvyboo]

[cssnext]:http://cssnext.io/
[nalvyboo]:https://github.com/NalvyBoo/PostCSS-Comn/tree/master/cssnext
[]: