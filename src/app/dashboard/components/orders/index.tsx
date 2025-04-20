"use client";

import { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { RefreshCw } from "lucide-react";
import { OrderProps } from "@/lib/order.type";

import { OrderContext } from "@/providers/order";
import { ModalOrder } from "../modal";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  orders: OrderProps[];
}

export function Orders({ orders }: Props) {
  const { isOpen, onRequestOpen } = useContext(OrderContext);
  const router = useRouter();

  async function handleDetailOrder(order_id: string) {
    await onRequestOpen(order_id);
  }

  function handleRefresh() {
    router.refresh();
    toast.success("Pedidos atualizados com sucesso!");
  }

  useEffect(() => {
    console.log("O estado de isOpen mudou:", isOpen);
    // Aqui você pode adicionar qualquer lógica que dependa de isOpen.
  }, [isOpen]);

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>
          <button onClick={handleRefresh}>
            <RefreshCw size={24} color="#3fffa3" />
          </button>
        </section>

        <section className={styles.listOrders}>
          {orders.map((order) => (
            <button
              key={order.id}
              className={styles.orderItem}
              onClick={() => handleDetailOrder(order.id)}
            >
              <div className={styles.tag}></div>
              <span>Mesa {order.table}</span>
            </button>
          ))}
        </section>
      </main>

      {isOpen && <ModalOrder />}
    </>
  );
}
