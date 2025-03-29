import { Dispatch, SetStateAction } from "react";

export type UseLocalStorage<T> = [ T, Dispatch<SetStateAction<T>>];