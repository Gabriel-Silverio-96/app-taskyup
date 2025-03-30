import { Dispatch, SetStateAction } from "react";

export type IUseLocalStorage<T> = [T, Dispatch<SetStateAction<T>>];
