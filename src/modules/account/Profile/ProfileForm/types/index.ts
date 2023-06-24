import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFetchGetProfile {
    full_name: string;
    email: string;
}

export interface IProfileForm {
    full_name: string;
    email: string;
}

export interface IProfileFormView {
    register: UseFormRegister<IFetchGetProfile>;
    isLoading: boolean;
    errors: FieldErrors<IFetchGetProfile>;
    data: IFetchGetProfile | undefined; 
    handleSubmit: UseFormHandleSubmit<IFetchGetProfile>;
    mutate: (form: IFetchGetProfile) => void;
    isSaving: boolean;
}