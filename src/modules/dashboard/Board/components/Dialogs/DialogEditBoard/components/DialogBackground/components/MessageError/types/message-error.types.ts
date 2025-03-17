import { IImages } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/types";
import { IFetchSearchImagesResponse } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/services/types";

export interface IMessageError {
	images: IImages | IFetchSearchImagesResponse;
}
