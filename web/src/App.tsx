/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { InputLabel } from './components/atm.input/atm.input';
import { Separator } from './components/atm.separator';
import GlobalStyle from './global.style';
import { RiIcon } from './components/atm.icon';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputValuea, setInputValuea] = useState('');
  const bla = 'lalalala';

  console.log(inputValue, 'inputvalue');

  return (
    <>
      <GlobalStyle />
      <Separator />
      <InputLabel
        name="nome"
        type="text"
        value={inputValue}
        setValue={setInputValue}
      />
      <Separator />
      <InputLabel
        name="idade"
        type="text"
        value={inputValuea}
        setValue={setInputValuea}
        icon={<RiIcon.IcSearch iconRounded />}
        placeholder="Busque aqui seu próximo evento"
      />
      <Separator />
      <InputLabel
        name="idade"
        type="text"
        value={inputValuea}
        setValue={setInputValuea}
        icon={<RiIcon.IcSearch />}
        placeholder="Busque aqui seu próximo evento"
      />
      <RiIcon.IcSearch />
      <RiIcon.IcSearch iconRounded />
    </>
  );
}

export default App;
