# React JSX

- JSX provides you to write HTML/XML-like structures (e.g., DOM-like tree structures) in the same file where you write JavaScript code, then preprocessor will transform these expressions into actual JavaScript code. Just like XML/HTML, JSX tags have a tag name, attributes, and children.

## Example

- Here, we will write JSX syntax in JSX file and see the corresponding JavaScript code which transforms by preprocessor(babel).

### JSX File

`<div>Hello Hello React World</div>`

### Corresponding Output

`React.createElement("div", null, "Hello React World");`

The above line creates a react element and passing three arguments inside where the first is the name of the element which is div, second is the attributes passed in the div tag, and last is the content you pass which is the "Hello React World."

### Why use JSX?

1. It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.
2. Instead of separating technologies by putting markup and logic in separate files, React uses components that contain both. We will learn components in a further section.
3. It is type-safe, and most of the errors can be found at compilation time.
4. It makes easier to create templates.

### Nested Elements in JSX

To use more than one element, you need to wrap it with one container element. Here, we use div as a container element which has three nested elements inside it

```react
import React, { Component } from 'react';
class App extends Component{
   render(){
      return(
         <div>
            <h1>Title</h1>
            <h2>Sub Title</h2>
            <p>Some body text</p>
         </div>
      );
   }
}
export default App
```

### JSX Attributes

JSX use attributes with the HTML elements same as regular HTML. JSX uses camelcase naming convention for attributes rather than standard naming convention of HTML such as a class in HTML becomes className in JSX because the class is the reserved keyword in JavaScript. We can also use our own custom attributes in JSX. For custom attributes, we need to use data- prefix. In the below example, we have used a custom attribute data-demoAttribute as an attribute for the <p> tag.

```
import React, { Component } from 'react';
class App extends Component{
   render(){
      return(
         <div>
             <h1>React</h1>
           <h2>Training Course</h2>
             <p data-demoAttribute = "demo">This website contains the best React tutorials.</p>
         </div>
      );
   }
}
export default App;
```

In JSX, we can specify attribute values in two ways:

1. As String Literals: We can specify the values of attributes in double quotes:
   `const element = <h2 className = "firstAttribute">Hello Rect</h2>;`

2. As Expressions: We can specify the values of attributes as expressions using curly braces {}:
   `const element = <h2 className = {varName}>Hello Rect</h2>;`

### JSX Styling

React always recommends to use inline styles. To set inline styles, you need to use camelCase syntax. React automatically allows appending px after the number value on specific elements. The following example shows how to use styling in the element.

```
import React, { Component } from 'react';
class App extends Component{
   render(){
     var myStyle = {
         fontSize: 80,
         fontFamily: 'Courier',
         color: '#003300'
      }
      return (
         <div>
            <h1 style = {myStyle}>Hello React</h1>
         </div>
      );
   }
}
export default App;
```
