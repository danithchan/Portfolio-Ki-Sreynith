
const faces = [
  "rotateY(0deg)",
  "rotateY(90deg)",
  "rotateY(180deg)",
  "rotateY(-90deg)",
  "rotateX(90deg)",
  "rotateX(-90deg)",
];

export default function GlassCube({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute perspective-700px ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="animate-cube relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {faces.map((rot) => (
          <div
            key={rot}
            className="
              absolute inset-0
              border border-white/60
              bg-white/10
              shadow-[inset_0_0_14px_rgba(255,255,255,0.35),0_0_12px_rgba(255,255,255,0.12)]
              backdrop-blur-[2px]
            "
            style={{
              transform: `${rot} translateZ(${size / 2}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
