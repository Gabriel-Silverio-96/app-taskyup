import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFetchGetProfileResponse {
    full_name: string;
    email: string;
}

export interface IProfileForm {
    full_name: string;
    email: string;
}

export interface IProfileFormView {
    register: UseFormRegister<IFetchGetProfileResponse>;
    isLoading: boolean;
    errors: FieldErrors<IFetchGetProfileResponse>;
    data: IFetchGetProfileResponse | undefined; 
    handleSubmit: UseFormHandleSubmit<IFetchGetProfileResponse>;
    mutate: (form: IFetchGetProfileResponse) => void;
    isSaving: boolean;
}