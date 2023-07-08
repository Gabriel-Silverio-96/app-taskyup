import { useContextBoard } from "modules/dashboard/Board/Context";
import React, { ChangeEvent, memo, useEffect, useRef, useState } from "react";
import DialogBackgroundView from "./DialogBackgroundView";
import { ERROR_STATE_IMAGES, INITIAL_STATE_IMAGES } from "./constants";
import { fetchGetSearchImageService } from "./service";
import { TypeImages } from "./types";

const DialogBackground: React.FC = () => {
	const { dialogBackgroundImage, setDialogBackgroundImage } = useContextBoard();

	const [images, setImages] = useState<TypeImages>(INITIAL_STATE_IMAGES);
	const [pagination, setPagination] = useState(1);
	const [queryImage, setQueryImage] = useState("");
	const [isLoadingImages, setIsLoadingImages] = useState(false);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const menuRef = useRef<HTMLDivElement | null>(null);
	
	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const closeMenu = () => {
		setAnchorEl(null);
		setImages(INITIAL_STATE_IMAGES);
	};	
	
	const onChange = (event: ChangeEvent<HTMLInputElement>) => setQueryImage(event.target.value);
		
	const handleGetSearchImage = async (resetPagination?: boolean) => {
		try {
			setIsLoadingImages(true);
			const page = resetPagination ? 1 : pagination;
			const { data } = await fetchGetSearchImageService(queryImage, page);

			setImages(data);			
			resetPagination && setPagination(1);
		} catch (error) {			
			setImages(ERROR_STATE_IMAGES);
			console.error("DialogBackground", error);
		} finally {
			setIsLoadingImages(false);
		}		
	};

	useEffect(() => {
		const alreadyRequest = queryImage && pagination !== 1;
		if(alreadyRequest) handleGetSearchImage();
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
				queryImage,
				openMenu,				
				closeMenu,
				anchorEl,
				images,
				dialogBackgroundImage,
				onChooseBackground,
				onRemoveBackground,
				handleGetSearchImage,
				onChange,
				pagination,
				nextPage,
				prevPage,
				menuRef,
				isLoadingImages
			}}
		/>
	);
};

export default memo(DialogBackground);
