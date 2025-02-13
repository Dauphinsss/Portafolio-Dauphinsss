import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const visitas = await prisma.visita.findMany();
    return NextResponse.json(visitas);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener las visitas" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const visita = await prisma.visita.create({
      data: {}, // No necesitas pasar la fecha, se genera automáticamente
    });

    return NextResponse.json(visita);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al registrar la visita" },
      { status: 500 }
    );
  }
}
