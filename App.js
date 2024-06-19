// src/App.js
import React from 'react';
import DisplaySimpleJSX from './components/DisplaySimpleJSX';
import DisplayRecords from './components/DisplayRecords';
import ShowHideElement from './components/ShowHideElement';
import EnableDisableButton from './components/EnableDisableButton';
import TwoWayDataBinding from './components/TwoWayDataBinding';
import DynamicChildComponents from './components/DynamicChildComponents';
import SumTwoNumbers from './components/SumTwoNumbers';
import Counter from './Counter';
import SearchFilter from './SearchFilter';

const App = () => {
  return (
    <div>
      <DisplaySimpleJSX />
      <hr />
      <DisplayRecords />
      <hr />
      <ShowHideElement />
      <hr />
      <EnableDisableButton />
      <hr />
      <TwoWayDataBinding />
      <hr />
      <DynamicChildComponents />
      <hr />
      <SumTwoNumbers />
      <hr />
      <Counter />
      <hr />
      <SearchFilter />
    </div>
  );
};

export default App;
