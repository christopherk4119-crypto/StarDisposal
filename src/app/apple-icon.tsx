import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFD700",
          borderRadius: 22,
        }}
      >
        <svg width="132" height="132" viewBox="0 0 200 200">
          <polygon
            points="100,8 121.16,70.88 187.5,71.57 134.24,111.12 154.08,174.43 100,136 45.92,174.43 65.76,111.12 12.5,71.57 78.84,70.88"
            fill="#1E2A5E"
            stroke="#1E2A5E"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
