/**
 * Scattered four-pointed stars: densest at bottom, pillars on left/right,
 * sparse center-top. Colors: vibrant blue (#337AFF), mint green (#33FFB5), faded variants.
 */
const STAR_COLORS = [
  '#337AFF',   /* vibrant blue */
  '#33FFB5',   /* mint / aqua green */
  '#294D99',   /* desaturated medium blue */
  '#299971',   /* desaturated dark green */
]

/* Fixed layout: dense bottom band, left/right pillars, sparse center-top */
const STARS = [
  /* Dense bottom */
  { x: 2, y: 92, s: 2.2, c: 0, opacity: 0.9 }, { x: 8, y: 96, s: 1.5, c: 1, opacity: 0.7 }, { x: 14, y: 88, s: 3, c: 0, opacity: 1 },
  { x: 6, y: 84, s: 1.8, c: 2, opacity: 0.6 }, { x: 18, y: 94, s: 2.5, c: 1, opacity: 0.85 }, { x: 24, y: 90, s: 1.2, c: 0, opacity: 0.5 },
  { x: 30, y: 96, s: 2.8, c: 3, opacity: 0.75 }, { x: 36, y: 86, s: 1.6, c: 1, opacity: 0.9 }, { x: 42, y: 92, s: 1.4, c: 2, opacity: 0.6 },
  { x: 58, y: 94, s: 2, c: 0, opacity: 0.8 }, { x: 64, y: 88, s: 2.6, c: 1, opacity: 0.95 }, { x: 70, y: 96, s: 1.3, c: 3, opacity: 0.65 },
  { x: 76, y: 90, s: 2.2, c: 0, opacity: 0.85 }, { x: 82, y: 94, s: 1.7, c: 1, opacity: 0.7 }, { x: 88, y: 86, s: 3.2, c: 2, opacity: 0.55 },
  { x: 94, y: 92, s: 1.5, c: 0, opacity: 0.9 }, { x: 12, y: 82, s: 2, c: 2, opacity: 0.5 }, { x: 72, y: 82, s: 1.8, c: 3, opacity: 0.6 },
  { x: 20, y: 98, s: 1.2, c: 1, opacity: 0.7 }, { x: 80, y: 98, s: 1.4, c: 0, opacity: 0.8 }, { x: 4, y: 78, s: 2.4, c: 0, opacity: 0.65 },
  { x: 96, y: 78, s: 2.1, c: 1, opacity: 0.55 }, { x: 28, y: 84, s: 1.6, c: 3, opacity: 0.75 }, { x: 68, y: 84, s: 1.9, c: 2, opacity: 0.7 },
  /* Left pillar */
  { x: 5, y: 72, s: 2.2, c: 0, opacity: 0.8 }, { x: 12, y: 68, s: 1.4, c: 1, opacity: 0.6 }, { x: 8, y: 58, s: 2.8, c: 2, opacity: 0.5 },
  { x: 18, y: 62, s: 1.6, c: 3, opacity: 0.75 }, { x: 4, y: 48, s: 1.8, c: 0, opacity: 0.55 }, { x: 22, y: 52, s: 2.4, c: 1, opacity: 0.65 },
  { x: 14, y: 42, s: 1.2, c: 2, opacity: 0.45 }, { x: 28, y: 65, s: 2, c: 0, opacity: 0.7 }, { x: 32, y: 55, s: 1.5, c: 1, opacity: 0.5 },
  { x: 26, y: 78, s: 2.6, c: 3, opacity: 0.6 }, { x: 36, y: 72, s: 1.3, c: 0, opacity: 0.55 }, { x: 10, y: 38, s: 1.7, c: 2, opacity: 0.4 },
  { x: 30, y: 45, s: 2.2, c: 1, opacity: 0.5 }, { x: 38, y: 62, s: 1.4, c: 0, opacity: 0.6 },
  /* Right pillar */
  { x: 95, y: 72, s: 2.2, c: 1, opacity: 0.8 }, { x: 88, y: 68, s: 1.4, c: 0, opacity: 0.6 }, { x: 92, y: 58, s: 2.8, c: 3, opacity: 0.5 },
  { x: 82, y: 62, s: 1.6, c: 2, opacity: 0.75 }, { x: 96, y: 48, s: 1.8, c: 1, opacity: 0.55 }, { x: 78, y: 52, s: 2.4, c: 0, opacity: 0.65 },
  { x: 86, y: 42, s: 1.2, c: 3, opacity: 0.45 }, { x: 72, y: 65, s: 2, c: 1, opacity: 0.7 }, { x: 68, y: 55, s: 1.5, c: 0, opacity: 0.5 },
  { x: 74, y: 78, s: 2.6, c: 2, opacity: 0.6 }, { x: 64, y: 72, s: 1.3, c: 1, opacity: 0.55 }, { x: 90, y: 38, s: 1.7, c: 0, opacity: 0.4 },
  { x: 70, y: 45, s: 2.2, c: 3, opacity: 0.5 }, { x: 62, y: 62, s: 1.4, c: 1, opacity: 0.6 },
  /* Sparse center-top */
  { x: 48, y: 28, s: 1.2, c: 0, opacity: 0.4 }, { x: 52, y: 35, s: 1.5, c: 1, opacity: 0.35 }, { x: 44, y: 42, s: 1, c: 2, opacity: 0.5 },
  { x: 56, y: 22, s: 1.3, c: 3, opacity: 0.3 }, { x: 50, y: 48, s: 1.8, c: 0, opacity: 0.45 }, { x: 40, y: 18, s: 1.1, c: 1, opacity: 0.4 },
  { x: 60, y: 18, s: 1.1, c: 2, opacity: 0.4 },
]

function Star({ x, y, size, color, opacity }) {
  const s = size
  return (
    <polygon
      points={`${x},${y - s} ${x + s * 0.6},${y} ${x},${y + s} ${x - s * 0.6},${y}`}
      fill={color}
      fillOpacity={opacity}
    />
  )
}

export default function StarsBackground() {
  return (
    <svg
      className="stars-layer"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {STARS.map((star, i) => (
        <Star
          key={i}
          x={star.x}
          y={star.y}
          size={star.s}
          color={STAR_COLORS[star.c]}
          opacity={star.opacity}
        />
      ))}
    </svg>
  )
}
