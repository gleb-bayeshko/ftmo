import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req, { params }) {
  const { id } = params;
  const imagePath = path.join(process.cwd(), "uploads", `${id}.png`);

  if (fs.existsSync(imagePath)) {
    const imageBuffer = fs.readFileSync(imagePath);
    return new NextResponse(imageBuffer, {
      headers: { "Content-Type": "image/png" },
    });
  } else {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }
}
