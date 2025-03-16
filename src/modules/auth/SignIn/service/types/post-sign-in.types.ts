import { IFetchDefaultResponse } from "shared/common/types";
import { ISignInForm } from "modules/auth/SignIn/types";

export interface IPostSignInService {
	body: ISignInForm;
}

export interface IPostSignInResponse extends IFetchDefaultResponse {
	token: string;
	user_data: {
		full_name: string;
	};
}
