import { LargeNumberLike } from 'crypto';
import { useEffect, useState,useRef,useCallback } from 'react';


interface Props{
    minutes: number;
    onStartCallback: Function;
    onStopCallback: Function;
    onCompleteCallback: Function;

}

export default function useCountdown({ minutes, onStartCallback, onStopCallback, onCompleteCallback }:Props) {
  const timerId =useRef<number | NodeJS.Timer | null>(null);
  const time = minutes * 60;
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTime] = useState(time);
  const [ticking, setTicking] = useState(false);

  const clear = () => {
    clearInterval(timerId.current? timerId.current :undefined);
    timerId.current = null;
  };

  const tick = useCallback(() => {
    if (timeLeft > 0) {
      setTime(timeLeft - 1);
      setProgress((count) => count + 1);
    }
    if (timeLeft <= 1) {
      setTicking(false);
      clear();
      onCompleteCallback?.();
    }
  }, [onCompleteCallback, timeLeft]);

  useEffect(() => {
    if (ticking) {
      timerId.current = setInterval(tick, 1000);
    } else {
      clear();
    }

    return clear;
  }, [tick, ticking]);

  useEffect(() => {
    setTime(time);
  }, [time]);

  const start = useCallback(() => {
    setTicking(true);
    onStartCallback?.();
  }, [onStartCallback]);

  const stop = useCallback(() => {
    setTicking(false);
    onStopCallback?.();
  }, [onStopCallback]);

  const reset = useCallback(() => {
    setTicking(false);
    setProgress(0);
    setTime(time);
    onStopCallback?.();
  }, [onStopCallback]);

  return {
    start,
    stop,
    reset,
    ticking,
    timeLeft,
    progress: (progress / time) * 100,
  };
}


export { useCountdown };