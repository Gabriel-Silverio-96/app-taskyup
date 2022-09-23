import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IProfileUserData {
    full_name: string;
    email: string;
}

export interface IProfileFormForm {
    full_name: string;
}

export interface IProfileFormView {
    register: UseFormRegister<IProfileUserData>;
    isLoading: boolean;
    errors: FieldErrors<IProfileUserData>;
    profileUserData: IProfileUserData | undefined; 
    handleSubmit: UseFormHandleSubmit<IProfileUserData>;
    fetchEditProfileForm: (form: IProfileUserData) => void;
    isSaving: boolean;
}