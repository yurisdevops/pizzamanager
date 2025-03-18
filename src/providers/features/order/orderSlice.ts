import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { OrderItemProps } from "@/lib/orderItem.type";
import { api } from "@/services/api";

import { getCookieClient } from "@/lib/cookieClient";

type OrderState = {
  isOpen: boolean;
  order_id: string | null;
  orders: OrderItemProps[];
  loading: boolean;
  error: string | null;
};

const initialState: OrderState = {
  isOpen: false,
  order_id: null,
  orders: [],
  loading: false,
  error: null,
};

export const fetchOrderItems = createAsyncThunk(
  `order/fetchOrderItems`,
  async (order_id: string) => {
    const token = getCookieClient();

    const response = await api.get("/order/detail", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    onRequestOpen(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.order_id = action.payload;
    },
    onRequestClose(state) {
      state.isOpen = false;
      state.order_id = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOrderItems.fulfilled,
        (state, action: PayloadAction<OrderItemProps[]>) => {
          state.loading = false;
          state.orders = action.payload;
        }
      )
      .addCase(fetchOrderItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro ao carregar os pedidos";
      });
  },
});

export const { onRequestOpen, onRequestClose } = orderSlice.actions;

export default orderSlice.reducer;
