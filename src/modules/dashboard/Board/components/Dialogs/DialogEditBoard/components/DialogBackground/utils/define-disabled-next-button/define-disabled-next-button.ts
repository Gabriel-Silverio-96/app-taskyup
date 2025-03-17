import type { IImages } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/types";

/**
 * Determines whether the "Next" button should be disabled based on the current pagination state.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.images - The images data, including total results, per page, and an array of photos.
 * @param {number} options.pagination - The current pagination value.
 * @returns {boolean} - Returns `true` if the "Next" button should be disabled, otherwise `false`.
 */
export const defineDisabledNextButton = ({
	images,
	pagination,
}: {
	images: IImages;
	pagination: number;
}): boolean => {
	const totalResults = images.total_results;
	const perPage = images.per_page;
	const totalPages = Math.ceil(totalResults / perPage);

	const isDisabledNextButton =
		pagination >= totalPages || images.photos.length < 9;

	return isDisabledNextButton;
};
