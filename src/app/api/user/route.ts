import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const user = await currentUser(); // Obtém mais detalhes do usuário

  return NextResponse.json({
    userId,
    name: user?.firstName || "Usuário", // Pega o primeiro nome
  });
}
