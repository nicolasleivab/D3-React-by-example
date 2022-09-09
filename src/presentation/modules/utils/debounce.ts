export function debounce(setState: () => void, ms: number) {
  let timer: string| number | NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = 0;
      setState();
    }, ms);
  };
}
