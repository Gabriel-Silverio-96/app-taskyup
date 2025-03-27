import { Button, Grid, IconButton, Typography } from "@mui/material";
import { useTextEditContext } from "modules/texts/TextEdit/Context";
import {
	Breadcrumbs,
	Nav,
	TextField,
	TextTitle,
} from "modules/texts/TextEdit/components/Markdown/components/HeaderText/header-text.style";
import React, { memo } from "react";
import { FiArrowLeft, FiShare2 } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import Logo from "shared/components/Logo";
import IconPublic from "shared/components/IconPublic";
import { ICON_SIZE } from "shared/constants";
import { IHeaderText } from "./types";
import { validateTitleText } from "./utils/validate-title-text";

const HeaderText: React.FC<IHeaderText> = ({
	handleClickSaveText,
	titleBoard,
	titleText,
	onChangeTextTitle,
}) => {
	const { setIsOpenDialogShare, dataText } = useTextEditContext();

	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const linkPreviousPage = `/texts/${board_id}`;

	const { isError, message } = validateTitleText(titleText);

	const handleClickOpenDialogShare = () => setIsOpenDialogShare(true);

	return (
		<Grid
			container
			alignItems="center"
			justifyContent="space-between"
			sx={{ mb: 3 }}>
			<Grid item md={3}>
				<Link to="/dashboard">
					<Logo size={100} />
				</Link>
			</Grid>
			<Grid item md={3}>
				<Breadcrumbs>
					<IconPublic isPublic={dataText.public} />
					<Typography variant="caption">{titleBoard} /</Typography>
					<TextTitle>
						<TextField
							value={titleText}
							onChange={onChangeTextTitle}
						/>
						<Typography variant="caption">{message}</Typography>
					</TextTitle>
				</Breadcrumbs>
			</Grid>
			<Grid item md={3}>
				<Nav>
					<Link to={linkPreviousPage}>
						<IconButton>
							<FiArrowLeft size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Link>
					<IconButton onClick={handleClickOpenDialogShare}>
						<FiShare2 size={ICON_SIZE.MEDIUM} />
					</IconButton>
					<Button
						variant="contained"
						onClick={() => handleClickSaveText()}
						disabled={isError}>
						Save
					</Button>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default memo(HeaderText);
