export interface IFetchGetTextPermissionsProps {
	params: {
		text_id: string | null;
		board_id: string | null;
	};
}

export interface IFetchGetTextPermissionsService {
	({
		params,
	}: IFetchGetTextPermissionsProps): Promise<IFetchGetTextPermissionsResponse>;
}

export interface IFetchGetTextPermissionsResponse {
	public: boolean;
}
