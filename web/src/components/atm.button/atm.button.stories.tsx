import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Button, ButtonKind, LinkUnderline } from './index';

enum buttonKind {
  primary = 'primary',
  secondary = 'secondary',
  alert = 'alert',
  neutral = 'neutral',
  callToAction = 'callToAction',
  accessory = 'accessory',
  link = 'link',
}

storiesOf('Button', module)
  // as variações dos componentes acontecem aqui v
  .add('Default', () => (
    <Button kind={select<ButtonKind>('Kind', buttonKind, buttonKind.primary)}>
      Default
    </Button>
  ))
  .add('Outlined', () => (
    <Button
      kind={select<ButtonKind>('Kind', buttonKind, buttonKind.primary)}
      outlined={boolean('Outlined', true)}
    >
      Outlined
    </Button>
  ))
  .add('Disabled', () => (
    <Button
      kind={select<ButtonKind>('Kind', buttonKind, buttonKind.primary)}
      disabled={boolean('Disabled', true)}
    >
      Disabled
    </Button>
  ))
  .add('Link', () => (
    <LinkUnderline
      kind={select<ButtonKind>('Kind', buttonKind, buttonKind.primary)}
    >
      Link
    </LinkUnderline>
  ));
