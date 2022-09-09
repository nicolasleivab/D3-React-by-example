import React from 'react';

type THorizontalTimeAxis = {
  width: number;
  height: number;
};

export default function HorizontalTimeAxis({
  width,
  height,
}: THorizontalTimeAxis) {
  return <line y1={height} y2={height} x1={0} x2={width} stroke="#000" />;
}
