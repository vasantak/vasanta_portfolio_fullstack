import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface Props {
  end: number;
  /** Set to true to begin counting */
  start: boolean;
  delay?: number;
  duration?: number;
}

/** Shows the final value at rest, then counts up from 0 once `start` becomes true. */
export function CountUp({ end, start, delay = 0, duration = 1400 }: Props) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(end);

  useEffect(() => {
    if (!start || reduced) return;
    let raf = 0;
    let begin: number | null = null;
    setValue(0);
    const frame = (now: number) => {
      if (begin === null) begin = now + delay;
      const t = Math.min(Math.max((now - begin) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [start, reduced, end, delay, duration]);

  return <span>{value}</span>;
}
