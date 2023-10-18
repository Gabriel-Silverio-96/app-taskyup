import { useQuery } from "@tanstack/react-query";
import { useContextTextEdit } from "modules/texts/TextEdit/Context";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DialogShareView from "./DialogShareView";
import { fetchGetTextPermissions } from "./service";
import { DIALOG_SHARE_QUERY_KEY } from "./constants";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import useSnackBar from "shared/common/hook/useSnackBar";

const DialogShare: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const { snackBarSuccess } = useSnackBar();

	const { isOpenDialogShare, setIsOpenDialogShare } = useContextTextEdit();

	const [data, setData] = useState<any>({ public: false });

	const closeDialogShare = () => setIsOpenDialogShare(false);

	const queryFn = () =>
		fetchGetTextPermissions({ params: { text_id, board_id } });

	const onSuccessQuery = (data: any) => setData(data);
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
		{ text_id }
	);

	const handleChangeSwitch = (event: any) => {
		const { checked } = event.target;
		setData({ public: checked });
	};

	const handleClickCopy = () => {
		navigator.clipboard.writeText(URLPublicText);
		snackBarSuccess({ message: "Copied" });
	};

	return (
		<DialogShareView
			{...{
				data,
				isFetching,
				isOpenDialogShare,
				closeDialogShare,
				handleChangeSwitch,
				handleClickCopy,
				URLPublicText,
			}}
		/>
	);
};

export default DialogShare;
