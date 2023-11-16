import { ChangeEvent, MouseEvent, Ref } from "react";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchSearchImagesResponse } from "../services/types";

interface IPhotosInitialState {
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
	photos: IPhotosInitialState[];
	error?: string;
	total_results?: number;
}

export interface IDialogBackgroundView {
	query: string;
	openMenu: (event: MouseEvent<HTMLButtonElement>) => void;
	closeMenu: FunctionReturnsVoid;
	anchorEl: HTMLElement | null;
	images: IImages | IFetchSearchImagesResponse;
	dialogBackgroundImage: string;
	handleBackgroundImageSelection: (background_image: string) => void;
	handleBackgroundRemoval: FunctionReturnsVoid;
	dialogBackgroundSubmit: (resetPagination?: boolean) => void;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	pagination: number;
	nextPage: FunctionReturnsVoid;
	prevPage: FunctionReturnsVoid;
	menuRef: Ref<HTMLDivElement> | null;
	isLoadingImages: boolean;
}
