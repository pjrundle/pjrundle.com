import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  opacity: number;
  vx: number;
  vy: number;
  twinkleSpeed: number;
  twinklePhase: number;
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const makeStar = (width: number, height: number): Star => {
  const isBright = Math.random() < 0.22;
  return {
    x: rand(0, width),
    y: rand(0, height),
    radius: isBright ? rand(0.6, 1.2) : rand(0.2, 0.7),
    baseOpacity: isBright ? rand(0.85, 1.0) : rand(0.1, 0.55),
    opacity: 0,
    vx: rand(-0.3, 0.3),
    vy: rand(-0.12, 0.12),
    twinkleSpeed: rand(0.004, 0.014),
    twinklePhase: rand(0, Math.PI * 2),
  };
};

export const Starfield = ({
  count = 600,
  className,
  style,
}: {
  count?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let rafId: number;
    let isVisible = true;
    const stars: Star[] = [];

    // Pre-render a glow sprite once — avoids shadowBlur every frame
    const SPRITE_SIZE = 2;
    const sprite = document.createElement("canvas");
    sprite.width = SPRITE_SIZE;
    sprite.height = SPRITE_SIZE;
    const sCtx = sprite.getContext("2d")!;
    const mid = SPRITE_SIZE / 2;
    const grad = sCtx.createRadialGradient(mid, mid, 0, mid, mid, mid);
    grad.addColorStop(0, "rgba(220, 235, 255, 1)");
    grad.addColorStop(0.4, "rgba(200, 220, 255, 0.4)");
    grad.addColorStop(1, "rgba(200, 220, 255, 0)");
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);

    const init = (width: number, height: number) => {
      w = width;
      h = height;
      canvas.width = w;
      canvas.height = h;
      stars.length = 0;
      for (let i = 0; i < count; i++) {
        const s = makeStar(w, h);
        s.opacity = s.baseOpacity;
        stars.push(s);
      }
    };

    const tick = () => {
      if (!isVisible) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed;
        s.opacity = s.baseOpacity * (0.55 + 0.45 * Math.sin(s.twinklePhase));

        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -4) s.x = w + 4;
        if (s.x > w + 4) s.x = -4;
        if (s.y < -4) s.y = h + 4;
        if (s.y > h + 4) s.y = -4;

        // Draw glow sprite scaled to star radius
        const glowSize = s.radius * 8;
        ctx.globalAlpha = s.opacity * 0.3;
        ctx.drawImage(
          sprite,
          s.x - glowSize / 2,
          s.y - glowSize / 2,
          glowSize,
          glowSize,
        );

        // Draw core dot
        ctx.globalAlpha = s.opacity;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      init(width, height);
    });

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 },
    );

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
    />
  );
};
