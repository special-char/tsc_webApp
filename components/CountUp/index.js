import React, { useEffect, useRef, useState } from "react";

const CountUp = ({ start = 0, end, timer = 30 }) => {
  console.log("end", end);
  const [state, setstate] = useState(null);
  const ref = useRef(start);

  const accumulator = end / 200;
  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setstate(end);
      setstate(result);
      ref.current = result;
    }

    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }

    return () => (isMounted = false);
  }, [end, start]);
  return <div>{state}+</div>;
};

export default CountUp;
