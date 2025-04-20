import { NextRequest, NextResponse } from "next/server";
import { getCookieServer } from "./lib/cookieServer";
import { api } from "./services/api";

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname === "/") {
    return NextResponse.next();
  }

  const token = await getCookieServer();

  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      console.warn("Redirecionando - token ausente.");
      return NextResponse.redirect(new URL("/", req.url));
    }

    const isValid = await validateToken(token);

    if (!isValid) {
      console.warn("Redirecionando - token inválido.");
      return NextResponse.redirect(new URL("/", req.url));
    }

    console.log("Acesso autorizado.");
    return NextResponse.next();
  }

  return NextResponse.next(); // Default para outras rotas
};

async function validateToken(token: string) {
  if (!token) {
    console.error("Token ausente ou inválido.");
    return false;
  }

  try {
    const response = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Token validado com sucesso:", response.data);
    return true;
  } catch (error: any) {
    console.error(
      "Erro ao validar token:",
      error.response?.status,
      error.response?.data
    );
    return false;
  }
}
