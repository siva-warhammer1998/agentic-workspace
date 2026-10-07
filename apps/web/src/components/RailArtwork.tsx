export const BrandMark = () => (
  <svg
    className="rail-mark"
    viewBox="0 0 64 64"
    width="40"
    height="40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M27 16H13v16h14v16H13M35 16l9 32 9-32" />
    <g className="rail-mark-nodes">
      <circle cx="13" cy="16" r="2.5" />
      <circle cx="27" cy="32" r="2.5" />
      <circle cx="53" cy="16" r="2.5" />
    </g>
  </svg>
);

export const RailTopology = () => (
  <svg
    className="rail-topology"
    viewBox="0 0 200 720"
    width="200"
    height="720"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M20 36h96v110h54v122H60v126h68v148H28v116M20 36v232h40M128 394h42V268M28 542V394h32M128 542v116h42" />
    <circle cx="20" cy="36" r="4" />
    <circle cx="116" cy="146" r="4" />
    <circle cx="170" cy="268" r="4" />
    <circle cx="60" cy="268" r="4" />
    <circle cx="60" cy="394" r="4" />
    <circle cx="128" cy="542" r="4" />
    <circle cx="28" cy="658" r="4" />
    <circle cx="170" cy="658" r="4" />
  </svg>
);
