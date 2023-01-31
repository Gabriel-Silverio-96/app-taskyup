import {  IPhotos as IPhotosFetch } from "shared/common/types/Fetch";

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
}

export type TImage = IPhotos | IPhotosFetch;