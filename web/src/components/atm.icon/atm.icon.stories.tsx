import React from 'react';
import { storiesOf } from '@storybook/react';

import { RiIcon } from './atm.icon.component';
import { IcGoogle } from './icons';

storiesOf('RiIcon', module)
  .add('Search with background', () => (
    <div>
      <RiIcon.IcSearch iconRounded />
    </div>
  ))
  .add('Search', () => (
    <div>
      <RiIcon.IcSearch />
    </div>
  ))
  .add('Google', () => (
    <div>
      <IcGoogle />
    </div>
  ));
