import { ImageResponse } from "next/og";
import { presidents } from "../presidents-data";

export const alt = "Presidential Pastime — Presidential Baseball History";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const president = presidents.find((p) => p.slug === slug);

  const name = president?.name ?? "Presidential Pastime";

  // Always use the exact portrait displayed on the president's profile.
  const selected = president?.portrait;

  const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://presidentialpastime.com";

  const imageUrl = selected
    ? new URL(selected, base).toString()
    : new URL("/opengraph-image.jpg", base).toString();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#102c44",
          color: "#fff8e8",
          padding: 42,
          flexDirection: "column",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#d6b46f",
            fontSize: 21,
            letterSpacing: 4,
            borderBottom: "2px solid #b59a62",
            paddingBottom: 22,
          }}
        >
          PRESIDENTIAL PASTIME
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            gap: 42,
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 490,
              height: 390,
              border: "5px solid #b59a62",
              backgroundColor: "#eee7d7",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={imageUrl}
              alt=""
              width={490}
              height={390}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              gap: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "#d6b46f",
                letterSpacing: 2,
              }}
            >
              THE BASEBALL PRESIDENTS
            </div>

            <div
              style={{
                display: "flex",
                fontSize: name.length > 22 ? 48 : 60,
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              {name}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 25,
                color: "#e2cfaa",
                lineHeight: 1.3,
              }}
            >
              {president?.baseballEra ?? "Presidential Baseball History"}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "4px solid #a4282d",
            paddingTop: 16,
            justifyContent: "center",
            color: "#d6b46f",
            fontSize: 19,
            letterSpacing: 3,
          }}
        >
          PRESIDENTIALPASTIME.COM
        </div>
      </div>
    ),
    size
  );
}
