import EmojiPickerReact, { Theme } from "emoji-picker-react";
import { memo, useEffect, useState } from "react";
import { FiSmile, FiTrash } from "react-icons/fi";
import type { IEmojiPicker } from "shared/components/EmojiPicker/types";
import { IconButton } from "./emoji-picker.style";
import { Grid, Typography } from "@mui/material";
import { ICON_SIZE } from "shared/constants";

const EmojiPicker = ({
	onEmojiClick,
	emojiUrl,
	onEmojiRemove,
}: IEmojiPicker) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToogle = () => {
		setIsOpen(prevState => !prevState);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const defineIconVisibility = emojiUrl ? "hidden" : "visible";
	const defineTrashButtonVisibility = emojiUrl ? "visible" : "hidden";

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const target = event.target as HTMLElement;

			const shouldCloseEmojiPicker =
				target?.closest("aside")?.tagName !== "ASIDE" &&
				target?.closest("button")?.tagName !== "BUTTON";

			if (shouldCloseEmojiPicker) {
				handleClose();
			}
		}

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div>
			<Grid
				container
				display="flex"
				alignItems="center"
				aria-label="Emoji picker controls">
				<div>
					<IconButton
						onClick={handleToogle}
						emojiUrl={emojiUrl}
						aria-pressed={isOpen}>
						<FiSmile visibility={defineIconVisibility} />
					</IconButton>
				</div>
				<Typography variant="body2" color="GrayText">
					Select emoji
				</Typography>
				<IconButton
					emojiUrl=""
					size="small"
					sx={{ ml: 0.5, visibility: defineTrashButtonVisibility }}
					onClick={onEmojiRemove}
					aria-label="Remove selected emoji">
					<FiTrash size={ICON_SIZE.SMALL} />
				</IconButton>
			</Grid>
			<div aria-label="Close emoji picker" role="presentation">
				<EmojiPickerReact
					className="emoji-picker"
					theme={Theme.DARK}
					open={isOpen}
					onEmojiClick={onEmojiClick}
					width={300}
					height={400}
				/>
			</div>
		</div>
	);
};

export default memo(EmojiPicker);
