/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { InputLabel } from './atm.input';
import { RiIcon } from '../atm.icon';
import { Separator } from '../atm.separator';

storiesOf('InputLabel', module).add('Default', () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <InputLabel
        name="Input de texto"
        type="text"
        value={inputValue}
        setValue={setInputValue}
      />
      <Separator />
      {/* Use placeholder with icon or use only label name value */}
      <InputLabel
        name="Com ícone"
        icon={<RiIcon.IcSearch />}
        value={inputValue}
        setValue={setInputValue}
        placeholder="ícone + placeholder"
      />
    </>
  );
});
