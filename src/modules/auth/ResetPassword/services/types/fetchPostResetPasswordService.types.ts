export interface IFetchPostResetPasswordService {
	body: {
		password: string;
	};
	token: string | undefined;
}
