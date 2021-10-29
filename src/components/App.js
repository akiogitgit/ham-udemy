import React, { useState } from 'react';
import SignIn from './SignIn';

export default () => {
  const [name, setName] = useState("");
  return (
    <div>
      <SignIn name={name} setName={setName} />
    </div>
  )
};
