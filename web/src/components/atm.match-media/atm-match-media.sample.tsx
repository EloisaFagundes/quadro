import * as React from 'react';
import { MatchMedia } from './atm.match-media.component';

export const MatchMediaSample: React.FC = () => {
  // const windowValue = (isMobileSized: boolean) => {
  //   if (isMobileSized === true) {
  //     return <div>ismobile</div>;
  //   }
  //   return <div>isdesktop</div>;
  // };

  return (
    <MatchMedia maxWidth="md">
      {(isMobileSized) =>
        // eslint-disable-next-line prettier/prettier
        isMobileSized ? <div>ismobile</div> : <div>isdesktop</div>}
    </MatchMedia>
  );
};
