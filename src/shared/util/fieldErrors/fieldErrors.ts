/**
 * Represents a function that generates error information for a specific field.
 *
 * @param {Object} params - The parameters object.
 * @param {Object} params.errors - The object containing error messages.
 * @param {string} params.field - The name of the field to check for errors.
 * @returns {Object} An object containing error information for the field.
 */
export const fieldErrors = ({
	errors,
	field,
}: {
	errors: any;
	field: string;
}) => {
	if (!errors) return { error: false, helperText: "" };

	return {
		error: Boolean(errors[field]),
		helperText: errors[field] ? errors[field]?.message : "",
	};
};
