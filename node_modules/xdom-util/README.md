xdom-util
=====
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Methods](#methods)
5. [Git repository](#git)
6. [Version](#version)

### <a name="description"></a>1. Description
`xdom-util` or `XDomUtil` is a library for working with the HTML DOM structure
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a dev 
dependency in your `package.json` file  
```
npm install xdom-util --save-dev
```

### <a name="usage"></a>3. Usage
In order to use the `XDomUtil` service you have to include/import 
it into your application:

```
import {XDomUtil} from "xdom-util";
```

If you want to use it in a plain/vanilla Javascript project then you 
might just include the js file into your html/page application:
```
<script type="application/javascript" src="./node_modules/xdom-util/dist/xdom-util.min.js"></script>
```

Use it as `static` class.  
  
#### Example
```javascript
var element = document.querySelector('body');
var className = 'test-class';

XDomUtil.addClass(element, className);
var hasClass = XDomUtil.hasClass(element, className);
console.log('the element has the class ['+ className +'] ?', hasClass);

XDomUtil.removeClass(element, className);
var hasClass = XDomUtil.hasClass(element, className);
console.log('the element has the class ['+ className +'] ?', hasClass);

```

#### Output
```
the element has the class [test-class] ? true
the element has the class [test-class] ? false
```

### <a name="methods"></a>4. Methods

#### addClass(element: any, className: string): void
Add the class to the DOM element  
  
*Parameters:*  
**element** - DOM element  
**className** - Name of the class to be added to the DOM element  
  
*Return:*  
Method returns nothing - `void`.  
  
  
#### removeClass(element: any, className: string): void  
Remove the class from the DOM element  
  
*Parameters:*  
**element** - DOM element  
**className** - Name of the class to be removed from the DOM element  
  
*Return:*  
Method returns nothing - `void`.  
  
  
#### hasClass(element: any, className: string): boolean  
Check if the DOM element has a specific class  
  
*Parameters:*  
**element** - DOM element  
**className** - Name of the class to be checked  
  
*Return:*  
Method returns TRUE is the elements has the class and 
FALSE is there is no such class  
  
  
### <a name="git"></a>5. Git repository
[https://github.com/kageoni/xdom-util](https://github.com/kageoni/xdom-util)

### <a name="version"></a>6. Version
0.0.1