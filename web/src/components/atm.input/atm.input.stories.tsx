import { storiesOf } from '@storybook/react';

import React, { useState } from 'react';
import { Input } from './atm.input';
import { RiIcon } from '../atm.icon';
import { Separator } from '../atm.separator';

storiesOf('InputLabel', module).add('Default', () => {
  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useState({});

  const handleChange = () => {
    setState({
      ...state,
    });
  };
  return (
    <>
      <Input
        name="Input de texto"
        type="text"
        value={inputValue}
        setValue={setInputValue}
        onChange={() => handleChange}
      />
      <Separator />
      {/* Use placeholder with icon or use only label name value */}
      <Input
        name="Com ícone"
        icon={<RiIcon.IcSearch />}
        value={inputValue}
        setValue={setInputValue}
        placeholder="ícone + placeholder"
        onChange={() => handleChange}
      />
    </>
  );
});
