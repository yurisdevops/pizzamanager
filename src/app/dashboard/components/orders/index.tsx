"use client";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/providers/hooks/useAppDispatch";
import {
  onRequestOpen,
  fetchOrderItems,
} from "@/providers/features/order/orderSlice";
import { RefreshCw } from "lucide-react";
import styles from "./styles.module.scss";
import { OrderProps } from "@/lib/order.type";
import { ModalOrder } from "../modal";
import { RootState } from "@/providers/app/store";

interface Props {
  orders: OrderProps[];
}

export function Orders({ orders }: Props) {
  const isOpen = useSelector((state: RootState) => state.order.isOpen);
  const dispatch = useAppDispatch();

  function handleDetailOrder(order_id: string) {
    dispatch(fetchOrderItems(order_id));
    dispatch(onRequestOpen(order_id));
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>
          <button>
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
