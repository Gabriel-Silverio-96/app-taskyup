import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface ISignInForm {
	email: string;
	password: string;
}

export interface ISignInView {
	register: UseFormRegister<ISignInForm>;
	handleSubmit: UseFormHandleSubmit<ISignInForm>;
	errors: FieldErrors<ISignInForm>;
	signInSubmit: (form: ISignInForm) => void;
	isLoading: boolean;
}
