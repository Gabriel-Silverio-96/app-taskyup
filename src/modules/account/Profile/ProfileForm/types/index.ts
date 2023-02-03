import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFetchProfile {
    full_name: string;
    email: string;
}

export interface IProfileForm {
    full_name: string;
    email: string;
}

export interface IProfileFormView {
    register: UseFormRegister<IFetchProfile>;
    isLoading: boolean;
    errors: FieldErrors<IFetchProfile>;
    data: IFetchProfile | undefined; 
    handleSubmit: UseFormHandleSubmit<IFetchProfile>;
    fetchEditProfileForm: (form: IFetchProfile) => void;
    isSaving: boolean;
}