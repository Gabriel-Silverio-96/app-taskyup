import { ForwardedRef } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface ITextFieldPassword {
	register: UseFormRegister<any>;
	errors: FieldErrors<{ password: string }>;
	ref?: ForwardedRef<HTMLDivElement>;
}
