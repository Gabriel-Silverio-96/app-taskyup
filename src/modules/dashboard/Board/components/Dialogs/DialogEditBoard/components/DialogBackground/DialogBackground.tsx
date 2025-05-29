import { useBoardContext } from "modules/dashboard/Board/Context";
import DialogBackgroundView from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/DialogBackgroundView";
import {
	ERROR_STATE_IMAGES,
	INITIAL_STATE_IMAGES,
} from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/dialog-background.constants";
import { getSearchImageService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/services";
import type { IGetSearchImagesResponse } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/services/types";
import type { IImages } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/types";
import React, {
	ChangeEvent,
	MouseEvent,
	memo,
	useEffect,
	useRef,
	useState,
} from "react";
import { defineDisabledNextButton } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/utils/define-disabled-next-button/define-disabled-next-button";

const DialogBackground: React.FC = () => {
	const { dialogBackgroundImage, setDialogBackgroundImage } =
		useBoardContext();

	const [images, setImages] = useState<IImages | IGetSearchImagesResponse>(
		INITIAL_STATE_IMAGES
	);
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
			const { data } = await getSearchImageService({
				params: { query, page },
			});

			setImages(data);
			resetPagination && setPagination(1);
		} catch (error) {
			setImages(ERROR_STATE_IMAGES);
		} finally {
			setIsLoadingImages(false);
		}
	};

	useEffect(() => {
		if (query) dialogBackgroundSubmit();
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

	const isOpenMenu = Boolean(anchorEl);
	const disabledButtonDelete = Boolean(dialogBackgroundImage);
	const disabledButtonSearch = Boolean(!query);
	const disabledNextButton = defineDisabledNextButton({ images, pagination });

	return (
		<DialogBackgroundView
			{...{
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
				isOpenMenu,
				disabledButtonDelete,
				disabledButtonSearch,
				disabledNextButton,
			}}
		/>
	);
};

export default memo(DialogBackground);
