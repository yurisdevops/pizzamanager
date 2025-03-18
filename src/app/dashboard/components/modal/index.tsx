"use client";

import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { onRequestClose } from "@/providers/features/order/orderSlice";
import { selectOrderById } from "@/providers/features/order/orderSelectors";
import { RootState } from "@/providers/app/store";

export function ModalOrder() {
  const isOpen = useSelector((state: RootState) => state.order.isOpen);
  const order = useSelector(selectOrderById);
  const dispatch = useDispatch();

  console.log("Modal está aberto:", isOpen); // Verifica se o modal deve estar aberto
  console.log("Pedido correspondente:", order);

  function handleCloseDetailOrder() {
    dispatch(onRequestClose());
  }

  if (!order) {
    return null;
  }
  return (
    <dialog className={styles.dailogContainer}>
      <section className={styles.dailogContent}>
        <button className={styles.dailogBack} onClick={handleCloseDetailOrder}>
          <X size={40} color="#FF3f4b" />
        </button>

        <article key={order.id} className={styles.container}>
          <h2>Detalhes do pedido</h2>
          <span className={styles.table}>
            Mesa <b>{order.order.table}</b>
          </span>
          <section className={styles.item}>
            <span>
              1 - <b>{order.product.name}</b>
            </span>
            <span className={styles.description}>
              {order.product.description}
            </span>
          </section>
          <button className={styles.buttonOrder}>Concluir pedido</button>
        </article>
      </section>
    </dialog>
  );
}
