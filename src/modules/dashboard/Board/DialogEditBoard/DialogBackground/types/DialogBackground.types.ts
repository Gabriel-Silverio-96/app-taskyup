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