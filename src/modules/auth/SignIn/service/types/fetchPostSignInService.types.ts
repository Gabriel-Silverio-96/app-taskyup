import { IFetchResponseDefault } from "shared/common/types/Fetch";
import { ISignInForm } from "modules/auth/SignIn/types";

export interface IFetchPostSignInService {
	body: ISignInForm;
}

export interface IFetchPostSignInResponse extends IFetchResponseDefault {
	token: string;
	user_data: {
		full_name: string;
	};
}
