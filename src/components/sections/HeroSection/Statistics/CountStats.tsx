"use client";
import React from "react";
import CountUp from "react-countup";

type Props = {
  start: number;
  end: number;
  duration: number;
};

const CountStats = ({ duration, end, start }: Props) => {
  return <CountUp start={start} end={end} duration={duration} />;
};

export default CountStats;
