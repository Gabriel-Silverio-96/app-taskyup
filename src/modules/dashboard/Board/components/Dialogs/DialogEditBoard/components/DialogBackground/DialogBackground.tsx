import { useContextBoard } from "modules/dashboard/Board/Context";
import React, {
	ChangeEvent,
	MouseEvent,
	memo,
	useEffect,
	useRef,
	useState,
} from "react";
import DialogBackgroundView from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/DialogBackgroundView";
import {
	ERROR_STATE_IMAGES,
	INITIAL_STATE_IMAGES,
} from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/constants";
import { TypeImages } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/types";
import { fetchGetSearchImageService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/services";

const DialogBackground: React.FC = () => {
	const { dialogBackgroundImage, setDialogBackgroundImage } =
		useContextBoard();

	const [images, setImages] = useState<TypeImages>(INITIAL_STATE_IMAGES);
	const [pagination, setPagination] = useState(1);
	const [query, setQuery] = useState("");
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

	const onChange = (event: ChangeEvent<HTMLInputElement>) =>
		setQuery(event.target.value);

	const dialogBackgroundSubmit = async (resetPagination?: boolean) => {
		try {
			setIsLoadingImages(true);
			const page = resetPagination ? 1 : pagination;
			const { data } = await fetchGetSearchImageService({
				params: { query, page },
			});

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
		const shouldFetchImages = query && pagination !== 1;
		if (shouldFetchImages) dialogBackgroundSubmit();
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

	const handleBackgroundImageSelection = (background_image: string) =>
		setDialogBackgroundImage(background_image);
	const handleBackgroundRemoval = () => setDialogBackgroundImage("");

	return (
		<DialogBackgroundView
			{...{
				query,
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
				isLoadingImages,
			}}
		/>
	);
};

export default memo(DialogBackground);
