import React, { ChangeEvent, memo, useState } from "react";
import api from "shared/services/api";
import { useContextBoard } from "../../Context";
import { INITIAL_STATE_IMAGES } from "./constant";
import DialogBackgroundView from "./DialogBackgroundView";

const DialogBackground: React.FC = () => {
	const { dialogBackgroundImage, setDialogBackgroundImage } = useContextBoard();

	const [images, setImages] = useState(INITIAL_STATE_IMAGES);
	const [pagination, setPagination] = useState(1);
	const [queryImage, setQueryImage] = useState("");
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => setAnchorEl(null);	

	const onChooseBackground = (background_image: string) => setDialogBackgroundImage(background_image);		
	const onRemoveBackground = () => setDialogBackgroundImage("");		

	const onChange = (event: ChangeEvent<HTMLInputElement>) => setQueryImage(event.target.value);
		
	const searchImage = async () => {
		try {
			const { data } = await api.get(`images/search?query=${queryImage}&page=${pagination}`) as any;
			setImages(data.photos);
		} catch (error) {
			setImages([]);
		}		
	};

	return (
		<DialogBackgroundView
			{...{	
				openMenu,				
				closeMenu,
				anchorEl,
				images,
				dialogBackgroundImage,
				onChooseBackground,
				onRemoveBackground,
				searchImage,
				onChange
			}}
		/>
	);
};

export default memo(DialogBackground);
