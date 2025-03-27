export interface IGetTextPermissionsParams {
	params: {
		text_id: string | null;
		board_id: string | null;
	};
}

export interface IGetTextPermissionsService {
	({
		params,
	}: IGetTextPermissionsParams): Promise<IGetTextPermissionsResponse>;
}

export interface IGetTextPermissionsResponse {
	public: boolean;
}
