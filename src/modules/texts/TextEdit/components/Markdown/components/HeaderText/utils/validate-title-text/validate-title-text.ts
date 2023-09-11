export const ERROR_MESSAGE_TITLE_TEXT = "Minimum of 3 characters";

const validateTitleText = (titleText: string) => {
	const isError = titleText.length < 3;
	const message = isError ? ERROR_MESSAGE_TITLE_TEXT : "";

	return { isError, message };
};

export { validateTitleText };
