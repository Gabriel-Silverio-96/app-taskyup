export type TypeAuth = "SIGNIN_TYPE" | "LOGOUT_TYPE";

export interface IAuthState {
    isAuthenticated: boolean;
    user_data: {
        full_name: string;
    }
}

export interface IAuthAction {
    type: TypeAuth;
    payload: IAuthState;
}