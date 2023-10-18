export interface IFetchPatchTextPermissionsService {
	payload: {
		public: boolean;
	};
	text_id: string | null;
	board_id: string | null;
}
