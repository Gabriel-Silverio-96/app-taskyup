import React, { useState } from "react";
import DialogBackgroundView from "./DialogBackgroundView";

const INITIAL_STATE_IMAGES = [
	{
		id: 1,
		image_url:
			"https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		photographer_name: "Lum3n",
		photographer_url: "https://www.pexels.com/pt-br/@lum3n-44775/",
	},

	{
		id: 2,
		image_url:
			"https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		photographer_name: "Lum3n",
		photographer_url: "https://www.pexels.com/pt-br/@lum3n-44775/",
	},
	{
		id: 3,
		image_url:
			"https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		photographer_name: "Lum3n",
		photographer_url: "https://www.pexels.com/pt-br/@lum3n-44775/",
	},
];

const DialogBackground: React.FC = () => {
	const [images, setImages] = useState(INITIAL_STATE_IMAGES);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => setAnchorEl(null);
	const isOpenMenu = Boolean(anchorEl);

	return (
		<DialogBackgroundView
			{...{	
				openMenu,
				isOpenMenu,
				closeMenu,
				anchorEl,
				images,
			}}
		/>
	);
};

export default DialogBackground;
