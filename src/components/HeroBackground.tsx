"use client";

import { useEffect, useRef } from "react";

/**
 * Modern fluid aurora effect — organic gradient blobs that drift and
 * react to the cursor. No particles. Premium, 2025-era aesthetic.
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let w = 0;
    let h = 0;

    // Smooth mouse with lerp
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const parent = canvas.parentElement;
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      mouse.active = true;
    };
    const onMouseLeave = () => { mouse.active = false; };
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.touches[0].clientX - rect.left;
      mouse.ty = e.touches[0].clientY - rect.top;
      mouse.active = true;
    };
    const onTouchEnd = () => { mouse.active = false; };

    if (parent) {
      parent.addEventListener("mousemove", onMouseMove);
      parent.addEventListener("mouseleave", onMouseLeave);
      parent.addEventListener("touchmove", onTouchMove, { passive: true });
      parent.addEventListener("touchend", onTouchEnd);
    }

    // ── Fluid Blobs ──
    interface Blob {
      x: number; y: number;
      vx: number; vy: number;
      radius: number;
      color: [number, number, number];
      phase: number;
      speed: number;
    }

    const blobs: Blob[] = [
      { x: 0.2, y: 0.3, vx: 0.3, vy: 0.2, radius: 0.35, color: [72, 135, 199], phase: 0, speed: 0.4 },
      { x: 0.7, y: 0.6, vx: -0.2, vy: 0.3, radius: 0.3, color: [40, 80, 140], phase: 1.5, speed: 0.3 },
      { x: 0.5, y: 0.2, vx: 0.15, vy: -0.25, radius: 0.28, color: [72, 135, 199], phase: 3.0, speed: 0.35 },
      { x: 0.3, y: 0.8, vx: -0.3, vy: -0.1, radius: 0.32, color: [28, 24, 46], phase: 4.5, speed: 0.25 },
      { x: 0.8, y: 0.3, vx: 0.1, vy: 0.35, radius: 0.25, color: [50, 100, 170], phase: 2.0, speed: 0.45 },
    ];

    let time = 0;

    const animate = () => {
      time += 0.004;

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.tx - mouse.x) * 0.08;
        mouse.y += (mouse.ty - mouse.y) * 0.08;
      } else {
        mouse.x += (-9999 - mouse.x) * 0.02;
        mouse.y += (-9999 - mouse.y) * 0.02;
      }

      ctx.clearRect(0, 0, w, h);

      // ── Draw fluid gradient blobs ──
      ctx.globalCompositeOperation = "screen";

      for (const blob of blobs) {
        // Organic drift path using sin/cos
        const bx = w * (blob.x + Math.sin(time * blob.speed + blob.phase) * 0.15 + Math.cos(time * blob.speed * 0.7 + blob.phase * 1.3) * 0.08);
        const by = h * (blob.y + Math.cos(time * blob.speed * 0.8 + blob.phase) * 0.12 + Math.sin(time * blob.speed * 0.5 + blob.phase * 0.7) * 0.06);
        let r = Math.max(w, h) * blob.radius;

        // Breathe — radius oscillates slightly
        r *= 1 + Math.sin(time * 1.2 + blob.phase) * 0.08;

        // React to mouse — attract slightly
        let drawX = bx;
        let drawY = by;
        if (mouse.active && mouse.x > 0) {
          const dx = mouse.x - bx;
          const dy = mouse.y - by;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pull = Math.max(0, 1 - dist / (r * 2)) * 0.15;
          drawX += dx * pull;
          drawY += dy * pull;
          // Grow slightly near cursor
          r *= 1 + pull * 0.3;
        }

        const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, r);
        const [cr, cg, cb] = blob.color;
        grad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, 0.12)`);
        grad.addColorStop(0.4, `rgba(${cr}, ${cg}, ${cb}, 0.06)`);
        grad.addColorStop(0.7, `rgba(${cr}, ${cg}, ${cb}, 0.02)`);
        grad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Cursor spotlight ──
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        ctx.globalCompositeOperation = "screen";

        // Outer soft glow
        const spotR = Math.min(w, h) * 0.28;
        const spot = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, spotR);
        spot.addColorStop(0, "rgba(72, 135, 199, 0.10)");
        spot.addColorStop(0.3, "rgba(72, 135, 199, 0.05)");
        spot.addColorStop(0.6, "rgba(40, 60, 120, 0.02)");
        spot.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = spot;
        ctx.fillRect(0, 0, w, h);

        // Inner bright core
        const coreR = 60;
        const core = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, coreR);
        core.addColorStop(0, "rgba(120, 180, 230, 0.08)");
        core.addColorStop(0.5, "rgba(72, 135, 199, 0.03)");
        core.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = core;
        ctx.fillRect(0, 0, w, h);
      }

      // ── Subtle noise grain overlay (modern texture) ──
      ctx.globalCompositeOperation = "source-over";

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", onMouseMove);
        parent.removeEventListener("mouseleave", onMouseLeave);
        parent.removeEventListener("touchmove", onTouchMove);
        parent.removeEventListener("touchend", onTouchEnd);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[2]"
    />
  );
}
