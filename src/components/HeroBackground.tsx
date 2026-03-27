"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      life: number;
      maxLife: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.2 - 0.1;
        this.maxLife = Math.random() * 300 + 200;
        this.life = Math.random() * this.maxLife;
        this.opacity = 0;
      }

      update(w: number, h: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;

        if (this.life < 60) {
          this.opacity = this.life / 60;
        } else if (this.life > this.maxLife - 60) {
          this.opacity = (this.maxLife - this.life) / 60;
        } else {
          this.opacity = 1;
        }

        if (this.life >= this.maxLife || this.x < -10 || this.x > w + 10) {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
          this.life = 0;
          this.opacity = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(72, 135, 199, ${this.opacity * 0.35})`;
        ctx.fill();
      }
    }

    // Initialize particles
    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Wave parameters
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;

      // Draw subtle wave lines
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(72, 135, 199, ${0.04 + w * 0.015})`;
        ctx.lineWidth = 1;

        for (let x = 0; x < canvas.width; x += 3) {
          const y =
            canvas.height * (0.55 + w * 0.12) +
            Math.sin(x * 0.003 + time + w * 1.5) * 25 +
            Math.sin(x * 0.007 + time * 1.3) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(72, 135, 199, ${(1 - dist / 120) * 0.08 * particles[i].opacity * particles[j].opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
