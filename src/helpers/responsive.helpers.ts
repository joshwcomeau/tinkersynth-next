import { BREAKPOINT_SIZES } from '../constants';

export const getBreakpointFor = windowWidth =>
  Object.keys(BREAKPOINT_SIZES).find(
    name => windowWidth <= BREAKPOINT_SIZES[name]
  ) || 'xl';

export const getDeviceType = breakpoint => {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;

  const userAgent =
    typeof window !== 'undefined' ? window.navigator.userAgent : 'node';

  const isMobileUA = mobileRegex.test(userAgent);

  if (!breakpoint) {
    breakpoint = getBreakpointFor(window.innerWidth);
  }

  if (breakpoint === 'xs' || breakpoint === 'sm' || isMobileUA) {
    return 'mobile';
  } else {
    return 'desktop';
  }
};
