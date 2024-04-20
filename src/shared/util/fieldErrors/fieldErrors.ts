export const fieldErrors = ({
	errors,
	field,
}: {
	errors: any;
	field: string;
}) => ({
	error: errors[field] && Boolean(errors[field]),
	helperText: errors[field] ? errors[field]?.message : "",
});
