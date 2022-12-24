import React, { memo, useState } from "react";
import { useContextBoard } from "../../Context";
import { INITIAL_STATE_IMAGES } from "./constant";
import DialogBackgroundView from "./DialogBackgroundView";

const DialogBackground: React.FC = () => {
	const [images, setImages] = useState(INITIAL_STATE_IMAGES);
	const { dialogBackgroundImage } = useContextBoard();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => setAnchorEl(null);
	const isOpenMenu = Boolean(anchorEl);

	return (
		<DialogBackgroundView
			{...{	
				openMenu,
				isOpenMenu,
				closeMenu,
				anchorEl,
				images,
				dialogBackgroundImage
			}}
		/>
	);
};

export default memo(DialogBackground);
