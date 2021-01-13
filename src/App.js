import React from "react";

import Contacts from "./components/Contacts";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header branding='Contact Manager' />
      <main className='container'>
        <Contacts />
      </main>
    </div>
  );
}

export default App;
