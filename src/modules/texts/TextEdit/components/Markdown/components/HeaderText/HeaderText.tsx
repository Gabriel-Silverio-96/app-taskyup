import {
	Button,
	Grid,
	IconButton,
	Tooltip,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useTextEditContext } from "modules/texts/TextEdit/Context";
import {
	Breadcrumbs,
	Nav,
	TextField,
	TextTitle,
	Slash,
} from "modules/texts/TextEdit/components/Markdown/components/HeaderText/header-text.style";
import React, { memo } from "react";
import { FiArrowLeft, FiShare2 } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import Logo from "shared/components/Logo";
import IconPublic from "shared/components/IconPublic";
import { ICON_SIZE } from "shared/constants";
import type { IHeaderText } from "modules/texts/TextEdit/components/Markdown/components/HeaderText/types";
import { validateTitleText } from "modules/texts/TextEdit/components/Markdown/components/HeaderText/utils/validate-title-text";
import { useTheme } from "@mui/material/styles";

const HeaderText: React.FC<IHeaderText> = ({
	handleClickSaveText,
	titleBoard,
	titleText,
	onChangeTextTitle,
}) => {
	const { setIsOpenDialogShare, dataText } = useTextEditContext();
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const linkPreviousPage = `/texts/${board_id}`;

	const { isError, message } = validateTitleText(titleText);

	const handleClickOpenDialogShare = () => setIsOpenDialogShare(true);

	return (
		<Grid container sx={{ mb: 3 }}>
			<Grid
				item
				lg={4}
				md={4}
				sm={12}
				xs={12}
				display="flex"
				alignItems="center"
				gap={4}
				mb={isSmallScreen ? 2 : 0}>
				<Link to="/dashboard">
					<Logo size={100} />
				</Link>
				<Breadcrumbs titleboard={titleBoard}>
					<IconPublic isPublic={dataText.public} />
					<Tooltip title={titleBoard} arrow>
						<Typography variant="caption">{titleBoard}</Typography>
					</Tooltip>
					<Slash>/</Slash>
					<TextTitle>
						<TextField
							value={titleText}
							onChange={onChangeTextTitle}
						/>
						<Typography variant="caption">{message}</Typography>
					</TextTitle>
				</Breadcrumbs>
			</Grid>
			<Grid item lg={8} md={8} sm={12} xs={12} justifyContent="right">
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
