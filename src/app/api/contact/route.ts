import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Guardar en SQLite
    const contact = await prisma.contactRequest.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json({ success: true, data: contact }, { status: 200 });
  } catch (error) {
    console.error("Error saving contact request:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
