import React from "react";
import DialogSearchAllView from "./DialogSearchAllView";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "shared/common/store/store.action";
import { CLOSE_DIALOG_SEARCH_ALL_TYPE } from "shared/common/store/DialogSearchAll/DialogSearchAll.reduce";
import { IDialogSearchAllState } from "shared/common/store/DialogSearchAll/types/DialogSearchAll.types";

const DialogSearchAll: React.FC = () => {    
	const dispatch = useDispatch();
	const dialogSearchAll = useSelector((state: { dialogSearchAll: IDialogSearchAllState }) => state.dialogSearchAll);	
    
	const handleClickCloseDialogSearchAll = () => dispatch(createAction(CLOSE_DIALOG_SEARCH_ALL_TYPE));

	return <DialogSearchAllView {...{ dialogSearchAll, handleClickCloseDialogSearchAll }}/>;
};

export default DialogSearchAll;