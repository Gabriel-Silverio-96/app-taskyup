import { useMutation, useQuery } from "@tanstack/react-query";
import { useContextTextEdit } from "modules/texts/TextEdit/Context";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSnackBar from "shared/common/hook/useSnackBar";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import DialogShareView from "./DialogShareView";
import { DIALOG_SHARE_QUERY_KEY, INITIAL_STATE_DATA } from "./constants";
import {
	fetchGetTextPermissionsService,
	fetchPatchTextPermissionsService,
} from "./service";
import { IFetchGetTextPermissionsResponse } from "./service/types";
import { IData } from "./types/DialogShare.types";

const DialogShare: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const { snackBarSuccess } = useSnackBar();

	const { isOpenDialogShare, setIsOpenDialogShare, setDataText } =
		useContextTextEdit();

	const [data, setData] = useState<IData>(INITIAL_STATE_DATA);

	const closeDialogShare = () => setIsOpenDialogShare(false);

	const queryFn = () =>
		fetchGetTextPermissionsService({ params: { text_id, board_id } });

	const onSuccessQuery = (data: IFetchGetTextPermissionsResponse) =>
		setData(data);
	const optionsQuery = { onSuccess: onSuccessQuery, enabled: false };

	const { refetch, isFetching } = useQuery(
		[DIALOG_SHARE_QUERY_KEY.FETCH_GET_TEXT_PERMISSIONS],
		queryFn,
		optionsQuery
	);

	useEffect(() => {
		isOpenDialogShare && refetch();
	}, [isOpenDialogShare]);

	const URLPublicText = createURLQueryParams(
		`${location.origin}/public/text`,
		{ text_id, redirect: false }
	);

	const handleChangeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;
		setData({ public: checked });
	};

	const handleClickCopy = () => {
		navigator.clipboard.writeText(URLPublicText);
		snackBarSuccess({ message: "Copied" });
	};

	const mutationFn = () =>
		fetchPatchTextPermissionsService({ payload: data, board_id, text_id });

	const onSuccessMutation = ({ config }: any) => {
		const data = JSON.parse(config.data);
		setDataText(prevState => ({ ...prevState, ...data }));
	};
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: handleClickSave, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<DialogShareView
			{...{
				data,
				isFetching,
				isOpenDialogShare,
				closeDialogShare,
				handleChangeSwitch,
				handleClickCopy,
				handleClickSave,
				isSaving,
				URLPublicText,
			}}
		/>
	);
};

export default DialogShare;
