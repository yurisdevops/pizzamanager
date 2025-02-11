import Link from "next/link";
import styles from "@/app/page.module.scss";

export default function Signup() {
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
          <form>
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
