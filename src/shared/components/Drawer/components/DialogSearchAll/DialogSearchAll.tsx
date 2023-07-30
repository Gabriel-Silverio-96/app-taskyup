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
import { INTIAL_STATE_GET_SEARCH_ALL_USE_QUERY, INTIAL_STATE_PAGINATION_MODEL } from "./constants";

const DialogSearchAll: React.FC = () => {
	const dispatch = useDispatch();	
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

	const [paginationModel, setPaginationModel] = useState<IPaginationModel>(INTIAL_STATE_PAGINATION_MODEL);

	const dialogSearchAll = useSelector((state: { dialogSearchAll: IDialogSearchAllState }) => state.dialogSearchAll);

	const handleClickCloseDialogSearchAll = () => dispatch(createAction(CLOSE_DIALOG_SEARCH_ALL_TYPE));

	const queryKey = ["get_search_all"];
	const queryFn = () => {
		const { page, pageSize } = paginationModel;
		const payload = { ...getValues(), pageNumber: page, pageSize };

		return fetchGetSearchAllService(payload);
	};

	const { data, isFetching: isLoading, refetch, remove } = useQuery(queryKey, queryFn, {
		enabled: false,
		initialData: INTIAL_STATE_GET_SEARCH_ALL_USE_QUERY,
	});

	useEffect(() => {
		return () => {
			reset();
			remove();
		};
	}, [dialogSearchAll]);

	useEffect(() => {
		const { query } = getValues();
		if(query) refetch();
	}, [paginationModel]);

	const dialogSearchAllSubmit = () => setPaginationModel(prevState => ({ ...prevState, page: 0 }));

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
				setPaginationModel,
			}}
		/>
	);
};

export default DialogSearchAll;
