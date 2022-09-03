import { TSetState } from '../types';

export function debounce(setState: any, ms: number) {
  let timer: any;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      setState();
    }, ms);
  };
}
