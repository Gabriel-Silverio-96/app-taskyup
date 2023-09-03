import { useContextBoard } from "modules/dashboard/Board/Context";
import React, { ChangeEvent, MouseEvent, memo, useEffect, useRef, useState } from "react";
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

	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const menuRef = useRef<HTMLDivElement | null>(null);
	
	const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const closeMenu = () => {
		setAnchorEl(null);
		setImages(INITIAL_STATE_IMAGES);
	};	
	
	const onChange = (event: ChangeEvent<HTMLInputElement>) => setQueryImage(event.target.value);
		
	const dialogBackgroundSubmit = async (resetPagination?: boolean) => {
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
		const shouldFetchImages = queryImage && pagination !== 1;
		if(shouldFetchImages) dialogBackgroundSubmit();
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
	
	const handleBackgroundImageSelection = (background_image: string) => setDialogBackgroundImage(background_image);		
	const handleBackgroundRemoval = () => setDialogBackgroundImage("");
		
	return (
		<DialogBackgroundView
			{...{	
				queryImage,
				openMenu,				
				closeMenu,
				anchorEl,
				images,
				dialogBackgroundImage,
				handleBackgroundImageSelection,
				handleBackgroundRemoval,
				dialogBackgroundSubmit,
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
