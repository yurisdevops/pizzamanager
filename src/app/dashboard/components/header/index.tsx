"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { LogOutIcon } from "lucide-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Header() {
  const router = useRouter();

  async function handleLogout() {
    deleteCookie("session", { path: "/" });
    toast.success("Logout realizado com sucesso!");
    router.replace("/");
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href={"/dashboard"} className={styles.logo}>
          <p>
            PIZZA<span>MANAGER</span>
          </p>
        </Link>
        <nav>
          <Link href={"/dashboard/category"}>Nova Categoria</Link>
          <Link href={"/dashboard/product"}>Produto</Link>
          <form action={handleLogout}>
            <button type="submit">
              <LogOutIcon size={24} color="#fff" />{" "}
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
