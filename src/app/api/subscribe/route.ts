import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Falta el correo electrónico" },
        { status: 400 }
      );
    }

    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });

    return NextResponse.json({ success: true, data: subscriber }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: "Este correo ya está suscrito" },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Error al suscribirse" },
      { status: 500 }
    );
  }
}
