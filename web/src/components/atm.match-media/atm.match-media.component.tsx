import * as React from 'react';
import { Breakpoint } from '../obj.constants';

type MediaSizes = keyof typeof Breakpoint;

export interface MatchMediaProps {
  maxWidth?: MediaSizes;
  children: (match: boolean) => JSX.Element;
}

const mediaQuery = (maxWidth: MediaSizes) =>
  `(max-width: ${Breakpoint[maxWidth]}em)`;

export const MatchMedia: React.FC<MatchMediaProps> = (props) => {
  const [isMobiledSized, setIsMobileSized] = React.useState(false);
  const { children, maxWidth } = props;

  React.useEffect(() => {
    const mediaWatcher = window.matchMedia(mediaQuery(maxWidth || 'md'));
    setIsMobileSized(mediaWatcher.matches);

    const updateIsNarrowScreen = (e: { matches: boolean }) => {
      setIsMobileSized(e.matches);
    };
    mediaWatcher.addEventListener('change', updateIsNarrowScreen);

    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
    };
  }, [isMobiledSized, maxWidth]);
  // const width = ({ children }) => children(isMobiledSized);
  return children(isMobiledSized);
};
