/**
 * Star Disposal Services logo, rebuilt as SVG from the artwork the owner
 * supplied: navy star on gold, "STAR" in red with a navy outline, "Since 1996"
 * in italic serif, "DISPOSAL SERVICES" across the bottom.
 *
 * `variant="mark"` renders the star only, for tight spots and square slots.
 * The favicon files in /public are generated from that same star.
 *
 * Text is real SVG <text>, so it depends on the viewer having a heavy sans
 * (Arial Black / Helvetica). If the owner supplies the original vector file,
 * drop it in and swap this component for an <Image> — see the README.
 */

const NAVY = "#1B2545";
const RED = "#D0212F";
const GOLD = "#E9AE1B";

/** Five-point star, upright, drawn within a 0–200 box. */
const STAR_POINTS =
  "100,6 124.7,74.1 197.6,75.4 139.1,118.6 160.9,187.6 100,145.8 39.1,187.6 60.9,118.6 2.4,75.4 75.3,74.1";

export default function Logo({
  className = "",
  variant = "full",
  background = true,
}: {
  className?: string;
  /**
   * "full"    the landscape lockup with "Since 1996" — desktop
   * "compact" star + STAR + DISPOSAL SERVICES, no "Since 1996" — phones,
   *           where the full lockup's third tier renders around 7px
   * "mark"    the star alone, for square slots
   */
  variant?: "full" | "compact" | "mark";
  /** Draw the gold panel behind the logo. */
  background?: boolean;
}) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        role="img"
        aria-label="Star Disposal Services"
      >
        {background && <rect width="200" height="200" fill={GOLD} />}
        <polygon points={STAR_POINTS} fill={background ? NAVY : "#FFFFFF"} />
      </svg>
    );
  }

  if (variant === "compact") {
    // Shorter and wider than the full lockup, so the wordmark stays legible at
    // header height on a phone. Drops "Since 1996" to buy that room.
    return (
      <svg
        viewBox="0 0 340 200"
        className={className}
        role="img"
        aria-label="Star Disposal Services"
      >
        {background && <rect width="340" height="200" fill={GOLD} />}
        <g transform="translate(10 16) scale(0.72)">
          <polygon points={STAR_POINTS} fill={NAVY} />
        </g>
        <g transform="skewX(-11)">
          <text
            x="62"
            y="128"
            textLength="250"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontWeight="900"
            fontSize="108"
            fill={RED}
            stroke={NAVY}
            strokeWidth="8"
            strokeLinejoin="round"
            paintOrder="stroke"
          >
            STAR
          </text>
        </g>
        <text
          x="14"
          y="186"
          textLength="312"
          lengthAdjust="spacingAndGlyphs"
          fontFamily="'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="36"
          fill={NAVY}
        >
          DISPOSAL SERVICES
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 500 300"
      className={className}
      role="img"
      aria-label="Star Disposal Services — since 1996"
    >
      {background && <rect width="500" height="300" fill={GOLD} />}

      {/* Star, left of the wordmark */}
      <g transform="translate(28 26) scale(0.83)">
        <polygon points={STAR_POINTS} fill={NAVY} />
      </g>

      {/*
        textLength pins each line's width, so the lockup keeps its proportions
        even when the viewer lacks Arial Black and falls back to another face.
      */}

      {/* STAR — red with a navy outline, slanted to match the artwork */}
      <g transform="skewX(-11)">
        <text
          x="80"
          y="178"
          textLength="390"
          lengthAdjust="spacingAndGlyphs"
          fontFamily="'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="150"
          fill={RED}
          stroke={NAVY}
          strokeWidth="10"
          strokeLinejoin="round"
          paintOrder="stroke"
        >
          STAR
        </text>
      </g>

      {/* Since 1996 */}
      <text
        x="318"
        y="232"
        textLength="158"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontStyle="italic"
        fontSize="44"
        fill={NAVY}
      >
        Since 1996
      </text>

      {/* DISPOSAL SERVICES */}
      <text
        x="28"
        y="288"
        textLength="444"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="900"
        fontSize="42"
        fill={NAVY}
      >
        DISPOSAL SERVICES
      </text>
    </svg>
  );
}
