import { type Language, UI_COPY } from '../i18n/translations';

interface DisplayBlueprintSvgProps {
  brandLabel: string;
  shelvesCount: number;
  shapeStyle: 'arch' | 'custom-bottle' | 'classic' | 'stepped';
  accentColor: string;
  compact?: boolean;
  lang?: Language;
}

export function DisplayBlueprintSvg({
  brandLabel,
  shelvesCount,
  shapeStyle,
  accentColor,
  compact = false,
  lang = 'fr',
}: DisplayBlueprintSvgProps) {
  const clampedShelves = Math.max(2, Math.min(5, shelvesCount));
  const shelfStartY = 112;
  const shelfAreaHeight = 165;
  const shelfStep = shelfAreaHeight / clampedShelves;

  return (
    <svg
      viewBox="0 0 360 320"
      className={`w-full ${compact ? 'h-56' : 'h-64 sm:h-72'} select-none`}
      role="img"
      aria-label={UI_COPY[lang].blueprint.aria(brandLabel, clampedShelves)}
    >
      <defs>
        <pattern
          id={`grid-${brandLabel.replace(/\s+/g, '-')}`}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(148, 163, 184, 0.16)"
            strokeWidth="0.75"
          />
        </pattern>
        <linearGradient
          id={`standBody-${brandLabel.replace(/\s+/g, '-')}`}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      <rect width="360" height="320" fill="#F8FAFC" />
      <rect
        width="360"
        height="320"
        fill={`url(#grid-${brandLabel.replace(/\s+/g, '-')})`}
      />

      <g stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3">
        <line x1="68" y1="42" x2="68" y2="288" />
        <line x1="100" y1="298" x2="260" y2="298" />
      </g>
      <text
        x="52"
        y="170"
        fill="#64748B"
        fontSize="10"
        fontFamily="IBM Plex Mono, monospace"
        textAnchor="middle"
        transform="rotate(-90 52 170)"
      >
        165 cm
      </text>
      <text
        x="180"
        y="311"
        fill="#64748B"
        fontSize="10"
        fontFamily="IBM Plex Mono, monospace"
        textAnchor="middle"
      >
        55 - 65 cm
      </text>

      <polygon
        points="252,96 276,84 276,276 252,288"
        fill="#334155"
        stroke="#0F172A"
        strokeWidth="1.2"
      />

      {shapeStyle === 'arch' && (
        <path
          d="M 104,96 L 104,54 Q 180,22 252,54 L 252,96 Z"
          fill={accentColor}
          stroke="#0F172A"
          strokeWidth="1.5"
        />
      )}
      {shapeStyle === 'custom-bottle' && (
        <path
          d="M 104,96 L 104,64 L 148,64 L 154,38 Q 180,28 206,38 L 212,64 L 252,64 L 252,96 Z"
          fill={accentColor}
          stroke="#0F172A"
          strokeWidth="1.5"
        />
      )}
      {shapeStyle === 'stepped' && (
        <path
          d="M 104,96 L 104,60 L 136,60 L 136,42 L 220,42 L 220,60 L 252,60 L 252,96 Z"
          fill={accentColor}
          stroke="#0F172A"
          strokeWidth="1.5"
        />
      )}
      {shapeStyle === 'classic' && (
        <rect
          x="104"
          y="46"
          width="148"
          height="50"
          rx="4"
          fill={accentColor}
          stroke="#0F172A"
          strokeWidth="1.5"
        />
      )}

      <text
        x="178"
        y="76"
        fill="#FFFFFF"
        fontSize="13"
        fontWeight="700"
        fontFamily="Plus Jakarta Sans, Cairo, sans-serif"
        textAnchor="middle"
      >
        {brandLabel}
      </text>

      <rect
        x="104"
        y="96"
        width="148"
        height="192"
        fill={`url(#standBody-${brandLabel.replace(/\s+/g, '-')})`}
        stroke="#0F172A"
        strokeWidth="1.5"
      />

      {Array.from({ length: clampedShelves }).map((_, idx) => {
        const y = shelfStartY + idx * shelfStep;
        return (
          <g key={idx}>
            {[0, 1, 2, 3, 4].map((slot) => (
              <rect
                key={slot}
                x={115 + slot * 26}
                y={y - 16}
                width="18"
                height="16"
                rx={shapeStyle === 'custom-bottle' ? '4' : '1.5'}
                fill={slot % 2 === 0 ? accentColor : '#E2E8F0'}
                fillOpacity={slot % 2 === 0 ? 0.85 : 0.92}
              />
            ))}
            <rect
              x="108"
              y={y}
              width="140"
              height="6"
              fill="#F8FAFC"
              stroke="#94A3B8"
              strokeWidth="0.75"
            />
            <rect x="108" y={y + 6} width="140" height="3.5" fill={accentColor} />
          </g>
        );
      })}

      <rect x="104" y="274" width="148" height="14" fill={accentColor} />
      <text
        x="178"
        y="284"
        fill="#FFFFFF"
        fontSize="7.5"
        fontWeight="700"
        fontFamily="IBM Plex Mono, monospace"
        textAnchor="middle"
      >
        WAIL DICO CUSTOM
      </text>
    </svg>
  );
}
