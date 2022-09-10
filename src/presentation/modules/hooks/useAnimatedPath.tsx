import { useSpring } from 'react-spring';

type TUseAnimatedPath = {
  duration: number;
  delay: number;
  length: number;
  toggle: boolean;
};

export default function useAnimatedPath({
  duration,
  delay,
  length,
  toggle,
}: TUseAnimatedPath) {
  const animatedStyle = useSpring({
    config: { duration },
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    delay,
  });

  return {
    style: animatedStyle,
  };
}
