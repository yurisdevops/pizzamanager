import styles from "./page.module.scss";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  const handlelogin = async (formData: FormData) => {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      if (!response.data.token) {
        return;
      }

      const expressTime = (60 * 60 * 24 * 30) & 1000;

      const cookieStorage = await cookies();

      cookieStorage.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
      });
    } catch (error) {
      console.log(error);
      return;
    }

    redirect("/dashboard");
  };

  return (
    <>
      <div className={styles.containerCenter}>
        <div className={styles.logo}>
          <p>
            PIZZA<span>MANAGER</span>
          </p>
        </div>

        <section className={styles.login}>
          <form action={handlelogin}>
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="*********"
              className={styles.input}
            />

            <button type="submit">Acessar</button>
          </form>
          <p className={styles.signup}>
            Ainda não possui uma conta? <Link href="/signup">Cadastre-se</Link>
          </p>
        </section>
      </div>
    </>
  );
}
