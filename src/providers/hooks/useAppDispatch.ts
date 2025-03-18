import { useDispatch } from "react-redux";
import { AppDispatch } from "@/providers/app/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
