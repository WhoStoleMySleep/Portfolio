import React, { useState, useEffect } from 'react';

function useDebounce(text: string, delay: number) {
  const [delayedText, setDelayedText] = useState(text);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const updateDelayedText = () => {
      setDelayedText(text);
    };

    const startTimer = () => {
      clearTimeout(timeoutId ? timeoutId : '');
      timeoutId = setTimeout(updateDelayedText, delay);
    };

    startTimer();

    return () => {
      clearTimeout(timeoutId  ? timeoutId : '');
    };
  }, [text, delay]);

  return delayedText;
}

export default useDebounce;
