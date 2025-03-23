import * as Yup from "yup";

export const INITIAL_STATE_TODO_DATA = { count: 0, todos: [] };

export const NOTE_EDIT_QUERY_KEY = {
	FETCH_GET_ONE_NOTE: "FETCH_GET_ONE_NOTE",
};

export const NOTE_EDIT_SCHEMA = Yup.object({
	title_note: Yup.string()
		.required("Title note is a required field")
		.min(3, "Should be 3 chars minimum")
		.max(100, "Max of 100 characters"),
	observation: Yup.string().max(65000, "Max of 65000 characters"),
});
