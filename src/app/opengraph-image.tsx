import { ImageResponse } from "next/og";

export const alt =
  "Team 7 Sports Management — Revolutionizing Sports. Redefining Leagues.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B2A5E 0%, #0a1128 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #D8232A, #f03038)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: 4, color: "#ffffff" }}>
            TEAM 7
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: 8, color: "#D8232A", marginTop: -8 }}>
            SPORTS
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: "#cbdccf", fontWeight: 500, letterSpacing: 1 }}>
            Revolutionizing Sports. Redefining Leagues.
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, display: "flex", fontSize: 20, color: "#7684aa", letterSpacing: 2 }}>
          team7sports.com
        </div>
      </div>
    ),
    { ...size }
  );
}
