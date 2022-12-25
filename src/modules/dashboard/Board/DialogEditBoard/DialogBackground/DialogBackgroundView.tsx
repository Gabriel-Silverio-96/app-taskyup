import {
	Button, IconButton, TextField, Typography
} from "@mui/material";
import React, { MouseEvent } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiEdit, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { DialogBackground, Menu, MenuImages, MenuImagesFooter, MenuSearch } from "./style";

const DialogBackgroundView: React.FC<any> = (props) => {
	const {
		openMenu,		
		closeMenu,
		anchorEl,
		images,
		dialogBackgroundImage,
		onChooseBackground,
		onRemoveBackground
	} = props;

	const isOpenMenu = Boolean(anchorEl);
	const thereBackgroundImage = Boolean(dialogBackgroundImage);

	return (
		<DialogBackground backgroundimage={dialogBackgroundImage}>
			<Button
				variant="contained"
				size="small"
				onClick={(event: MouseEvent<HTMLButtonElement>) => openMenu(event)}>
				<FiEdit size={15} />
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={isOpenMenu}
				onClose={closeMenu}
				transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
				anchorOrigin={{ vertical: "bottom",	horizontal: "right" }}
				transformOrigin={{ vertical: "top",	horizontal: "right" }}
			>					
				<Typography variant="subtitle1" fontWeight={800}>Choose a background</Typography>
				<MenuSearch>
					<TextField placeholder="Search" />	
					<Button>
						<BiSearch size={25} />
					</Button>							
				</MenuSearch>
				<MenuImages>					
					{images.map((image: any) => (
						<figure key={image.id} onClick={() => onChooseBackground(image.src.tiny)}>
							<img src={image.src.tiny} alt={image.alt} />							
							<a href={image.photographer_url} target="blank" rel="noopener noreferrer">
								<figcaption>
									{image.photographer}
								</figcaption>
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
							<IconButton>
								<FiChevronLeft size={15} />
							</IconButton>
							<IconButton>
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
				disabled={!thereBackgroundImage}
				onClick={onRemoveBackground}
			>
				<AiOutlineDelete size={15} />
			</Button>
		</DialogBackground>
	);
};

export default DialogBackgroundView;