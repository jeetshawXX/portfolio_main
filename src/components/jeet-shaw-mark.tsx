export function JeetShawMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 256"
      {...props}
    >
      <rect width="512" height="256" rx="48" fill="#0f172a" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={800}
        fontSize={120}
        fill="#f8fafc"
      >
        JS
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256"><rect width="512" height="256" rx="48" fill="#0f172a" /><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Inter, system-ui, sans-serif" font-weight="800" font-size="120" fill="${color}">JS</text></svg>`;
}
