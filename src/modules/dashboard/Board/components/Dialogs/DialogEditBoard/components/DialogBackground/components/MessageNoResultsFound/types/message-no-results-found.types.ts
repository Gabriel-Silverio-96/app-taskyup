import { IImages } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/types";
import { IGetSearchImagesResponse } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/services/types";

export interface IMessageNoResultsFound {
	images: IImages | IGetSearchImagesResponse;
}
