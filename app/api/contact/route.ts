import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    // Validación de nombre
    if (name.length < 2) {
      return NextResponse.json(
        {
          ok: false,
          error: "Por favor ingresa tu nombre (mínimo 2 caracteres).",
        },
        { status: 400 }
      );
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Por favor ingresa un correo electrónico válido.",
        },
        { status: 400 }
      );
    }

    // Validación de mensaje
    if (message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error: "El mensaje debe tener al menos 10 caracteres.",
        },
        { status: 400 }
      );
    }

    // Variable de entorno protegida (nunca se expone en el cliente)
    const contactRecipient =
      process.env.CONTACT_EMAIL || "contacto@portafolio.dev";

    console.log("Nuevo mensaje recibido:", {
      to: contactRecipient,
      from: `${name} <${email}>`,
      message,
      date: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: true,
        message: "¡Mensaje enviado con éxito! Gracias por contactarme.",
        data: {
          name,
          email,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "No se pudo procesar la solicitud. Verifica el formato JSON.",
      },
      { status: 400 }
    );
  }
}