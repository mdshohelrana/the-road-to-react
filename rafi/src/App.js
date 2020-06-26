import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHook from "./Day1/ReactHook";
import ClassComponent from "./Day1/ClassComponent";
import AttrAndProps from "./Day2/Attr_And_Props";
import BaseComponent from "./Day2/BaseComponent";
import NestedComponent from "./Day2/NestedComponent";
import UseOfMap from "./Day2/UseOfMap";
import PropsWithClassContent from "./Day3/PropsWithClassContent";
import PropsWithFunctionComponent from "./Day3/PropsWithFunctionComponent";
import DefaultProps from "./Day3/DefaultProps";
import LifeCycleMountMethod from "./Day5/LifeCycleMountMethod";

function App() {
  return (
    <div className="App">
      <ReactHook/>
      <ClassComponent/>
      <AttrAndProps attr="This is an attribute and you can access me by props"/>
      <BaseComponent/>
      <UseOfMap/>
      <PropsWithClassContent msg='Getting Message with props in class content'/>
      <PropsWithFunctionComponent msg='Getting Message with props in function content'/>
      <DefaultProps />
      <LifeCycleMountMethod/>
    </div>

  );
}

export default App;
