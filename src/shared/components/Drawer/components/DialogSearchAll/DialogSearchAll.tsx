import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_DIALOG_SEARCH_ALL_TYPE } from "shared/common/store/DialogSearchAll/DialogSearchAll.reduce";
import { IDialogSearchAllState } from "shared/common/store/DialogSearchAll/types/DialogSearchAll.types";
import { createAction } from "shared/common/store/store.action";
import DialogSearchAllView from "./DialogSearchAllView";
import schema from "./schema";
import { fetchGetSearchAllService } from "./service";
import { IDialogSearchAllForm } from "./types/DialogSearchAll.types";
import { IPaginationModel } from "shared/common/types/AppTypes";

const DialogSearchAll: React.FC = () => {
	const dispatch = useDispatch();
	const dialogSearchAll = useSelector((state: { dialogSearchAll: IDialogSearchAllState }) =>	state.dialogSearchAll);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
	} = useForm<IDialogSearchAllForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const [paginationModel, setPaginationModel] = useState<IPaginationModel>({ pageSize: 10, page: 0 });	  

	const handleClickCloseDialogSearchAll = () =>
		dispatch(createAction(CLOSE_DIALOG_SEARCH_ALL_TYPE));

	const queryKey = ["get_search_all"];
	const queryFn = () => {
		const { page, pageSize } = paginationModel;
		const payload = {...getValues(), pageNumber: page, pageSize };

		return fetchGetSearchAllService(payload);
	};
	const { data, isLoading, refetch } = useQuery(queryKey, queryFn);

	useEffect(() => {
		return () => {
			reset();
		};
	}, [dialogSearchAll]);

	useEffect(() => {
		refetch();
	}, [paginationModel]);

	const dialogSearchAllSubmit = () => refetch();

	return (
		<DialogSearchAllView
			{...{
				register,
				handleSubmit,
				dialogSearchAllSubmit,
				errors,
				dialogSearchAll,
				handleClickCloseDialogSearchAll,
				data,
				isLoading,
				paginationModel, 
				setPaginationModel
			}}
		/>
	);
};

export default DialogSearchAll;
