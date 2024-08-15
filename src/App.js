import React from "react";
import Calender from "./Calender";
import { ErrorBoundary } from "react-error-boundary";

// import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
// import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';

// import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import "./style.css";

// const getClassName = cssModules(STYLES);

const App = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className="middle">
      <h1>Flight Schedule</h1>
      <div style={{ width: "400px" }}>
        {/* <ErrorBoundary fallback={<div>Something went wrong</div>}> */}
        <Calender />
        {/* </ErrorBoundary> */}
      </div>
      <button style={{ width: "100%", marginTop: "20px", padding: "15px 0" }}>
        Continue
      </button>
    </div>
  </div>

  // <div className={getClassName('App')}>
  //   <header className={getClassName('App__header')}>
  //     <div className={getClassName('App__header-inner')}>
  //       <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Welcome to React + Backpack</BpkText>
  //     </div>
  //   </header>
  //   <main className={getClassName('App__main')}>
  //     <BpkText tagName="p" className={getClassName('App__text')}>
  //       To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
  //     </BpkText>
  //     <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
  //   </main>
  // </div>
);

export default App;
