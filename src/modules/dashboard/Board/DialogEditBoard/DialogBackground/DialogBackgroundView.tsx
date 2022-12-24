import {
	Button, TextField
} from "@mui/material";
import React, { MouseEvent } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { DialogBackground, Menu, MenuImages, MenuImagesFooter, MenuSearch } from "./style";

const DialogBackgroundView: React.FC<any> = (props) => {
	const {
		openMenu,
		isOpenMenu,
		closeMenu,
		anchorEl,
		images,
	} = props;

	const backgroundImage = "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";    
	const thereBackgroundImage = Boolean(backgroundImage);

	return (
		<DialogBackground backgroundimage={backgroundImage}>
			<Button
				variant="contained"
				size="small"
				onClick={(
					event: MouseEvent<HTMLButtonElement>
				) => openMenu(event)}>
				<FiEdit size={15} />
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={isOpenMenu}
				onClose={closeMenu}
				transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
				anchorOrigin={{ vertical: "bottom",	horizontal: "right" }}
				transformOrigin={{ vertical: "top",	horizontal: "right" }}>

				<MenuSearch>
					<TextField placeholder="Search" />	
					<Button>
						<BiSearch size={25} />
					</Button>							
				</MenuSearch>
				<MenuImages>
					{images.map((image: any) => (
						<figure key={image.id}>
							<img src={image.image_url} />
							<figcaption>
								{image.photographer_name}
							</figcaption>
						</figure>
					))}
					<MenuImagesFooter>
						<div>
                        
						</div>
						<div>
							<Button variant="text" onClick={closeMenu}>
                                Close
							</Button>
							<Button variant="contained">
                                Save
							</Button>
						</div>
					</MenuImagesFooter>
				</MenuImages>
			</Menu>
			<Button
				variant="contained"
				color="error"
				size="small"
				disabled={!thereBackgroundImage}>
				<AiOutlineDelete size={15} />
			</Button>
		</DialogBackground>
	);
};

export default DialogBackgroundView;