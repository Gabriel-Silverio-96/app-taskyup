import { IconButton, MenuItem, Typography, useTheme } from "@mui/material";
import { useContextBoard } from "modules/dashboard/Board/Context";
import { selectBoardIcon } from "modules/dashboard/Board/components/CardBoard/utils/select-board-icon";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { useState } from "react";
import { FiEdit, FiMoreHorizontal, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ICON_SIZE } from "shared/constants";
import {
	CardHeaderContainer,
	CardIcon,
	Menu,
} from "modules/dashboard/Board/components/CardBoard/components/CardHeader/style";
import { ICardHeader } from "modules/dashboard/Board/components/CardBoard/components/CardHeader/types";

const CardHeader: React.FC<ICardHeader> = ({
	type_board,
	board_id,
	isFetching,
}) => {
	const { palette } = useTheme();
	const { setBoardID } = useContextBoard();
	const { openDialogEditBoard, openDialogDeleteOneBoard } = useDialogBoard();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const closeMenu = () => setAnchorEl(null);

	const handleClickCardOptions = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setBoardID(board_id);
		openMenu(event);
	};

	const boardIcon = selectBoardIcon(type_board, palette.secondary.main);

	const linkBoard = `/${type_board}/${board_id}`;

	return (
		<CardHeaderContainer>
			<Link to={linkBoard}>
				<CardIcon>
					{boardIcon}
					<Typography
						color="text.secondary"
						gutterBottom
						sx={{
							fontSize: 12,
						}}>
						{type_board}
					</Typography>
				</CardIcon>
			</Link>
			<IconButton
				sx={{ p: 0 }}
				disabled={isFetching}
				onClick={handleClickCardOptions}
				data-testid="button-card-board-options">
				<FiMoreHorizontal size={ICON_SIZE.LARGE} />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={isOpenMenu}
				onClose={closeMenu}
				autoFocus={false}
				transitionDuration={{
					appear: 0,
					enter: 0,
					exit: 0,
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}>
				<MenuItem onClick={() => openDialogEditBoard(closeMenu)}>
					<FiEdit size={ICON_SIZE.EXTRA_SMALL} />
					Edit
				</MenuItem>
				<MenuItem
					onClick={() => openDialogDeleteOneBoard(closeMenu)}
					sx={{
						color: palette.error.main,
					}}>
					<FiTrash size={ICON_SIZE.EXTRA_SMALL} />
					Delete
				</MenuItem>
			</Menu>
		</CardHeaderContainer>
	);
};

export default CardHeader;
