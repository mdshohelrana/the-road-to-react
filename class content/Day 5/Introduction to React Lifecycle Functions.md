# React Component Life-Cycle

## Class Component Life-Cycle

In ReactJS, every component creation process involves various lifecycle methods. These lifecycle methods are termed as component's lifecycle. These lifecycle methods are not very complicated and called at various points during a component's life. The lifecycle of the component is divided into four phases. They are:

1. **Initial Phase**

2. **Mounting Phase**

3. **Updating Phase**

4. **Unmounting Phase**

Each phase contains some lifecycle methods that are specific to the particular phase. Let us discuss each of these phases one by one.

1. **Initial Phase**

It is the birth phase of the lifecycle of a ReactJS component. Here, the component starts its journey on a way to the DOM. In this phase, a component contains the default Props and initial State. These default properties are done in the constructor of a component. The initial phase only occurs once and consists of the following methods.

- _getDefaultProps()_

It is used to specify the default value of this.props. It is invoked before the creation of the component or any props from the parent is passed into it.

- _getInitialState()_

It is used to specify the default value of **this.state**. It is invoked before the creation of the component.

2. **Mounting Phase**

In this phase, the instance of a component is created and inserted into the **DOM**. It consists of the following methods.

- _componentWillMount()_

This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.

- _componentDidMount()_

This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.

- _render()_

This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.

3. **Updating Phase**

It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy. The main aim of this phase is to ensure that the component is displaying the latest version of itself. Unlike the Birth or Death phase, this phase repeats again and again. This phase consists of the following methods.

- _componentWillRecieveProps()_

It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by - - using

- _this.setState()_ method.

- _shouldComponentUpdate()_

It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.

- _componentWillUpdate()_

It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false.

render()
It is invoked to examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.

- componentDidUpdate()

It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.

4. Unmounting Phase

It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. This phase contains only one method and is given below.

- componentWillUnmount()

This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.

```
import React, { Component } from "react";
export default  class  Home  extends  Component {
constructor(props) {
super(props);
this.state = { hello: "React life cycle" };
this.changeState = this.changeState.bind(this);
}
render() {
return (
<div>
<h1>ReactJS component's Lifecycle</h1>
<h3>Hello {this.state.hello}</h3>
<button  onClick={this.changeState}>Click Here!</button>
</div>
);
}

componentWillMount() {
console.log("Component Will MOUNT!");
}

componentDidMount() {
console.log("Component Did MOUNT!");
}

changeState() {
this.setState({ hello: "All!!- Its a great reactjs tutorial." });

}

componentWillReceiveProps(newProps) {
console.log("Component Will Recieve Props!");
}

shouldComponentUpdate(newProps, newState) {
return  true;
}

componentWillUpdate(nextProps, nextState) {
console.log("Component Will UPDATE!");
}

componentDidUpdate(prevProps, prevState) {
console.log("Component Did UPDATE!");
}

componentWillUnmount() {
console.log("Component Will UNMOUNT!");
}
}
```

## Functin Component Life-Cycle

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

1. State Hook

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here, useState is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together. (We’ll show an example comparing useState to this.state in Using the State Hook.)

The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. The initial state argument is only used during the first render.

2. Effect Hook

#### Note: `If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.`

You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.

The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. (We’ll show examples comparing useEffect to these methods in Using the Effect Hook.)

For example, this component sets the document title after React updates the DOM

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render. (We’ll talk more about how this compares to class lifecycles in Using the Effect Hook.)

Effects may also optionally specify how to “clean up” after them by returning a function. For example, this component uses an effect to subscribe to a friend’s online status, and cleans up by unsubscribing from it

```
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```
