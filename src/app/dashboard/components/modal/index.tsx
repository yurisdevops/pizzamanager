"use client";

import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { onRequestClose } from "@/providers/features/order/orderSlice";
import { selectOrderById } from "@/providers/features/order/orderSelectors";
import { RootState } from "@/providers/app/store";

export function ModalOrder() {
  const order = useSelector(selectOrderById);
  const orderId = useSelector((state: RootState) => state.order.order_id);
  const orders = useSelector((state: RootState) => state.order.orders);
  const dispatch = useDispatch();

  function handleCloseDetailOrder() {
    dispatch(onRequestClose());
  }
  const filteredOrders = orders.filter((item) => item.order_id === orderId);

  if (!orderId || filteredOrders.length === 0) {
    return null;
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
          {filteredOrders.map((item) => (
            <section className={styles.item}>
              <span>
                1 - <b>{item.product.name}</b>
              </span>
              <span className={styles.description}>
                {item.product.description}
              </span>
            </section>
          ))}
          <button className={styles.buttonOrder}>Concluir pedido</button>
        </article>
      </section>
    </dialog>
  );
}
