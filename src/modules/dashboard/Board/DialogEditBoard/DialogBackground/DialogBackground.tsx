import React, { memo, useState } from "react";
import { useContextBoard } from "../../Context";
import { INITIAL_STATE_IMAGES } from "./constant";
import DialogBackgroundView from "./DialogBackgroundView";

const DialogBackground: React.FC = () => {
	const { dialogBackgroundImage, setDialogBackgroundImage } = useContextBoard();

	const [images, setImages] = useState(INITIAL_STATE_IMAGES);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => setAnchorEl(null);	

	const onChooseBackground = (background_image: string) => setDialogBackgroundImage(background_image);		
	const onRemoveBackground = () => setDialogBackgroundImage("");		

	return (
		<DialogBackgroundView
			{...{	
				openMenu,				
				closeMenu,
				anchorEl,
				images,
				dialogBackgroundImage,
				onChooseBackground,
				onRemoveBackground
			}}
		/>
	);
};

export default memo(DialogBackground);
