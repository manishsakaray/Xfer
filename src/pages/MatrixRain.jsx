import React, { useRef, useEffect, useState } from "react";
//import { Pane } from "https://esm.sh/tweakpane@4.0.3";

const MatrixRain = ({ targetId }) => {
  const canvasRef = useRef(null);
  const [state, setState] = useState({
    fps: 30,
    color: "#ce261a",
    charset: "01",
    size: 25,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    let w, h, p;
    const resize = () => {
      const rect = targetElement.getBoundingClientRect();
      w = canvas.width = targetElement.clientWidth; //rect.width;
      h = canvas.height = targetElement.clientHeight; // rect.height;
      p = Array(Math.ceil(w / state.size)).fill(0);
    };

    window.addEventListener("resize", resize);
    resize();

    const random = (items) => items[Math.floor(Math.random() * items.length)];

    const draw = () => {
      //ctx.fillStyle = "rgba(0,0,0,.05)";
      ctx.fillStyle = "rgba(247,65,51,0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = state.color;
      ctx.font = `${state.size}px monospace`;

      for (let i = 0; i < p.length; i++) {
        let v = p[i];
        ctx.fillText(random(state.charset), i * state.size, v);
        p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
      }
    };

    let interval = setInterval(draw, 1000 / state.fps);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [state, targetId]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "auto",
        left: "auto",
        pointerEvents: "none",
        borderRadius: "25px",
        zIndex: "0",
      }}
    />
  );
};

export default MatrixRain;
