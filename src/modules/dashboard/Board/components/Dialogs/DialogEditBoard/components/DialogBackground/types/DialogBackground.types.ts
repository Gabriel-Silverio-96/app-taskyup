import { ChangeEvent, MouseEvent, Ref } from "react";
import { IFetchSearchImages } from "shared/common/types/Fetch";

interface IPhotos {
	id: number;
	photographer: string;
	photographer_url: string;
	src: {
		tiny: string;
	};
	alt: string;
	error?: string;
}

export interface IImages {
	photos: IPhotos[];
	error?: string;
	total_results?: number;
}

export type TypeImages = IImages | IFetchSearchImages;

export interface IDialogBackgroundView {
	queryImage: string;
	openMenu: (event: MouseEvent<HTMLButtonElement>) => void;
	closeMenu: () => void;
	anchorEl: HTMLElement | null;
	images: TypeImages;
	dialogBackgroundImage: string;
	handleBackgroundImageSelection: (background_image: string) => void;
	handleBackgroundRemoval: () => void;
	dialogBackgroundSubmit: (resetPagination?: boolean) => void;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	pagination: number;
	nextPage: () => void;
	prevPage: () => void;
	menuRef: Ref<HTMLDivElement> | null;
	isLoadingImages: boolean;
}
