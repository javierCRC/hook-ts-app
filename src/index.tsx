import React from 'react';
import ReactDOM from 'react-dom';

//import { HookApp } from './components/HookApp';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithHook } from './components/01-useState/CounterWithHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHook } from './components/03-Examples/MultipleCustomHook';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleUseRef } from './components/04-useRef/RealExampleUseRef';
//import { LayaoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
//import { Memorize } from './components/06-Memos/Memorize';
//import { MemoHook } from './components/06-Memos/MemoHook';
//import { CallBackHook } from './components/06-Memos/CallBackHook';
//import { Padre } from './components/07-tarea-memo/Padre';
//import { TodoApp } from './components/08-useReduce/TodoApp';

import { MainApp } from './components/09-useContext/MainApp';


ReactDOM.render(
  <React.StrictMode>

   <MainApp />

  </React.StrictMode>,
  document.getElementById('root')
);



/*

     <HookApp />
    <CounterApp />
    <CounterWithHook />
    <SimpleForm />

*/