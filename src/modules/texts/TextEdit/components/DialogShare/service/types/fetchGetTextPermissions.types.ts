export interface IFetchGetTextPermissionsService {
	params: {
		text_id: string | null;
		board_id: string | null;
	};
}

export interface IFetchGetTextPermissionsResponse {
	public: boolean;
}
