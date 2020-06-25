import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHook from "./Day-1-Practice/ReactHook";
import ClassComponent from "./Day-1-Practice/ClassComponent";
import AttrAndProps from "./Day-2-Practice/Attr_And_Props";
import BaseComponent from "./Day-2-Practice/BaseComponent";
import NestedComponent from "./Day-2-Practice/NestedComponent";
import UseOfMap from "./Day-2-Practice/UseOfMap";
import FormSingleElement from "./Day4/FormSingleElement";
import MyForm from "./Day4/MyForm";
import MultipleInputInForm from "./Day4/MultipleInputInForm";

function App() {
  return (
    <div className="App">
      <ReactHook/>
      <ClassComponent/>
      <AttrAndProps attr="This is an attribute and you can access me by props"/>
      <BaseComponent/>
      <UseOfMap/>
      <FormSingleElement/>
      <MyForm/>
      <MultipleInputInForm/>
    </div>

  );
}

export default App;
