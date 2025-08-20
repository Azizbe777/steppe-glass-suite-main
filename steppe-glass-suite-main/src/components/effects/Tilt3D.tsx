import React from 'react';
import { cn } from '@/lib/utils';

export type Tilt3DProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // rotation degrees
  perspective?: number; // px
  scale?: number;
};

export function Tilt3D({
  children,
  className,
  intensity = 12,
  perspective = 800,
  scale = 1.02,
}: Tilt3DProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const frame = React.useRef<number>();

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * intensity * 2;
      const ry = (px - 0.5) * intensity * 2;
      el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    });
  };

  return (
    <div
      ref={ref}
      className={cn('will-change-transform transform-gpu transition-transform duration-200 ease-out', className)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseEnter={handleMove}
      style={{ transform: `perspective(${perspective}px)` }}
    >
      {children}
    </div>
  );
}

export default Tilt3D;
