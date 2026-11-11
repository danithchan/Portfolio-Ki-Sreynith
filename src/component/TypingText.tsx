// component/TypingText.tsx
import { useEffect, useState } from 'react';

type TypingTextProps = {
  text: string;
  speed?: number;       
  deleteSpeed?: number;   
  pauseAfterType?: number;  
  pauseAfterDelete?: number; 
  startDelay?: number;
  loop?: boolean;        
  className?: string;
};

export default function TypingText({
  text,
  speed = 100,
  deleteSpeed = 50,
  pauseAfterType = 1500,
  pauseAfterDelete = 400,
  startDelay = 0,
  loop = true,
  className = '',
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'waiting' | 'typing' | 'pausing' | 'deleting'>('waiting');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('typing'), startDelay);
    }

    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseAfterType);
      }
    }

    if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase(loop ? 'deleting' : 'pausing');
      }, 0);
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, deleteSpeed);
      } else {
        timeout = setTimeout(() => setPhase('typing'), pauseAfterDelete);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, text, speed, deleteSpeed, pauseAfterType, pauseAfterDelete, startDelay, loop]);

  return (
    <span className={className}>
      {displayed}
      <span
        className="inline-block w-3px ml-1 bg-current animate-pulse"
        style={{ height: '0.9em' }}
      />
    </span>
  );
}