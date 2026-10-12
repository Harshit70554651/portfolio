import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    // Hide the native cursor everywhere (including links/buttons)
    const style = document.createElement("style");
    style.innerHTML = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let scale = 1;
    let targetScale = 1;
    let pressed = false;
    let hovering = false;
    let rafId;

    const updateTargetScale = () => {
      if (pressed) targetScale = 0.8;
      else if (hovering) targetScale = 2.2;
      else targetScale = 1;
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      hovering = !!e.target.closest("a, button, input, textarea, [data-cursor='hover']");
      updateTargetScale();
    };

    const onDown = () => {
      pressed = true;
      updateTargetScale();
    };
    const onUp = () => {
      pressed = false;
      updateTargetScale();
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const animate = () => {
      // Smooth follow (lerp)
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      scale += (targetScale - scale) * 0.15;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
     
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-9999 w-2 h-2 rounded-full bg-white pointer-events-none mix-blend-difference opacity-0"
      />
   
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-9999 w-9 h-9 rounded-full border border-white pointer-events-none mix-blend-difference opacity-0"
      />
    </>
  );
};

export default CustomCursor;