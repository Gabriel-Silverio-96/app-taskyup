import { IFetchDefaultResponse } from "shared/common/types";
import { ISignInForm } from "modules/auth/SignIn/types";

export interface IFetchPostSignInService {
	body: ISignInForm;
}

export interface IFetchPostSignInResponse extends IFetchDefaultResponse {
	token: string;
	user_data: {
		full_name: string;
	};
}
