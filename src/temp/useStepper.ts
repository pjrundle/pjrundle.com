import { useCallback, useEffect, useMemo, useState } from "react";

export const useStepper = ({
  count,
  initialIndex = 0,
  loop = false,
}: {
  count: number;
  initialIndex?: number;
  loop?: boolean;
}) => {
  const clamp = useCallback(
    (index: number) => {
      const maxIndex = count - 1;
      const minIndex = 0;

      if (loop) {
        if (count === 0) return minIndex;

        if (index < minIndex) return maxIndex;
        if (index > maxIndex) return minIndex;

        return index;
      }

      return Math.max(minIndex, Math.min(index, maxIndex));
    },
    [count, loop],
  );

  const [index, setIndexState] = useState(() => clamp(initialIndex));

  const setIndex = useCallback(
    (newIndex: number) => {
      setIndexState(clamp(newIndex));
    },
    [clamp],
  );

  const next = useCallback(() => {
    setIndexState((i) => clamp(i + 1));
  }, [clamp]);

  const prev = useCallback(() => {
    setIndexState((i) => clamp(i - 1));
  }, [clamp]);

  const isFirst = index === 0;
  const isLast = index === count - 1;
  const atStart = !loop && isFirst;
  const atEnd = !loop && isLast;

  // Clamp the index when the count changes
  useEffect(() => setIndexState((i) => clamp(i)), [count]);

  return useMemo(
    () => ({
      index,
      setIndex,
      next,
      prev,
      atStart,
      atEnd,
      loop,
      count,
    }),
    [index, setIndex, next, prev, atStart, atEnd, loop, count],
  );
};
