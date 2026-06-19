// CircuitBackground.tsx
// Drop this in src/components/ and use as a fixed full-page backdrop.
// Usage: <CircuitBackground /> placed once near the root of your About page,
// with your content rendered in a sibling element using position: relative; z-index: 1.

export default function CircuitBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#050608',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00eeff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#00eeff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a2540" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0a2540" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fade-right" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
          </linearGradient>
          <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="#00eeff" />
          </pattern>
        </defs>

        <rect width="1920" height="1080" fill="#050608" />
        <rect width="1920" height="1080" fill="url(#dots)" opacity="0.06" />

        <circle cx="1500" cy="180" r="560" fill="url(#glow1)" />
        <circle cx="150" cy="950" r="650" fill="url(#glow1)" />
        <circle cx="960" cy="540" r="700" fill="url(#glow2)" />

        <g fill="none" stroke="#00eeff" strokeWidth="1.5" strokeLinecap="round">
          <g opacity="0.6">
            <path d="M1920 120 H1680 V220 H1500 V340" />
            <path d="M1920 260 H1760 V60" />
            <path d="M1840 340 V480 H1700" />
            <path d="M1500 340 H1380 V440" />
            <path d="M1380 440 V560 H1240" />
            <path d="M1620 0 V100 H1900" />
            <circle cx="1500" cy="340" r="4" fill="#00eeff" stroke="none" />
            <circle cx="1680" cy="220" r="4" fill="#00eeff" stroke="none" />
            <circle cx="1760" cy="60" r="3" fill="#00eeff" stroke="none" />
            <circle cx="1840" cy="480" r="4" fill="#00eeff" stroke="none" />
            <circle cx="1380" cy="440" r="3" fill="#00eeff" stroke="none" />
            <circle cx="1700" cy="480" r="3" fill="#00eeff" stroke="none" />
            <circle cx="1240" cy="560" r="3" fill="#00eeff" stroke="none" />
            <circle cx="1620" cy="100" r="3" fill="#00eeff" stroke="none" />
          </g>

          <g opacity="0.55">
            <path d="M0 860 H220 V980 H420 V1080" />
            <path d="M0 980 H120 V1080" />
            <path d="M220 860 V740 H380" />
            <path d="M420 980 H600 V900 H760" />
            <path d="M380 740 V620 H560" />
            <path d="M0 700 H160 V580" />
            <circle cx="220" cy="860" r="4" fill="#00eeff" stroke="none" />
            <circle cx="420" cy="980" r="4" fill="#00eeff" stroke="none" />
            <circle cx="380" cy="740" r="3" fill="#00eeff" stroke="none" />
            <circle cx="600" cy="900" r="3" fill="#00eeff" stroke="none" />
            <circle cx="120" cy="1080" r="3" fill="#00eeff" stroke="none" />
            <circle cx="760" cy="900" r="3" fill="#00eeff" stroke="none" />
            <circle cx="560" cy="620" r="3" fill="#00eeff" stroke="none" />
            <circle cx="160" cy="580" r="3" fill="#00eeff" stroke="none" />
          </g>

          <g opacity="0.22" strokeWidth="1">
            <path d="M0 200 H400 V340 H760" />
            <path d="M1920 600 H1500 V740 H1180 V900" />
            <path d="M600 0 V160 H980 V40" />
            <path d="M1180 1080 V880 H1440" />
            <path d="M900 1080 V940 H1060" />
            <path d="M1920 820 H1700 V960" />
          </g>

          <g opacity="0.35">
            <circle cx="760" cy="340" r="2.5" fill="#00eeff" stroke="none" />
            <circle cx="980" cy="40" r="2.5" fill="#00eeff" stroke="none" />
            <circle cx="1180" cy="900" r="2.5" fill="#00eeff" stroke="none" />
            <circle cx="1440" cy="880" r="2.5" fill="#00eeff" stroke="none" />
            <circle cx="400" cy="200" r="2.5" fill="#00eeff" stroke="none" />
            <circle cx="1060" cy="940" r="2.5" fill="#00eeff" stroke="none" />
            <circle cx="1700" cy="960" r="2.5" fill="#00eeff" stroke="none" />
          </g>
        </g>

        <rect width="1920" height="1080" fill="url(#fade-right)" />
        <rect width="1920" height="1080" fill="#000000" opacity="0.1" />
      </svg>
    </div>
  );
}
