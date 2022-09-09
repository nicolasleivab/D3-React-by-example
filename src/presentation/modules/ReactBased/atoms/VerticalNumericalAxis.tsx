import React from 'react';

type TVerticalNumericalAxis = {
  height: number;
};

export default function VerticalNumericalAxis({
  height,
}: TVerticalNumericalAxis) {
  return <line x1={0} y1={0} y2={height} stroke="#000" />;
}
