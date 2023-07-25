import React, { useEffect } from "react";
import DialogSearchAllView from "./DialogSearchAllView";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createAction } from "shared/common/store/store.action";
import { CLOSE_DIALOG_SEARCH_ALL_TYPE } from "shared/common/store/DialogSearchAll/DialogSearchAll.reduce";
import { IDialogSearchAllState } from "shared/common/store/DialogSearchAll/types/DialogSearchAll.types";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";

const DialogSearchAll: React.FC = () => {    
	const dispatch = useDispatch();
	const dialogSearchAll = useSelector((state: { dialogSearchAll: IDialogSearchAllState }) => state.dialogSearchAll);	

	const {	register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), mode: "all" }); 

	const handleClickCloseDialogSearchAll = () => dispatch(createAction(CLOSE_DIALOG_SEARCH_ALL_TYPE));

	const dialogSearchAllSubmit = (data: any) => console.log(data);	

	useEffect(() => {
		return () => reset();
	}, [dialogSearchAll]);

	return (
		<DialogSearchAllView
			{...{
				register,
				handleSubmit,
				dialogSearchAllSubmit,
				errors,
				dialogSearchAll,
				handleClickCloseDialogSearchAll,
			}}
		/>
	);
};

export default DialogSearchAll;