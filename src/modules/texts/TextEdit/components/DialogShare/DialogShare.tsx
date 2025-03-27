import { useMutation, useQuery } from "@tanstack/react-query";
import { useTextEditContext } from "modules/texts/TextEdit/Context";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSnackbar from "shared/common/hook/useSnackbar";
import { createURLQueryParams } from "shared/utils/create-url-query-params";
import DialogShareView from "modules/texts/TextEdit/components/DialogShare/DialogShareView";
import {
	DIALOG_SHARE_QUERY_KEY,
	INITIAL_STATE_DATA,
} from "modules/texts/TextEdit/components/DialogShare/dialog-share.constants";
import {
	getTextPermissionsService,
	patchTextPermissionsService,
} from "modules/texts/TextEdit/components/DialogShare/services";
import type { IGetTextPermissionsResponse } from "modules/texts/TextEdit/components/DialogShare/services/types";
import type { IData } from "modules/texts/TextEdit/components/DialogShare/types";
import type { IFetchDefaultResponse } from "shared/common/types";
import { AxiosResponse } from "axios";

const DialogShare: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const { snackbarSuccess } = useSnackbar();

	const { isOpenDialogShare, setIsOpenDialogShare, setDataText } =
		useTextEditContext();

	const [data, setData] = useState<IData>(INITIAL_STATE_DATA);

	const closeDialogShare = () => setIsOpenDialogShare(false);

	const queryFn = () =>
		getTextPermissionsService({ params: { text_id, board_id } });

	const onSuccessQuery = (data: IGetTextPermissionsResponse) => setData(data);
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
		snackbarSuccess({ message: "Copied" });
	};

	const mutationFn = () =>
		patchTextPermissionsService({
			body: data,
			params: { board_id, text_id },
		});

	const onSuccessMutation = ({
		config,
	}: AxiosResponse<IFetchDefaultResponse>) => {
		const data = JSON.parse(config.data);
		setDataText(prevState => ({ ...prevState, ...data }));
	};
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate, isLoading } = useMutation(mutationFn, optionsMutation);

	return (
		<DialogShareView
			{...{
				data,
				isFetching,
				isOpenDialogShare,
				closeDialogShare,
				handleChangeSwitch,
				handleClickCopy,
				mutate,
				isLoading,
				URLPublicText,
			}}
		/>
	);
};

export default DialogShare;
