import React, { useState } from 'react';
import SignIn from './SignIn';
import Main from "./Main";
import config from "../config.json";
console.log({ config });

export default () => {
  const [name, setName] = useState("");
  return (
    <div>
      {config.signInEnabled && name ? <SignIn name={name} setName={setName} /> :
        <Main name={name} />
      }
    </div>
  )
};
