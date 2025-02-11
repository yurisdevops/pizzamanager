import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.containerCenter}>
        <div className={styles.logo}>
          <p>
            PIZZA<span>MANAGER</span>
          </p>
        </div>

        <section className={styles.login}>
          <form>
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
