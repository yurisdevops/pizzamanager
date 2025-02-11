import { api } from "@/services/api";
import { Button } from "../components/button";
import styles from "./styles.module.scss";
import { getCookieServer } from "@/lib/cookieServer";
import { redirect } from "next/navigation";

export default function Category() {
  async function handleRegisterCategory(formData: FormData) {
    "use server";
    const name = formData.get("name");

    if (!name) return;

    const data = {
      name,
    };
    const token = await getCookieServer();

    try {
      const category = await api.post("/category", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(category);
    } catch (error) {
      console.log(error);
      return;
    }

    redirect("/dashboard");
  }
  return (
    <main className={styles.container}>
      <h1>Nova Categoria</h1>
      <form action={handleRegisterCategory} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nome da categoria, ex: Pizzas"
          required
          className={styles.input}
        />
        <Button name="Cadastrar" />
      </form>
    </main>
  );
}
