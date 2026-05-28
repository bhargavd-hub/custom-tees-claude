"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Free Express Shipping on orders $120!",
  "24-72 Hour Turnaround — No Rush Fees!",
  "No Setup Fees & No Minimum Orders!",
];

export function TopBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const t = setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(t);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-10 bg-wine">
      <div className="container-wide flex h-full items-center justify-center text-[15px] text-white">
        <span
          className="transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {MESSAGES[idx]}
        </span>
      </div>
    </div>
  );
}
