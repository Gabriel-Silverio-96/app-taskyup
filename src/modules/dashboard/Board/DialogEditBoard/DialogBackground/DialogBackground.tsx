import React, { ChangeEvent, memo, useEffect, useRef, useState } from "react";
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

	const menuRef = useRef<HTMLDivElement | null>(null);
	
	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => setAnchorEl(null);	
	const onChange = (event: ChangeEvent<HTMLInputElement>) => setQueryImage(event.target.value);
		
	const searchImage = async (resetPagination?: boolean) => {
		try {
			const page = resetPagination ? 1 : pagination;
			const { data } = await api.get(`images/search?query=${queryImage}&page=${page}`) as any;

			setImages(data);
			resetPagination && setPagination(1);
		} catch (error) {
			setImages({ photos: [] });
		}		
	};

	useEffect(() => {
		const alreadyRequest = queryImage && pagination !== 1;
		if(alreadyRequest) searchImage();
	}, [pagination]);
	
	const menuScrollTop = () => {
		const paperRoot = menuRef.current?.children.item(2);
		paperRoot?.scroll(0, 0);
	};

	const nextPage = () => {
		setPagination(prevState => prevState + 1);
		menuScrollTop();
	};
	const prevPage = () => {
		setPagination(prevState => prevState - 1);
		menuScrollTop();
	};
	
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
				onRemoveBackground,
				searchImage,
				onChange,
				pagination,
				nextPage,
				prevPage,
				menuRef
			}}
		/>
	);
};

export default memo(DialogBackground);
