import { useQuery } from "@tanstack/react-query";
import { useContextTextEdit } from "modules/texts/TextEdit/Context";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DialogShareView from "./DialogShareView";
import { fetchGetTextPermissions } from "./service";
import { DIALOG_SHARE_QUERY_KEY } from "./constants";

const DialogShare: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const [data, setData] = useState<any>({ public: false });
	const { isOpenDialogShare, setIsOpenDialogShare } = useContextTextEdit();

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

	const handleChangeSwitch = (event: any) => {
		const { checked } = event.target;
		setData({ public: checked });
	};

	return (
		<DialogShareView
			{...{
				isOpenDialogShare,
				closeDialogShare,
				data,
				handleChangeSwitch,
				isFetching,
			}}
		/>
	);
};

export default DialogShare;
