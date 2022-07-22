export const createAction = <T>(type: string, payload: T) => {
	return {
		type,
		payload
	};
};