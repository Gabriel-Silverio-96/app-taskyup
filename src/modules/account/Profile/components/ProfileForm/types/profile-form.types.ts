import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { IGetProfileResponse } from "modules/account/Profile/services/types";

export interface IProfileBody {
	full_name: string;
	email: string;
}

export interface IProfileFormView {
	register: UseFormRegister<IGetProfileResponse>;
	isLoading: boolean;
	errors: FieldErrors<IGetProfileResponse>;
	data: IGetProfileResponse | undefined;
	handleSubmit: UseFormHandleSubmit<IGetProfileResponse>;
	mutate: (form: IGetProfileResponse) => void;
	isSaving: boolean;
}
