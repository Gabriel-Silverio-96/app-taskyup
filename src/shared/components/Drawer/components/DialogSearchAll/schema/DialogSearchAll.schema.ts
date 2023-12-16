import * as Yup from "yup";

export const DialogSearchAllSchema = Yup.object({
	query: Yup.string().required("Required field"),
});
