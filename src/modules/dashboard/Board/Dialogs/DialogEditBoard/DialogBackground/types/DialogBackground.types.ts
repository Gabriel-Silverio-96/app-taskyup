import { ChangeEvent, MouseEvent } from "react";
import {  IFetchSearchImages, IPhotos as IPhotosFetch } from "shared/common/types/Fetch";

interface IPhotos {
    id: number;
    photographer: string;
    photographer_url: string;
    src: {
        tiny: string;
    }
    alt: string;
    error?: string;
}

export interface IImages {
    photos: IPhotos[];
    error?: string;
    total_results?: number;
}

export type TypeImages = IImages | IFetchSearchImages

export type TypeImage = IPhotos | IPhotosFetch;

export interface IDialogBackgroundView {
    queryImage: string;
    openMenu: (event: MouseEvent<HTMLButtonElement>) => void;		
    closeMenu: () => void;
    anchorEl: null | HTMLElement;
    images: TypeImages;
    dialogBackgroundImage: string;
    onChooseBackground: (background_image: string) => void;
    onRemoveBackground: () => void;
    handleGetSearchImage: (resetPagination?: boolean) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    pagination: number;
    nextPage: () => void;
    prevPage: () => void;
    menuRef: React.Ref<HTMLDivElement> | null;
    isLoadingImages: boolean;
}