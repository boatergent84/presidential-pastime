import { ImageResponse } from "next/og";

export const alt =
  "The Presidential Signature Collection — George H. W. Bush signed baseball";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imageUrl =
    "https://presidentialpastime.com/heritage/presidential-signatures/george-h-w-bush.png";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#102c44",
          color: "#fff8e8",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "12px solid #b89a61",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{
          display: "flex",
          fontSize: 20,
          letterSpacing: 4,
          color: "#d7bb83",
          marginBottom: 20,
        }}>
          PRESIDENTIAL PASTIME
        </div>

        <div style={{
          display: "flex",
          width: 270,
          height: 270,
          borderRadius: 999,
          border: "6px solid #b89a61",
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}>
          <img
            src={imageUrl}
            alt=""
            width={255}
            height={255}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div style={{
          display: "flex",
          marginTop: 24,
          fontSize: 44,
          fontWeight: 700,
          textAlign: "center",
        }}>
          The Presidential Signature Collection
        </div>

        <div style={{
          display: "flex",
          marginTop: 14,
          fontSize: 24,
          color: "#d7bb83",
          fontStyle: "italic",
        }}>
          A History of America, Written on Baseballs
        </div>

        <div style={{
          display: "flex",
          marginTop: 20,
          fontSize: 17,
          letterSpacing: 3,
          color: "#d7bb83",
        }}>
          PRESIDENTIALPASTIME.COM
        </div>
      </div>
    ),
    size
  );
}
