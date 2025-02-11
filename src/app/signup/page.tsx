import Link from "next/link";
import styles from "@/app/page.module.scss";
import { api } from "../../services/api";
import { redirect } from "next/navigation";

export default function Signup() {
  const handleRegister = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      return;
    }

    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
      return;
    }

    redirect("/");
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
          <h1>Crie sua conta</h1>
          <form action={handleRegister}>
            <input
              type="text"
              required
              name="name"
              placeholder="Digite seu nome..."
              className={styles.input}
            />
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

            <button type="submit">Cadastrar</button>
          </form>
          <p className={styles.signup}>
            Já possui uma conta? <Link href="/">Acesse</Link>
          </p>
        </section>
      </div>
    </>
  );
}
