import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for celestial technical grid
    const numPoints = 38;
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
        z: (Math.random() - 0.5) * 500,
        radius: Math.random() * 1.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.002,
        speedY: (Math.random() - 0.5) * 0.002,
      });
    }

    let angleX = 0.2;
    let angleY = 0.3;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = x * 0.0005;
      mouseY = y * 0.0005;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const fov = 340;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.0025 + mouseX;
      angleX += 0.001 + mouseY;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width * 0.65;
      const centerY = height * 0.48;

      // Draw primary orbital rings (celestial systems vibe)
      const rings = [
        { radius: 210, tilt: 0.45, alpha: 0.18, color: "163, 230, 53" },
        { radius: 280, tilt: -0.32, alpha: 0.12, color: "212, 212, 216" },
        { radius: 340, tilt: 0.75, alpha: 0.08, color: "147, 197, 253" },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angleY * 0.4 + ring.tilt);
        ctx.scale(1, ring.tilt);
        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ring.color}, ${ring.alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.restore();
      });

      // Project 3D points
      const projected = [];
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 3D rotation Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // 3D rotation X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        const distance = fov / (fov + z2 + 400);
        const x2D = x1 * distance + centerX;
        const y2D = y1 * distance + centerY;
        const alpha = Math.max(0.1, Math.min(0.85, (z2 + 250) / 500));

        projected.push({ x: x2D, y: y2D, alpha, radius: p.radius * distance * 1.8 });
      }

      // Draw connection lines between nearby points
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.15 * projected[i].alpha;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(212, 212, 216, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 244, 245, ${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="block w-full h-full opacity-70" />
      {/* Hero ambient nebula gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 55% at 75% 45%, rgba(92, 48, 150, 0.18), transparent 70%),
            radial-gradient(ellipse 40% 40% at 85% 60%, rgba(28, 102, 156, 0.14), transparent 75%),
            radial-gradient(ellipse 65% 75% at 50% 50%, transparent 35%, rgba(9, 9, 11, 0.5) 75%, #09090b 100%)
          `,
        }}
      />
    </div>
  );
}
