export const errorMessage = "Date string must be a valid value";

/**
 * Formats the given date string into a localized date string.
 *
 * @param {string | Date} date - The date string to format.
 * @param {string} [locale="en-US"] - The locale to use for formatting. Defaults to "en-US".
 * @returns {string} The formatted date string.
 */
export const dateFormat = (date: string | Date, locale = "en-US"): string => {
	if (!date) {
		throw new Error(errorMessage);
	}

	const format = new Date(date).toLocaleDateString(locale);
	return format;
};
