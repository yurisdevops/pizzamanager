import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/providers/app/store";

export const selectOrderById = createSelector(
  (state: RootState) => state.order.orders,
  (state: RootState) => state.order.order_id,
  (orders, order_id) => orders.find((order) => order.order_id === order_id)
);
