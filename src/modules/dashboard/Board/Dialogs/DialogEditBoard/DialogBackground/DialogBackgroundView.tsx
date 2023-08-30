import { Button, IconButton, TextField, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight, FiEdit } from "react-icons/fi";
import Loading from "shared/components/Loading";
import {
	DialogBackground,
	Menu,
	MenuImages,
	MenuImagesFooter,
	MenuSearch,
} from "./style";
import { IDialogBackgroundView, TypeImage } from "./types";

const DialogBackgroundView: React.FC<IDialogBackgroundView> = props => {
	const {
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
		isLoadingImages,
	} = props;

	const isOpenMenu = Boolean(anchorEl);
	const disabledButtonDelete = Boolean(dialogBackgroundImage);
	const disabledButtonSearch = Boolean(!queryImage);

	const messageError = images.error && (
		<Typography variant="caption">{images.error}</Typography>
	);
	const messageNoResultsFound = images.total_results === 0 && (
		<Typography variant="caption" display="block" textAlign="center">
			No results found
		</Typography>
	);

	return (
		<DialogBackground backgroundImage={dialogBackgroundImage}>
			<Button
				variant="contained"
				size="small"
				onClick={(event: MouseEvent<HTMLButtonElement>) =>
					openMenu(event)
				}>
				<FiEdit size={15} />
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={isOpenMenu}
				onClose={closeMenu}
				transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				ref={menuRef}>
				<MenuSearch>
					<TextField placeholder="Search" onChange={onChange} />
					<Button
						onClick={() => dialogBackgroundSubmit(true)}
						disabled={disabledButtonSearch}>
						<BiSearch size={25} />
					</Button>
				</MenuSearch>
				<Loading isLoading={isLoadingImages} message="Loading images" />

				{messageError}
				{messageNoResultsFound}

				<MenuImages>
					{images.photos.map((image: TypeImage) => (
						<figure
							key={image.id}
							onClick={() =>
								handleBackgroundImageSelection(image.src.tiny)
							}>
							<img src={image.src.tiny} alt={image.alt} />
							<a
								href={image.photographer_url}
								target="blank"
								rel="noopener noreferrer">
								<figcaption>{image.photographer}</figcaption>
							</a>
						</figure>
					))}
					<MenuImagesFooter>
						<div>
							<Button variant="text" onClick={closeMenu}>
								Close
							</Button>
						</div>
						<div>
							<IconButton
								disabled={pagination === 1}
								onClick={prevPage}>
								<FiChevronLeft size={15} />
							</IconButton>
							<IconButton
								disabled={images.photos.length < 9}
								onClick={nextPage}>
								<FiChevronRight size={15} />
							</IconButton>
						</div>
					</MenuImagesFooter>
				</MenuImages>
			</Menu>
			<Button
				variant="contained"
				color="error"
				size="small"
				disabled={!disabledButtonDelete}
				onClick={handleBackgroundRemoval}>
				<AiOutlineDelete size={15} />
			</Button>
		</DialogBackground>
	);
};

export default DialogBackgroundView;
