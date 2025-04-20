"use client";

import styles from "./styles.module.scss";
import { X } from "lucide-react";
import { useContext, useEffect, useRef } from "react";
import { OrderContext } from "@/providers/order";

export function ModalOrder() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, onRequestClose, order, finishOrder } =
    useContext(OrderContext);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  async function handleFinishOrder() {
    await finishOrder(order[0].order.id);
  }

  return (
    <dialog ref={dialogRef} className={styles.dailogContainer}>
      <section className={styles.dailogContent}>
        <button className={styles.dailogBack} onClick={onRequestClose}>
          <X size={40} color="#FF3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          <span className={styles.table}>
            Mesa <b>{order[0].order.table}</b>
          </span>

          {order[0].order?.name && (
            <span className={styles.name}>
              <b>{order[0].order.name}</b>
            </span>
          )}

          {order.map((item) => (
            <section className={styles.item} key={item.id}>
              <span>
                {item.amount} - <b>{item.product.name}</b>
              </span>
              <span className={styles.description}>
                {item.product.description}
              </span>
            </section>
          ))}

          <button className={styles.buttonOrder} onClick={handleFinishOrder}>
            Concluir pedido
          </button>
        </article>
      </section>
    </dialog>
  );
}
