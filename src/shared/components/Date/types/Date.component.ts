import { ForwardedRef, HTMLAttributes } from "react";

export interface IDate {
    props: HTMLAttributes<HTMLInputElement>;
    ref: ForwardedRef<HTMLInputElement>;
}